// Global o'zgaruvchilar
let currentSubject = null;
let currentGrade = null;
let currentQuestionIndex = 0;
let testQuestions = [];
let userAnswers = [];
let timerInterval = null;
let timeRemaining = 0;

// DOM elementlari
const screens = {
    home: document.getElementById('home-screen'),
    grade: document.getElementById('grade-screen'),
    info: document.getElementById('info-screen'),
    test: document.getElementById('test-screen'),
    result: document.getElementById('result-screen'),
    review: document.getElementById('review-screen')
};

// Ekranni ko'rsatish
function showScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// Fan tanlash
document.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', function () {
        currentSubject = this.dataset.subject;
        document.getElementById('selected-subject-title').textContent = subjectNames[currentSubject];
        showScreen('grade');
    });
});

// Sinf tanlash
document.querySelectorAll('.grade-card').forEach(card => {
    card.addEventListener('click', function () {
        currentGrade = parseInt(this.dataset.grade);
        showTestInfo();
        showScreen('info');
    });
});

// Test ma'lumotlarini ko'rsatish
function showTestInfo() {
    const data = getQuestions(currentSubject, currentGrade);
    document.getElementById('info-subject').textContent = subjectNames[currentSubject];
    document.getElementById('info-grade').textContent = currentGrade + '-sinf';
    document.getElementById('info-questions').textContent = data.questionCount > 0 ? data.questionCount + ' ta' : 'Mavjud emas';
    document.getElementById('info-time').textContent = data.timeLimit + ' daqiqa';
}

// Orqaga qaytish
function goBack(screen) {
    showScreen(screen);
}

// Testni boshlash
function startTest() {
    const testData = prepareTest(currentSubject, currentGrade);
    if (testData.questions.length === 0) {
        alert('Bu sinf uchun savollar hali kiritilmagan!');
        return;
    }
    testQuestions = testData.questions;
    userAnswers = new Array(testQuestions.length).fill(null);
    currentQuestionIndex = 0;
    timeRemaining = testData.timeLimit * 60;

    document.getElementById('test-subject-label').textContent =
        subjectNames[currentSubject] + ' - ' + currentGrade + '-sinf';

    createQuestionDots();
    showQuestion(0);
    startTimer();
    showScreen('test');
}

// Taymer
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            finishTest();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer').textContent =
        String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
}

// Savol nuqtalarini yaratish
function createQuestionDots() {
    const container = document.getElementById('question-dots');
    container.innerHTML = '';
    testQuestions.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'question-dot';
        dot.textContent = i + 1;
        dot.addEventListener('click', () => showQuestion(i));
        container.appendChild(dot);
    });
}

// Savolni ko'rsatish
function showQuestion(index) {
    currentQuestionIndex = index;
    const question = testQuestions[index];

    document.getElementById('question-number').textContent = 'Savol ' + (index + 1);
    document.getElementById('question-text').textContent = question.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    question.options.forEach((opt, i) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option' + (userAnswers[index] === i ? ' selected' : '');
        optionDiv.innerHTML = '<span class="option-letter">' + letters[i] + '</span><span class="option-text">' + opt + '</span>';
        optionDiv.addEventListener('click', () => selectOption(i));
        optionsContainer.appendChild(optionDiv);
    });

    updateNavigation();
    updateQuestionDots();
    updateProgress();
}

// Javob tanlash
function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    showQuestion(currentQuestionIndex);
}

// Navigatsiyani yangilash
function updateNavigation() {
    document.getElementById('prev-btn').style.display = currentQuestionIndex > 0 ? 'flex' : 'none';
    document.getElementById('next-btn').style.display = currentQuestionIndex < testQuestions.length - 1 ? 'flex' : 'none';
    const finishBtn = document.getElementById('finish-btn');
    finishBtn.classList.toggle('show', currentQuestionIndex === testQuestions.length - 1);
}

// Nuqtalarni yangilash
function updateQuestionDots() {
    const dots = document.querySelectorAll('.question-dot');
    dots.forEach((dot, i) => {
        dot.classList.remove('current', 'answered');
        if (i === currentQuestionIndex) dot.classList.add('current');
        else if (userAnswers[i] !== null) dot.classList.add('answered');
    });
}

// Progress - answered count (no progress bar needed)
function updateProgress() {
    // Progress bar removed - question dots show answered status
}

// Navigatsiya
function previousQuestion() { if (currentQuestionIndex > 0) showQuestion(currentQuestionIndex - 1); }
function nextQuestion() { if (currentQuestionIndex < testQuestions.length - 1) showQuestion(currentQuestionIndex + 1); }

// Testni yakunlash
function finishTest() {
    clearInterval(timerInterval);
    let correct = 0;
    let unanswered = 0;

    testQuestions.forEach((q, i) => {
        if (userAnswers[i] === null) {
            unanswered++;
        } else if (userAnswers[i] === q.correctAnswer) {
            correct++;
        }
    });

    const incorrect = testQuestions.length - correct - unanswered;
    const percentage = Math.round((correct / testQuestions.length) * 100);

    document.getElementById('correct-count').textContent = correct;
    document.getElementById('incorrect-count').textContent = incorrect;
    document.getElementById('unanswered-count').textContent = unanswered;
    document.getElementById('total-count').textContent = testQuestions.length;
    document.getElementById('result-percentage').textContent = percentage + '%';

    const circle = document.getElementById('result-circle');
    const offset = 283 - (283 * percentage / 100);
    setTimeout(() => circle.style.strokeDashoffset = offset, 100);

    showScreen('result');
}

// Xatolar va javobsizlarni ko'rish
function reviewAnswers() {
    const container = document.getElementById('review-container');
    container.innerHTML = '';

    let hasErrors = false;

    testQuestions.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.correctAnswer;
        const isUnanswered = userAnswers[i] === null;

        // Faqat xato yoki javobsizlarni ko'rsat
        if (isCorrect) return;

        hasErrors = true;
        const item = document.createElement('div');
        item.className = 'review-item ' + (isUnanswered ? 'unanswered' : 'incorrect');

        let answersHtml = '';
        const letters = ['A', 'B', 'C', 'D'];
        q.options.forEach((opt, j) => {
            let cls = 'review-answer';
            if (j === q.correctAnswer) cls += ' correct-answer';
            if (j === userAnswers[i] && j !== q.correctAnswer) cls += ' user-wrong';
            answersHtml += '<div class="' + cls + '">' + letters[j] + ') ' + opt + '</div>';
        });

        const statusText = isUnanswered ? '<span class="status-unanswered">Javob berilmagan</span>' : '<span class="status-wrong">Xato javob</span>';
        item.innerHTML = '<div class="review-question"><strong>' + (i + 1) + '.</strong> ' + q.question + ' ' + statusText + '</div><div class="review-answers">' + answersHtml + '</div>';
        container.appendChild(item);
    });

    if (!hasErrors) {
        container.innerHTML = '<div class="no-errors">🎉 Barcha javoblar to\'g\'ri!</div>';
    }

    showScreen('review');
}

// Bosh sahifaga qaytish
function goHome() {
    currentSubject = null;
    currentGrade = null;
    currentQuestionIndex = 0;
    testQuestions = [];
    userAnswers = [];
    showScreen('home');
}
