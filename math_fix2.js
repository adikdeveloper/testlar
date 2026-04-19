const fs = require('fs');
const file = 'c:/Users/Администратор/Downloads/testlar-main/questions.js';
let content = fs.readFileSync(file, 'utf8');

const mathIndex = content.indexOf('math: {');
if (mathIndex !== -1) {
    const before = content.slice(0, mathIndex);
    let after = content.slice(mathIndex);

    // Replace remaining mojibake
    after = after.replace(/Г—/g, '*');
    after = after.replace(/Гј/g, 'u');

    fs.writeFileSync(file, before + after);
    console.log('Fixed multiplication and u.');
} else {
    console.log('Math section not found');
}
