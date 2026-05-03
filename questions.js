// Savollar bazasi
const questionsDatabase = {
    russian: {
        1: {
            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "Qaysi so‘zda harflar soni tovushlar sonidan ko‘p?", options: ["Юла", "Конь", "Мама"], correctAnswer: 1 },
                { question: "\"Ш\" tovushi qanday tovush hisoblanadi?", options: ["Всегда мягкий (Har doim yumshoq)", "Всегда твёрдый (Har doim qattiq)", "Звонкий (Jarangli)"], correctAnswer: 1 },
                { question: "Qaysi qatordagi barcha so‘zlar \"О\" harfi bilan yoziladi?", options: ["С..бака, к..рова", "Тр..ва, к..рандаш", "М..шина, к..тёнок"], correctAnswer: 0 },
                { question: "\"Жи-Ши\" qoidasiga ko‘ra qaysi so‘z to‘g‘ri yozilgan?", options: ["Машына", "Лыжи", "Жизнь"], correctAnswer: 2 },
                { question: "Alifbodagi 10-harfni toping.", options: ["И", "Й", "З"], correctAnswer: 0 },

                // 🔴 Qiyin savollar (6-20)
                { question: "Qaysi so‘zda \"Е\" harfi ikkita tovushni bildiradi?", options: ["Река", "Ель", "Мел"], correctAnswer: 1 },
                { question: "Qaysi so‘z \"Чайник\" so‘zi bilan ma’nodosh (синоним) bo‘la olmaydi?", options: ["Посуда", "Сосуд", "Кукла"], correctAnswer: 2 },
                { question: "Qatordagi \"ortiqcha\" so‘zni toping: Береза, Дуб, Малина, Осина.", options: ["Береза", "Малина", "Осина"], correctAnswer: 1 },
                { question: "Qaysi so‘z bo‘g‘inlarga noto‘g‘ri bo‘lingan?", options: ["О-кунь", "Чай-ка", "Шко-ла"], correctAnswer: 0 },
                { question: "\"Алфавит\" so‘zining ma’nodoshini toping.", options: ["Азбука", "Книга", "Слово"], correctAnswer: 0 },
                { question: "Qaysi so‘zda faqat qattiq undoshlar qatnashgan?", options: ["Машина", "Лыжи", "Школа"], correctAnswer: 2 },
                { question: "\"Медведь\" so‘zida nechta yumshoq undosh tovush bor?", options: ["1 ta", "2 ta", "3 ta"], correctAnswer: 2 },
                { question: "Qaysi so‘zda urg‘u (ударение) birinchi bo‘g‘inga tushadi?", options: ["Щавель", "Арбуз", "Свёкла"], correctAnswer: 2 },
                { question: "Gapni davom ettiring: \"Сентябрь, октябрь, ноябрь — это ...\"", options: ["Зима", "Осень", "Весна"], correctAnswer: 1 },
                { question: "Qaysi so‘zni satrdan-satrga ko‘chirib bo‘lmaydi?", options: ["Утюг", "Окунь", "Юля"], correctAnswer: 2 },
                { question: "\"Лес\" so‘ziga qaysi so‘z ma’nodosh (родственное слово) emas?", options: ["Лесник", "Лесной", "Лестница"], correctAnswer: 2 },
                { question: "Qaysi so‘zda \"Я\" harfi tovush bermaydi, balki undoshning yumshoqligini bildiradi?", options: ["Яблоко", "Мяч", "Маяк"], correctAnswer: 1 },
                { question: "\"Шишка\" so‘zida nechta harf va nechta tovush bor?", options: ["5 harf, 5 tovush", "5 harf, 4 tovush", "5 harf, 6 tovush"], correctAnswer: 0 },
                { question: "Qaysi harf hech qanday tovushni bildirmaydi?", options: ["Й", "Ь", "Ы"], correctAnswer: 1 },
                { question: "Berilgan harflardan so‘z yasang: \"О, К, Л, Ш, А\".", options: ["Лошка", "Школа", "Олька"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        2: {
            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "Alifboda \"Л\" harfidan keyin qaysi harf keladi?", options: ["М", "К", "Н"], correctAnswer: 0 },
                { question: "Qaysi so‘zda doimiy qattiq undosh tovush bor?", options: ["Чаща", "Жизнь", "Щука"], correctAnswer: 1 },
                { question: "Ismlar, familiyalar va shahar nomlari qanday harf bilan yoziladi?", options: ["С маленькой буквы", "С большой буквы", "В кавычках"], correctAnswer: 1 },
                { question: "\"Подъезд\" so‘zida nima uchun \"Ъ\" (ayirish belgisi) qo‘yilgan?", options: ["Undosh va unlini ayirish uchun", "So‘zni chiroyli ko‘rsatish uchun", "Tovushni yumshatish uchun"], correctAnswer: 0 },
                { question: "\"Друг\" so‘ziga qarama-qarshi ma’noli (антоним) so‘zni toping.", options: ["Товарищ", "Враг", "Сосед"], correctAnswer: 1 },

                // 🔴 Qiyin savollar (6-20)
                { question: "Qaysi so‘zda \"О\" harfi urg‘usiz (безударная) bo‘lsa ham, \"О\" deb o‘qiladi?", options: ["Вода", "Радио", "Корова"], correctAnswer: 1 },
                { question: "\"Солнце\" so‘zida qaysi harf talaffuz qilinmaydi (непроизносимая согласная)?", options: ["С", "Л", "Н"], correctAnswer: 1 },
                { question: "Qaysi qatordagi barcha so‘zlar \"shaxs\"ni (кто?) bildiradi?", options: ["Учитель, врач, медведь", "Стол, кукла, повар", "Пенал, заяц, папа"], correctAnswer: 0 },
                { question: "\"Веселье\" so‘zida nechta harf va tovush bor?", options: ["7 harf, 7 tovush", "7 harf, 6 tovush", "7 harf, 8 tovush"], correctAnswer: 0 },
                { question: "Qaysi so‘zning oxirida \"Т\" harfi yoziladi (tekshirish so‘zini eslang)?", options: ["Огоро..", "Крова..ь", "Са.."], correctAnswer: 1 },
                { question: "\"Снежки\" so‘zidagi \"Ж\" harfini qaysi so‘z bilan tekshirish mumkin?", options: ["Снег", "Снежок", "Подснежник"], correctAnswer: 1 },
                { question: "\"Чай\" so‘zining ko‘plik shaklini toping.", options: ["Чаи", "Чаики", "Bu so‘zning ko‘plik shakli yo‘q"], correctAnswer: 2 },
                { question: "Qaysi so‘z \"предмет\"ning harakatini bildiradi?", options: ["Прыжок", "Прыгает", "Прыгучий"], correctAnswer: 1 },
                { question: "Gap ichidagi xato yozilgan so‘zni toping: \"На берегу моря росла красивая сосна\".", options: ["Берегу", "Моря", "Hamma so‘z to‘g‘ri yozilgan"], correctAnswer: 2 },
                { question: "Qaysi so‘z \"однокоренное\" (tizhdosh) emas?", options: ["Вода", "Водитель", "Водный"], correctAnswer: 1 },
                { question: "\"Коллектив\" so‘zida qaysi undosh harf ikkita yoziladi?", options: ["Л", "К", "Т"], correctAnswer: 0 },
                { question: "Qaysi gap darak gap (повествовательное) hisoblanadi?", options: ["Ты сделал уроки?", "Иди домой.", "Сегодня идет дождь."], correctAnswer: 2 },
                { question: "\"Язык\" so‘zi qaysi gapda \"ko‘p ma’noli\" (многозначное) bo‘lib kelgan?", options: ["У ребенка болит язык.", "Русский язык очень красивый.", "Ikkala holatda ham."], correctAnswer: 2 },
                { question: "So‘zlardan gap tuzing: \"лесу, в, зацвели, подснежники\". Birinchi so‘z qaysi?", options: ["В", "Подснежники", "Лесу"], correctAnswer: 1 },
                { question: "Qaysi so‘zda \"Ь\" (yumshatish belgisi) so‘z o‘rtasida kelib, yumshoqlikni bildiradi?", options: ["Мальчик", "Семья", "Листья"], correctAnswer: 0 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        3: {
            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "Qaysi so‘zda \"ь\" (yumshatish belgisi) ayiruvchi vazifasini bajaryapti?", options: ["Соль", "Вьюга", "День"], correctAnswer: 1 },
                { question: "\"Город\" so‘zidagi birinchi \"о\" harfini qaysi so‘z bilan tekshirish mumkin?", options: ["Города", "Загородный", "Городской"], correctAnswer: 1 },
                { question: "Gapning bosh bo‘laklarini (главные члены предложения) toping: \"Осенние листья тихо падают на землю\".", options: ["Осенние листья", "Падают на землю", "Листья падают"], correctAnswer: 2 },
                { question: "Qaysi so‘z turkumi \"предмет\"ning belgisini bildiradi?", options: ["Имя существительное", "Имя прилагательное", "Глагол"], correctAnswer: 1 },
                { question: "\"Сказка\" so‘zidagi \"з\" harfini qaysi so‘z bilan tekshirish to‘g‘ri?", options: ["Сказочка", "Сказки", "Сказать"], correctAnswer: 0 },

                // 🔴 Qiyin savollar (6-20)
                { question: "Qaysi so‘zda \"приставка\" (old qo‘shimcha) mavjud emas?", options: ["Поход", "Поляна", "Покрасил"], correctAnswer: 1 },
                { question: "\"Сердце\" so‘zining o‘zakdosh (однокоренное) so‘zini toping.", options: ["Сердитый", "Сердечный", "Середина"], correctAnswer: 1 },
                { question: "Qaysi so‘z doim faqat birlik shaklida ishlatiladi?", options: ["Молоко", "Стул", "Окно"], correctAnswer: 0 },
                { question: "\"Зарубить на носу\" iborasining (фразеологизм) ma’nosi nima?", options: ["Burunni jarohatlash", "Yaxshilab eslab qolish", "Qattiq xafa bo‘lish"], correctAnswer: 1 },
                { question: "Qaysi so‘zda urg‘u uchinchi bo‘g‘inga tushadi?", options: ["Крапива", "Магазин", "Алфавит"], correctAnswer: 2 },
                { question: "\"Чудес(?)ный\" so‘zida \"т\" harfi yoziladimi?", options: ["Ha, chunki \"чудеса\" so‘zida bor", "Yo‘q, chunki \"чудесен\" deb tekshiriladi", "Ha, bu lug‘at so‘zi"], correctAnswer: 1 },
                { question: "Otlarning (Имя существительное) rodini aniqlang: \"Тюль, мозоль, шампунь\".", options: ["Hammasi muzhskoy rod", "Тюль, шампунь (м.р.), мозоль (ж.р.)", "Hammasi jenskiy rod"], correctAnswer: 1 },
                { question: "\"Лес\" so‘zining \"Предложный падеж\" shaklini toping (maxsus shakl).", options: ["О лесе", "В лесу", "Лесом"], correctAnswer: 1 },
                { question: "Qaysi gapda sifat (прилагательное) ot vazifasida kelgan?", options: ["Больной человек уснул.", "Больной принял лекарство.", "На улице холодная погода."], correctAnswer: 1 },
                { question: "\"Бежать\" fe’lining sinonimini toping.", options: ["Мчаться", "Стоять", "Прыгать"], correctAnswer: 0 },
                { question: "Qaysi so‘z tarkibi to‘g‘ri ko‘rsatilgan: \"Перелесок\"?", options: ["Пере- (приставка), -лес- (корень), -ок (суффикс)", "Перелес- (корень), -ок (суффикс)", "Пере- (приставка), -лесок (корень)"], correctAnswer: 0 },
                { question: "\"Поезд ушел\" gapidagi fe’l qaysi zamonda?", options: ["Настоящее время", "Прошедшее время", "Будущее время"], correctAnswer: 1 },
                { question: "Qaysi qatordagi barcha so‘zlar \"одушевлённые\" (jonli) otlar?", options: ["Кукла, мертвец, фермер", "Робот, цветок, кошка", "Группа, народ, ученик"], correctAnswer: 0 },
                { question: "\"Честный\" so‘zidagi \"т\" tovushini qaysi so‘z bilan tekshiramiz?", options: ["Честь", "Честность", "Честно"], correctAnswer: 0 },
                { question: "Qaysi so‘z bo‘g‘inlarga noto‘g‘ri bo‘lingan?", options: ["О-ке-ан", "Ра-ссказ", "Кла-ссный"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        4: {
            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "\"Солнечный\" so‘zi qaysi so‘z turkumiga kiradi?", options: ["Имя существительное", "Имя прилагательное", "Глагол"], correctAnswer: 1 },
                { question: "Otlarning (Имя существительное) nechta kelishigi (падеж) bor?", options: ["5 ta", "6 ta", "10 ta"], correctAnswer: 1 },
                { question: "\"Учиться всегда пригодится\" gapida fe’llar qaysi shaklda kelgan?", options: ["Неопределенная форма (Инфинитив)", "Настоящее время", "Будущее время"], correctAnswer: 0 },
                { question: "Qaysi so‘zda \"ь\" (yumshatish belgisi) grammatik vazifani (rodni bildirish) bajaryapti?", options: ["Письмо", "Рожь", "Маленький"], correctAnswer: 1 },
                { question: "Gapning ikkinchi darajali bo‘laklari (второстепенные члены) qatorini toping.", options: ["Подлежащее, сказуемое", "Определение, дополнение, обстоятельство", "Существительное, глагол"], correctAnswer: 1 },

                // 🔴 Qiyin savollar (6-20)
                { question: "Qaysi gapda \"мыло\" so‘zi fe’l (глагол) vazifasida kelgan?", options: ["Мама купила душистое мыло.", "Лицо горело, и мыло его прохладной водой.", "Девочка быстро мыло руки."], correctAnswer: 1 },
                { question: "\"Кофе\" so‘zining rodini aniqlang.", options: ["Средний род", "Мужской род", "Женский род"], correctAnswer: 1 },
                { question: "Qaysi so‘zda faqat jarangli (звонкие) undoshlar qatnashgan?", options: ["Город", "Лимон", "Берег"], correctAnswer: 1 },
                { question: "\"Пятьдесят\" soni qaysi kelishikda o‘zgarganda \"ь\" harfi saqlanib qoladi?", options: ["Именительный падеж", "Родительный падеж", "Hammasida"], correctAnswer: 2 },
                { question: "\"Склонение\"ga kirmaydigan (несклоняемые) otni toping.", options: ["Книга", "Метро", "Окно"], correctAnswer: 1 },
                { question: "\"Ни пуха ни пера\" iborasining ma’nosi nima?", options: ["Ovga chiqish", "Omad tilash", "Qattiq urishish"], correctAnswer: 1 },
                { question: "Qaysi fe’l II-spryajeniyaga (II спряжение) kiradi?", options: ["Писать", "Смотреть", "Читать"], correctAnswer: 1 },
                { question: "\"Вкусный варенье\" birikmasida xato bormi?", options: ["Yo‘q, hammasi to‘g‘ri", "Ha, \"Вкусное варенье\" bo‘lishi kerak", "Ha, \"Вкусная варенье\" bo‘lishi kerak"], correctAnswer: 1 },
                { question: "Gapdagi olmoshni (местоимение) toping: \"К нам в гости пришел дедушка\".", options: ["Нам", "Гости", "Дедушка"], correctAnswer: 0 },
                { question: "Qaysi so‘zning o‘zagi (корень) o‘zgaruvchan (чередующиеся гласные)?", options: ["Вода", "Растение", "Гора"], correctAnswer: 1 },
                { question: "\"Пальто\" so‘zining ko‘plik shakli qanday bo‘ladi?", options: ["Пальто", "Пальта", "Пальтишки"], correctAnswer: 0 },
                { question: "Qaysi so‘zda \"С-\" priksitavkasi (old qo‘shimchasi) bor?", options: ["Сделать", "Здесь", "Здоровье"], correctAnswer: 0 },
                { question: "\"Книга – лучший друг\" gapida nima uchun tire (–) qo‘yilgan?", options: ["Egasi va kesimi ot bilan ifodalangani uchun", "Gap tugallangani uchun", "Shunchaki chiroyli chiqishi uchun"], correctAnswer: 0 },
                { question: "\"Писать\" fe’lining \"Будущее сложное время\" (kelasi murakkab zamon) shakli qaysi?", options: ["Напишу", "Буду писать", "Писал"], correctAnswer: 1 },
                { question: "Qaysi so‘z tarkibida ham \"приставка\", ham \"суффикс\" bor?", options: ["Лесник", "Пришкольный", "Городской"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        5: {
            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "Qaysi qatordagi barcha so‘zlarda faqat yumshoq undoshlar bor?", options: ["Цель, щель, чай", "Пень, кисель, синий", "Люстра, мяч, жильё"], correctAnswer: 1 },
                { question: "\"Правописание\" so‘zida nechta o‘zak (корень) bor?", options: ["1 ta", "2 ta", "3 ta"], correctAnswer: 1 },
                { question: "\"Из-за\", \"из-под\" kabi predloglar qanday yoziladi?", options: ["Chiziqcha (дефис) bilan", "Qo‘shib", "Alohida"], correctAnswer: 0 },
                { question: "Qaysi so‘z turkumi gapda har doim hol (обстоятельство) vazifasida keladi?", options: ["Существительное", "Наречие (Ravish)", "Глагол"], correctAnswer: 1 },
                { question: "\"Алфавит\" so‘zida urg‘u qaysi bo‘g‘inga tushadi?", options: ["1-bo‘g‘in", "2-bo‘g‘in", "3-bo‘g‘in"], correctAnswer: 2 },

                // 🔴 Qiyin savollar (6-20)
                { question: "Qaysi so‘zda tovushlar soni harflar sonidan ko‘p?", options: ["Семья", "Яблоко", "Солнце"], correctAnswer: 1 },
                { question: "\"Обогащать\" so‘zining o‘zagi (корень) qaysi?", options: ["-богащ-", "-богат-", "-гащ-"], correctAnswer: 1 },
                { question: "Qaysi so‘zlar juftligi omonim (омонимы) hisoblanadi?", options: ["Замок (qal’a) — замок (qulf)", "Лук (kamon) — лук (piyoz)", "Смелый — храбрый"], correctAnswer: 1 },
                { question: "\"Не\" yuklamasi (частица) qaysi so‘z bilan har doim qo‘shib yoziladi?", options: ["(Не)был", "(Не)годовать", "(Не)знаю"], correctAnswer: 1 },
                { question: "\"Тюль\" so‘zi bilan qaysi sifat to‘g‘ri bog‘langan?", options: ["Красивая тюль", "Красивое тюль", "Красивый тюль"], correctAnswer: 2 },
                { question: "Qaysi so‘zda \"О\" harfi yoziladi?", options: ["Предл..гать", "Изл..жение", "Р..стение"], correctAnswer: 1 },
                { question: "Gap bo‘laklarini aniqlang: \"Старый старик шёл по старой дороге\". Ushbu gapda nechta \"определение\" (sifatlovchi) bor?", options: ["1 ta", "2 ta", "3 ta"], correctAnswer: 1 },
                { question: "\"Бить баклуши\" iborasining ma’nosi nima?", options: ["Idishlarni sindirish", "Bekorchilik qilish", "Ashula aytish"], correctAnswer: 1 },
                { question: "Qaysi so‘zda \"И\" harfi yoziladi?", options: ["Ц..ган", "Ц..фра", "Огурц.."], correctAnswer: 1 },
                { question: "\"Двадцать один\" sonidan keyin kelayotgan ot qaysi shaklda bo‘ladi?", options: ["Книга", "Книги", "Книг"], correctAnswer: 0 },
                { question: "Qaysi gapda \"пунктуация\" (tinish belgilari) xatosi bor?", options: ["Я люблю яблоки, груши и сливы.", "Мама сказала: \"Иди домой\".", "Мы пошли в лес но грибов не нашли."], correctAnswer: 2 },
                { question: "\"Блестеть\" fe’lining o‘zagida (корень) qachon \"И\" yoziladi?", options: ["Hech qachon", "Agar o‘zakdan keyin \"-а\" suffiksi kelsa", "Agar urg‘u tushsa"], correctAnswer: 1 },
                { question: "Qaysi so‘z \"общего рода\" (ham o‘g‘il, ham qiz bolaga nisbatan ishlatiladi)?", options: ["Врач", "Плакса", "Ученик"], correctAnswer: 1 },
                { question: "\"Подъём\" so‘zining fonetik tahlilida qaysi fikr to‘g‘ri?", options: ["6 harf, 6 tovush", "6 harf, 5 tovush", "6 harf, 7 tovush"], correctAnswer: 0 },
                { question: "Murakkab gapni (сложное предложение) toping.", options: ["Снег кружится и ложится на землю.", "Наступила зима, и птицы улетели на юг.", "Дети играли во дворе в прятки."], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        6: {
            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "Qaysi qatordagi barcha so‘zlar sifat (имя прилагательное) hisoblanadi?", options: ["Красиво, синий, тройка", "Лисий, деревянный, весёлый", "Смелость, добрый, учиться"], correctAnswer: 1 },
                { question: "\"Стеклянный, оловянный, деревянный\" so‘zlarida nima uchun ikkita \"н\" yoziladi?", options: ["Bu umumiy qoida", "Bu istisno (исключение) so‘zlar", "O‘zak \"н\" bilan tugagani uchun"], correctAnswer: 1 },
                { question: "\"Себя\" olmoshi (местоимение) qaysi kelishikda (падеж) ishlatilmaydi?", options: ["Родительный", "Именительный", "Дательный"], correctAnswer: 1 },
                { question: "\"Пол-яблока\" so‘zi nima uchun chiziqcha (дефис) bilan yoziladi?", options: ["Keyingi harf unli bo‘lgani uchun", "Keyingi harf \"л\" bo‘lgani uchun", "Keyingi harf bosh harf bo‘lgani uchun"], correctAnswer: 0 },
                { question: "\"Развевающийся (флаг)\" so‘zini qaysi so‘z bilan tekshirish to‘g‘ri?", options: ["Развитие", "Веять", "Вить"], correctAnswer: 1 },

                // 🔴 Qiyin savollar (6-20)
                { question: "Qaysi son (числительное) faqat ikkita kelishik shakliga ega (И.п. va В.п. bir xil, qolganlari bir xil)?", options: ["Сорок", "Пятьдесят", "Одиннадцать"], correctAnswer: 0 },
                { question: "\"Не\" yuklamasi qaysi olmosh bilan alohida yoziladi?", options: ["(Не)кто", "(Не)у кого", "(Не)чего"], correctAnswer: 1 },
                { question: "Qaysi sifat \"относительное прилагательное\" (nisbiy sifat) hisoblanadi?", options: ["Железная дверь", "Умный мальчик", "Громкий голос"], correctAnswer: 0 },
                { question: "\"Пребывать в городе\" va \"Прибывать в город\" birikmalarida ma’no qanday farqlanadi?", options: ["Farqi yo‘q", "Birinchisi — shahar ichida bo‘lish, ikkinchisi — shaharga yetib kelish", "Birinchisi — shaharga kelish, ikkinchisi — ketish"], correctAnswer: 1 },
                { question: "Qaysi qatorda faqat \"разделительный Ъ\" (ayirish belgisi) yoziladigan so‘zlar berilgan?", options: ["Об..явление, с..езд, под..езд", "Вьюга, сем..я, л..ёт", "П..еса, бул..он, об..ём"], correctAnswer: 0 },
                { question: "\"Двое друзей\" birikmasidagi \"двое\" qaysi turdagi son hisoblanadi?", options: ["Количественное", "Собирательное", "Порядковое"], correctAnswer: 1 },
                { question: "\"Обеими руками\" birikmasi to‘g‘rimi?", options: ["Ha, chunki \"рука\" — jenskiy rod", "Yo‘q, \"Обоими руками\" bo‘lishi kerak", "Yo‘q, \"Обеи руками\" bo‘lishi kerak"], correctAnswer: 0 },
                { question: "Qaysi so‘zda \"-чик\" suffiksi yoziladi?", options: ["Перебеж..ик", "Перевод..ик", "Свар..ик"], correctAnswer: 1 },
                { question: "\"Колоссальный\" so‘zining ma’nosini toping.", options: ["Juda kichik", "Juda ulkan", "Juda eski"], correctAnswer: 1 },
                { question: "Qaysi olmosh \"отрицательное\" (bo‘lishsizlik) olmoshi?", options: ["Никто", "Кое-кто", "Кто-то"], correctAnswer: 0 },
                { question: "Qaysi so‘zda \"При-\" pristavkasi \"juda\" (очень) ma’nosini bildiradi?", options: ["Приморский", "Приоткрыть", "Прекрасный (Eslatma: bu yerda \"пре\" so‘ralmoqda)"], correctAnswer: 2 },
                { question: "Gapni davom ettiring: \"Имя числительное обозначает...\"", options: ["Предмет", "Признак предмета", "Количество или порядок предметов при счёте"], correctAnswer: 2 },
                { question: "\"В течени.. реки\" va \"В течени.. часа\" iboralarida oxirgi harflar qanday bo‘ladi?", options: ["Ikkalasida ham \"Е\"", "Birinchisida \"И\", ikkinchisida \"Е\"", "Birinchisida \"Е\", ikkinchisida \"И\""], correctAnswer: 1 },
                { question: "Qaysi so‘z o‘zgaruvchan o‘zakli (чередование) emas?", options: ["Собирать", "Примирять (врагов)", "Замирать"], correctAnswer: 1 },
                { question: "\"Его книга\" birikmasidagi \"Его\" so‘zi qaysi so‘z turkumi?", options: ["Личное местоимение", "Притяжательное местоимение", "Существительное"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        7: {
            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "Qaysi so‘z turkumi gapda har doim faqat aniqlovchi (определение) vazifasida keladi?", options: ["Причастие", "Деепричастие", "Наречие"], correctAnswer: 0 },
                { question: "\"Деепричастие\" (Ravishdosh) qaysi so‘roqlarga javob beradi?", options: ["Какой? Какая?", "Что делая? Что сделав?", "Как? Где? Куда?"], correctAnswer: 1 },
                { question: "\"Не\" yuklamasi qaysi deeprichastie bilan qo‘shib yoziladi?", options: ["(Не)думая", "(Не)навидя", "(Не)зная"], correctAnswer: 1 },
                { question: "\"Prichastie\" (Sifatdosh) qaysi ikki so‘z turkumi xususiyatlarini o‘zida birlashtiradi?", options: ["Sifat va Fe’l", "Sifat va Ravish", "Fe’l va Ravish"], correctAnswer: 0 },
                { question: "Qaysi so‘zda \"НН\" yoziladi?", options: ["Жареная рыба", "Поджаренная рыба", "Мороженая рыба"], correctAnswer: 1 },

                // 🔴 Qiyin savollar (6-20)
                { question: "Qaysi gapda \"Prichastniy oborot\" (sifatdoshli qurilma) mavjud va u vergul bilan ajratilishi shart?", options: ["Мальчик бегущий по дороге быстро скрылся.", "Бегущий по дороге мальчик быстро скрылся.", "Бегущий мальчик быстро скрылся."], correctAnswer: 0 },
                { question: "\"Ни\" harfi yoziladigan qatorni toping:", options: ["Н.. во что н.. верить", "Н.. мог н.. прийти", "Н.. верил н.. на грош"], correctAnswer: 2 },
                { question: "Qaysi ravish (наречие) chiziqcha (дефис) bilan yozilmaydi?", options: ["(По)моему", "(По)этому", "(Кое)как"], correctAnswer: 1 },
                { question: "\"Причастный оборот\" va \"Деепричастный оборот\"ning farqi nimada?", options: ["Birinchisi otga, ikkinchisi fe’lga bog‘lanadi", "Birinchisi harakatni, ikkinchisi belgini bildiradi", "Farqi yo‘q"], correctAnswer: 0 },
                { question: "Qaysi so‘zda \"Е\" harfi yoziladi?", options: ["Реш..нный вопрос", "Нагрет..ый чай", "Увид..нный сон"], correctAnswer: 0 },
                { question: "\"Вследствие дождя\" birikmasidagi \"Вследствие\" so‘zining turi nima?", options: ["Производный предлог (Yasama predlog)", "Существительное с предлогом", "Наречие"], correctAnswer: 0 },
                { question: "\"Также\" so‘zi qaysi gapda qo‘shib yoziladi (soyuz vazifasida)?", options: ["Мы так(же) пошли в кино.", "Сделай так(же), как я.", "Он говорил одно и то(же)."], correctAnswer: 0 },
                { question: "Qaysi deeprichastie \"совершенный вид\" (tugallangan shakl) hisoblanadi?", options: ["Играя", "Прочитав", "Рисуя"], correctAnswer: 1 },
                { question: "\"В течении пяти минут\" — ushbu iborada oxirgi harf nima uchun \"И\" emas, \"Е\"?", options: ["Chunki bu vaqtni bildiruvchi predlog", "Chunki bu daryo oqimi", "Xato yozilgan, \"И\" bo‘lishi kerak"], correctAnswer: 0 },
                { question: "Qaysi so‘zda \"Ь\" yozilmaydi?", options: ["Настежь", "Вскачь", "Замуж"], correctAnswer: 2 },
                { question: "\"Горячо\" so‘zi oxirida nima uchun \"О\" yoziladi?", options: ["Urg‘u ostida bo‘lgani uchun", "Urg‘usiz bo‘lgani uchun", "Bu istisno so‘z"], correctAnswer: 0 },
                { question: "\"Несмотря на\" (qaramasdan) predlogi qachon deeprichastie bo‘lib kelishi mumkin?", options: ["Ko‘z bilan ko‘rish harakati nazarda tutilganda", "Hech qachon", "Har doim"], correctAnswer: 0 },
                { question: "\"Краткое причастие\" (qisqa sifatdosh) gapda qaysi vazifani bajaradi?", options: ["Сказуемое (Kesim)", "Определение (Aniqlovchi)", "Дополнение (To‘ldiruvchi)"], correctAnswer: 0 },
                { question: "Qaysi qatorda \"Ни\" chastitsasi (yuklamasi) bor?", options: ["Н.. разу не был", "Н.. раз бывал", "Н.. знал правды"], correctAnswer: 0 },
                { question: "\"Кованый\" so‘zida nima uchun bitta \"Н\" yoziladi?", options: ["Chunki -ова- o‘zakning bir qismi (istisno kabidir)", "Chunki unda priksitavka yo‘q", "Chunki bu sifat"], correctAnswer: 0 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        8: {
            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "Gapning ikkinchi darajali bo‘laklari qaysilar?", options: ["Подлежащее, сказуемое", "Дополнение, определение, обстоятельство", "Существительное, прилагательное, глагол"], correctAnswer: 1 },
                { question: "\"Undalma\" (Обращение) gapda qanday tinish belgisi bilan ajratiladi?", options: ["Tire", "Nuqtali vergul", "Vergul"], correctAnswer: 2 },
                { question: "\"Kirish so‘zlar\" (Вводные слова) gapda qaysi vazifani bajaradi?", options: ["Gap bo‘lagi bo‘lmaydi, shunchaki munosabat bildiradi", "To‘ldiruvchi vazifasida keladi", "Kesimning bir qismi bo‘ladi"], correctAnswer: 0 },
                { question: "Qaysi gap \"bir tarkibli\" (односоставное) hisoblanadi?", options: ["Наступил вечер.", "Вечереет.", "Я люблю вечер."], correctAnswer: 1 },
                { question: "\"Aniqlovchi\" (Определение) ko‘pincha qaysi so‘z turkumi bilan ifodalanadi?", options: ["Наречие", "Имя прилагательное", "Глагол"], correctAnswer: 1 },

                // 🔴 Qiyin savollar (6-20)
                { question: "Qaysi gapda \"Приложение\" (izohlovchi aniqlovchi) bor?", options: ["Озеро Байкал очень глубокое.", "Красивый цветок рос в саду.", "Он быстро бежал."], correctAnswer: 0 },
                { question: "\"Безличное предложение\" (shaxsi noma’lum gap) qatorini toping:", options: ["Мне не спится.", "Иду в школу.", "В дверь постучали."], correctAnswer: 0 },
                { question: "Qaysi gapda \"несмотря на\" (ajratilgan hol) qatnashgan va u vergul bilan ajratilishi shart?", options: ["Несмотря на дождь мы пошли гулять.", "Он шел не смотря по сторонам.", "Мы все сделали правильно."], correctAnswer: 0 },
                { question: "\"Кажется\" so‘zi qaysi gapda kirish so‘z emas, balki \"kesim\" vazifasida kelgan?", options: ["Кажется, скоро пойдет дождь.", "Мир кажется прекрасным.", "Он, кажется, опоздал."], correctAnswer: 1 },
                { question: "\"Согласованное определение\" (moslashgan aniqlovchi) qaysi birikmada berilgan?", options: ["Юбка в клетку", "Клетчатая юбка", "Желание учиться"], correctAnswer: 1 },
                { question: "Qaysi gapda \"tire\" (–) egasi va kesimi orasiga noto‘g‘ri qo‘yilgan?", options: ["Мой брат — учитель.", "Читать — значит много знать.", "Он — мой лучший друг."], correctAnswer: 2 },
                { question: "\"Однородные члены предложения\" (gapning bir turdagi bo‘laklari) qachon vergul bilan ajratilmaydi?", options: ["\"И\" bog‘lovchisi bilan bir marta bog‘lansa", "\"А\" bog‘lovchisi bilan bog‘lansa", "Har doim ajratiladi"], correctAnswer: 0 },
                { question: "\"Уточняющие члены предложения\" (aniqlashtiruvchi bo‘laklar) ko‘pincha qaysi gap bo‘lagiga tegishli bo‘ladi?", options: ["Определение", "Обстоятельство (hol)", "Дополнение"], correctAnswer: 1 },
                { question: "\"В дверь постучали\" — bu qanday gap?", options: ["Определенно-личное", "Неопределенно-личное", "Безличное"], correctAnswer: 1 },
                { question: "Qaysi so‘z \"вводное слово\" (kirish so‘z) bo‘la olmaydi?", options: ["Пожалуй", "Наверное", "Якобы"], correctAnswer: 2 },
                { question: "\"Причастный оборот\" gap boshida kelsa, qachon vergul bilan ajratiladi?", options: ["Agar u sabab ma’nosini (obstoyatelstvennoye znacheniye) bildirsa", "Hech qachon ajratilmaydi", "Har doim ajratiladi"], correctAnswer: 0 },
                { question: "\"Прямая речь\" (ko‘chirma gap) o‘rtasida muallif so‘zlari kelsa, qanday tinish belgilari qo‘yiladi?", options: ["Vergul va tire", "Faqat nuqta", "Qavslar"], correctAnswer: 0 },
                { question: "Qaysi so‘z birikmasi \"Управление\" (boshqaruv) usulida bog‘langan?", options: ["Интересная книга", "Читать книгу", "Быстро бежать"], correctAnswer: 1 },
                { question: "\"Всё: и небо, и земля, и море — было серым\". Nima uchun bu yerda ham ikki nuqta, ham tire qo‘yilgan?", options: ["\"Всё\" umumlashtiruvchi so‘z bo‘lgani uchun", "Gap murakkab bo‘lgani uchun", "Shunchaki pauza uchun"], correctAnswer: 0 },
                { question: "Qaysi gapda xato bor?", options: ["С одной стороны, он прав.", "Наконец-то, мы приехали!", "К счастью, погода наладилась."], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        9: {
            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "Qo‘shma gaplar (Сложные предложения) nechta asosiy turga bo‘linadi?", options: ["2 ta (Bog‘lovchili va bog‘lovchisiz)", "3 ta (Bog‘langan, ergashgan, bog‘lovchisiz)", "4 ta (Darak, so‘roq, buyruq, his-hayajon)"], correctAnswer: 1 },
                { question: "\"Bog‘langan qo‘shma gap\" (ССП) qaysi bog‘lovchilar yordamida hosil bo‘ladi?", options: ["Сочинительные союзы (и, а, но, зато)", "Подчинительные союзы (что, потому что, если)", "Союзные слова (который, чей, где)"], correctAnswer: 0 },
                { question: "\"Bog‘lovchisiz qo‘shma gap\" (БСП) qismlari orasida qaysi tinish belgisi ishlatilmaydi?", options: ["Nuqta", "Ikki nuqta yoki tire", "Defis (Chiziqcha)"], correctAnswer: 2 },
                { question: "\"СПП\" gaplarda ergash gapni (придаточное) bosh gapdan ajratish uchun nima qo‘yiladi?", options: ["Tire", "Vergul", "Qavs"], correctAnswer: 1 },
                { question: "Qaysi gapda \"что\" so‘zi \"soyuz\" vazifasida kelgan?", options: ["Я знаю, что ты придешь.", "Что ты делаешь?", "Я не знаю, что мне купить."], correctAnswer: 0 },

                // 🔴 Qiyin savollar (6-20)
                { question: "\"Bog‘lovchisiz qo‘shma gapda\" (БСП) qachon \"ikki nuqta\" (двоеточие) qo‘yiladi?", options: ["Ikkinchi qism birinchisining sababini tushuntirsa", "Birinchi qism ikkinchisining natijasini bildirsa", "Qismlar orasida zidlik (protivopostavleniye) bo‘lsa"], correctAnswer: 0 },
                { question: "Qaysi gap \"СПП с придаточным определительным\" (aniqlovchi ergash gap) hisoblanadi?", options: ["Я пришел туда, где bizni kutishardi.", "Дерево, которое росло у дома, зацвело.", "Когда пошел дождь, мы ушли."], correctAnswer: 1 },
                { question: "Qaysi gapda \"tire\" (–) qismlar orasidagi keskin natija yoki vaqtni bildiryapti?", options: ["Сыр выпал — с ним была плутовка такова.", "Наступило утро: птицы запели.", "Я знаю: мир прекрасен."], correctAnswer: 0 },
                { question: "\"Сложноподчиненное предложение с несколькими придаточными\" — agar ergash gaplar bitta bosh gapga va bitta so‘roqqa javob bersa, bu qanday bog‘lanish?", options: ["Последовательное", "Однородное", "Параллельное"], correctAnswer: 1 },
                { question: "\"Едва\" so‘zi qaysi turdagi ergash gapni hosil qiladi?", options: ["Придаточное времени (vaqt)", "Придаточное цели (maqsad)", "Придаточное условия (shart)"], correctAnswer: 0 },
                { question: "Qaysi gapda \"пунктуация\" (tinish belgilari) xatosi bor?", options: ["Он сказал, что если пойдет дождь, мы останемся дома.", "Он сказал, что, если пойдет дождь, то мы останемся дома.", "Он сказал, что если пойдет дождь, то мы останемся дома."], correctAnswer: 1 },
                { question: "\"Не то... не то...\" bog‘lovchisi gapning qaysi turiga xos?", options: ["СПП", "ССП (Разделительные)", "БСП"], correctAnswer: 1 },
                { question: "\"Придаточное уступительное\" (to‘siqsiz ergash gap) qaysi bog‘lovchi bilan boshlanadi?", options: ["Хотя", "Если", "Потому что"], correctAnswer: 0 },
                { question: "Qismlari mazmunan uzoq va ichida o‘zining vergullari bor qo‘shma gapda qaysi belgi qo‘yiladi?", options: ["Tire", "Ikki nuqta", "Nuqtali vergul (;)"], correctAnswer: 2 },
                { question: "\"Как\", \"будто\", \"словно\" bog‘lovchilari qaysi ergash gap turini hosil qiladi?", options: ["Изъяснительное", "Сравнительное (qiyosiy)", "Места"], correctAnswer: 1 },
                { question: "\"Bog‘lovchisiz qo‘shma gapda\" (БСП) qismlar orasida zidlik (a, no ma’nosi) bo‘lsa, nima qo‘yiladi?", options: ["Tire", "Ikki nuqta", "Vergul"], correctAnswer: 0 },
                { question: "\"Последовательное подчинение\" — bu nima?", options: ["Birinchi ergash gap bosh gapga, ikkinchisi esa birinchi ergash gapga bog‘lanishi", "Hamma ergash gaplar bosh gapga bog‘lanishi", "Gaplar bog‘lovchisiz bog‘lanishi"], correctAnswer: 0 },
                { question: "Qaysi gap \"СПП с придаточным условия\" (shart ergash gap)?", options: ["Раз ты обещал, то должен сделать.", "Мы пошли туда, где было весело.", "Я не слышал, что он говорил."], correctAnswer: 0 },
                { question: "\"Сложное синтаксическое целое\" deganda nima tushuniladi?", options: ["Bir nechta gaplarning ma’no jihatdan bog‘langan guruhi (matn)", "Oddiy gap", "So‘z birikmasi"], correctAnswer: 0 },
                { question: "Qaysi javobda bog‘lovchi so‘z (союзное слово) qatnashgan?", options: ["Я верю, что ты победишь.", "Город, в котором я живу, очень красив.", "Мама просила, чтобы я купил хлеб."], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        10: {
            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "Qaysi gap ergashgan qo‘shma gap hisoblanadi?", options: ["Я вошёл в класс и сел.", "Когда начался урок, все замолчали.", "На улице дождь.", "Деревья шумят."], correctAnswer: 1 },
                { question: "Qaysi so‘z ravishdosh hisoblanadi?", options: ["Идя", "Идущий", "Ходьба", "Ходить"], correctAnswer: 0 },
                { question: "Qaysi so‘z sifatdosh hisoblanadi?", options: ["Читая", "Прочитав", "Читающий", "Чтение"], correctAnswer: 2 },
                { question: "Qaysi qatorda kirish so‘z qatnashgan?", options: ["К сожалению, поезд опоздал.", "Поезд опоздал на час.", "Мы ждали поезд.", "Он пришёл поздно."], correctAnswer: 0 },
                { question: "Qaysi gapda undalma bor?", options: ["Друзья, давайте обсудим это.", "Друзья пришли вовремя.", "Я встретил друзей.", "Мы говорили о друзьях.\nQiyinroq savollar"], correctAnswer: 0 },

                // 🔴 Qiyinroq savollar (6-15)
                { question: "'Я знаю, что экзамен будет трудным.' gapida ergash gapning turi qaysi?", options: ["Aniqlovchi", "To‘ldiruvchi", "Payt", "Maqsad"], correctAnswer: 1 },
                { question: "'Дом, который построили недавно, уже заселён.' gapida ergash gap qaysi turga kiradi?", options: ["Aniqlovchi", "Sabab", "Shart", "Natija"], correctAnswer: 0 },
                { question: "'Если бы у меня было время, я бы прочитал эту книгу.' gapida qanday ma'no ifodalangan?", options: ["Sabab", "Payt", "Shart", "Maqsad"], correctAnswer: 2 },
                { question: "'Он сказал, что вернётся вечером.' gapida 'что вернётся вечером' qaysi vazifani bajaradi?", options: ["Aniqlovchi", "To‘ldiruvchi", "Hol", "Ega"], correctAnswer: 1 },
                { question: "'Несмотря на усталость, спортсмен продолжал тренировку.' gapidagi 'несмотря на' nimaga kiradi?", options: ["Bog‘lovchi", "Murakkab predlog", "Yuklama", "Ravish"], correctAnswer: 1 },
                { question: "'Человек, читающий книгу у окна, мой брат.' gapida ajratilgan bo‘lak qaysi?", options: ["мой брат", "человек", "читающий книгу у окна", "у окна"], correctAnswer: 2 },
                { question: "'Во-первых, нужно внимательно прочитать текст.' gapida 'во-первых' nimaga kiradi?", options: ["Kirish so‘z", "Ravish", "Undalma", "To‘ldiruvchi"], correctAnswer: 0 },
                { question: "'Услышав новость, он сразу позвонил другу.' gapida ravishdosh birikma qaysi?", options: ["он сразу", "позвонил другу", "услышав новость", "сразу позвонил"], correctAnswer: 2 },
                { question: "'Как только прозвенел звонок, ученики вошли в класс.' gapida ergash gap turi qaysi?", options: ["Payt", "Sabab", "Maqsad", "Aniqlovchi"], correctAnswer: 0 },
                { question: "'Он был не готов к ответу.' birikmasida 'не' qanday yoziladi?", options: ["Qo‘shib", "Ajratib", "Defis bilan", "Har doim ikki xil bo‘ladi\nChalg‘ituvchi savollar"], correctAnswer: 1 },

                // 🟡 Chalg‘ituvchi savollar (16-20)
                { question: "'Писатель, по мнению критиков, создал лучшее произведение.' gapida 'по мнению критиков' nimaga kiradi?", options: ["Kirish birikma", "Ega", "Kesim", "To‘ldiruvchi"], correctAnswer: 0 },
                { question: "'Книга прочитана учеником.' gapida 'учеником' qaysi kelishikda turibdi?", options: ["Bosh kelishik", "Tushum kelishigi", "Vositali kelishik", "Qaratqich kelishigi"], correctAnswer: 2 },
                { question: "'Чем больше человек читает, тем богаче его речь.' gapida qanday munosabat ifodalangan?", options: ["Sabab", "Qiyosiy munosabat", "Payt", "Zidlov"], correctAnswer: 1 },
                { question: "'Все были готовы к выступлению: и ведущие, и участники, и гости.' gapida ikki nuqta nima uchun qo‘yilgan?", options: ["Ko‘chirma gapdan oldin", "Umumlashtiruvchi so‘zdan keyin uyushiq bo‘laklar kelgani uchun", "Ergash gapdan oldin", "Undovdan keyin"], correctAnswer: 1 },
                { question: "'Он ответил: «Я обязательно приду завтра».' gapida qanday sintaktik hodisa bor?", options: ["O‘zlashtirma gap", "Ko‘chirma gap", "Kirish so‘z", "Ajratilgan hol"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        11: {
            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "Qaysi gap bog‘lovchisiz qo‘shma gap hisoblanadi?", options: ["Я вошёл, и все посмотрели на меня.", "Наступил вечер — стало прохладно.", "Когда я пришёл, урок уже начался.", "Мы сидели и разговаривали."], correctAnswer: 1 },
                { question: "Qaysi qatorda ajratilgan aniqlovchi qatnashgan?", options: ["Девочка, читающая книгу, сидела у окна.", "Девочка сидела у окна.", "У окна сидела девочка.", "Книга лежала на столе."], correctAnswer: 0 },
                { question: "Qaysi so‘z kirish so‘z bo‘la oladi?", options: ["конечно", "окно", "бежать", "вчера"], correctAnswer: 0 },
                { question: "Qaysi gapda undov intonatsiyasi bor?", options: ["Как прекрасна эта музыка!", "Где лежит тетрадь?", "Мы слушали музыку.", "Музыка звучала тихо."], correctAnswer: 0 },
                { question: "Qaysi vosita ko‘chirma gapni rasmiylashtirishda ishlatiladi?", options: ["Tirnoq", "Faqat vergul", "Faqat nuqta", "Qavs\nQiyinroq savollar"], correctAnswer: 0 },

                // 🔴 Qiyinroq savollar (6-15)
                { question: "'Я рад, что ты пришёл.' gapida ergash gap turi qaysi?", options: ["Aniqlovchi", "To‘ldiruvchi", "Payt", "Shart"], correctAnswer: 1 },
                { question: "'Тот, кто много читает, умеет ясно выражать мысли.' gapida 'кто много читает' qismi nimani aniqlab kelmoqda?", options: ["тот olmoshini", "умеет fe'lini", "мысли otini", "ясно ravishini"], correctAnswer: 0 },
                { question: "'Хотя было уже поздно, работа продолжалась.' gapidagi ergash gap turi qaysi?", options: ["Sabab", "Shart", "To‘siqsizlik", "Natija"], correctAnswer: 2 },
                { question: "'Он говорил так тихо, что его почти не слышали.' gapida qanday ma'no ifodalangan?", options: ["Daraja va natija", "Payt", "Sabab", "Maqsad"], correctAnswer: 0 },
                { question: "'По словам директора, проект будет завершён вовремя.' gapida 'по словам директора' nimaga kiradi?", options: ["Kirish birikma", "To‘ldiruvchi", "Kesim", "Hol"], correctAnswer: 0 },
                { question: "'Не прочитав статью, нельзя делать выводы.' gapida ravishdosh birikma qanday ma'no beradi?", options: ["Payt", "Shart / sababga yaqin holat", "Aniqlovchi", "Natija"], correctAnswer: 1 },
                { question: "'Студент, уставший после занятий, всё же продолжал работать.' gapida ajratilgan bo‘lak qaysi?", options: ["студент", "продолжал работать", "уставший после занятий", "всё же"], correctAnswer: 2 },
                { question: "'Не' qaysi holatda fe'l bilan alohida yoziladi?", options: ["ненавидеть", "недоумевать", "не знал", "невзлюбить"], correctAnswer: 2 },
                { question: "'В течение недели мы готовились к олимпиаде.' gapidagi 'в течение' nimaga kiradi?", options: ["Hosila predlog", "Bog‘lovchi", "Ravish", "Yuklama"], correctAnswer: 0 },
                { question: "'Он не только подготовил доклад, но и выступил с ним блестяще.' gapida qanday bog‘lovchi qo‘llangan?", options: ["Zidlov bog‘lovchi", "Juft bog‘lovchi", "Ayiruv bog‘lovchi", "Ergash gap bog‘lovchisi\nChalg‘ituvchi savollar"], correctAnswer: 1 },

                // 🟡 Chalg‘ituvchi savollar (16-20)
                { question: "'Солнце скрылось за тучами — начался сильный дождь.' gapida tire nima ma'noni kuchaytiradi?", options: ["Izohlash", "Tez almashinuvchi voqealar yoki natija", "Uyushiq bo‘lak", "Undalma"], correctAnswer: 1 },
                { question: "'Я уверен: решение будет найдено.' gapida ikki nuqta nima sababdan ishlatilgan?", options: ["Ko‘chirma gap uchun", "Ikkinchi qism birinchi qism mazmunini ochib bergani uchun", "Undalma uchun", "Uyushiq bo‘lak uchun"], correctAnswer: 1 },
                { question: "'Книга, как мне кажется, очень интересна.' gapida 'как мне кажется' nimaga kiradi?", options: ["Kirish gapcha", "Aniqlovchi", "Ega", "To‘ldiruvchi"], correctAnswer: 0 },
                { question: "'Те, кто опоздал, вошли тихо.' gapida bosh gap qaysi?", options: ["кто опоздал", "те вошли тихо", "опоздал", "кто вошли тихо"], correctAnswer: 1 },
                { question: "'Не всё то золото, что блестит.' gapida ergash gapning turi qaysi?", options: ["Aniqlovchi", "To‘ldiruvchi", "Ega", "Payt"], correctAnswer: 0 }
            ],
            questionCount: 20,
            timeLimit: 20
        }
    },
    english: {
        1: {
            questions: [
                { question: "\"Salom\" so'zining ingliz tilidagi tarjimasi qanday?", options: ["Hello", "Bye", "Yes", "No"], correctAnswer: 0 },
                { question: "Qizil rang ingliz tilida nima deyiladi?", options: ["Blue", "Red", "Green", "Yellow"], correctAnswer: 1 },
                { question: "\"1\" raqami ingliz tilida qanday aytiladi?", options: ["Two", "Three", "One", "Four"], correctAnswer: 2 },
                { question: "\"Cat\" so'zi o'zbek tilida qanday ma'noni bildiradi?", options: ["Kuchuk", "Mushuk", "Sigir", "Ot"], correctAnswer: 1 },
                { question: "\"Ona\" so'zining inglizcha tarjimasi nima?", options: ["Father", "Brother", "Mother", "Sister"], correctAnswer: 2 },
                { question: "Ingliz alifbosida eng birinchi keladigan harf qaysi?", options: ["B", "C", "A", "D"], correctAnswer: 2 },
                { question: "Qaysi javobdagi so'z meva (fruit) hisoblanadi?", options: ["Apple", "Dog", "Pen", "Book"], correctAnswer: 0 },
                { question: "\"Five\" va \"Two\" raqamlarini qo'shsak, ingliz tilida qaysi raqam hosil bo'ladi? (5+2 = ?)", options: ["Six", "Seven", "Eight", "Ten"], correctAnswer: 1 },
                { question: "Qaysi so'z inglizcha \"B\" harfidan boshlanadi?", options: ["Cat", "Apple", "Boy", "Sun"], correctAnswer: 2 },
                { question: "\"Mening ismim...\" deyish uchun ingliz tilida qaysi gap to'g'ri?", options: ["My name is...", "I name is...", "He name is...", "You name is..."], correctAnswer: 0 },
                { question: "Qaysi hayvonning bo'yni juda uzun?", options: ["Lion (Sher)", "Giraffe (Jirafa)", "Monkey (Maymun)", "Fish (Baliq)"], correctAnswer: 1 },
                { question: "\"Goodbye\" so'zi qachon aytiladi?", options: ["Ertalab ko'rishganda", "Xayrlashganda", "Rahmat aytganda", "Uxlab qolganda"], correctAnswer: 1 },
                { question: "Oq rangning inglizcha tarjimasini toping.", options: ["Black", "Pink", "White", "Orange"], correctAnswer: 2 },
                { question: "O'qituvchi \"Stand up!\" desa, o'quvchi nima qilishi kerak?", options: ["O'tirishi", "Yugurishi", "Kitob o'qishi", "O'rnidan turishi"], correctAnswer: 3 },
                { question: "Qaysi biri o'quv quroli (maktabda ishlatiladigan narsa) emas?", options: ["Pen", "Pencil", "Book", "Car"], correctAnswer: 3 },
                { question: "Qaysi so'z qolganlaridan farq qiladi (Odd one out)?", options: ["One", "Two", "Three", "Boy"], correctAnswer: 3 },
                { question: "Ingliz alifbosida jami nechta harf bor?", options: ["24", "25", "26", "30"], correctAnswer: 2 },
                { question: "\"Katta\" so'zining inglizcha tarjimasi nima?", options: ["Big", "Small", "Little", "Short"], correctAnswer: 0 },
                { question: "Rasm chizish yoki yozish uchun ishlatiladigan buyumni toping.", options: ["Apple", "Pencil", "Milk", "Cat"], correctAnswer: 1 },
                { question: "\"Ten\" so'zi qaysi raqamni bildiradi?", options: ["5", "8", "9", "10"], correctAnswer: 3 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        2: {
            questions: [
                { question: "Ingliz alifbosida \"A\" harfidan keyin qaysi harf keladi?", options: ["C", "B", "D", "E"], correctAnswer: 1 },
                { question: "Sutning (milk) rangi qanday?", options: ["Black", "Red", "White", "Blue"], correctAnswer: 2 },
                { question: "One + two = ___?", options: ["Four", "Five", "Three", "Ten"], correctAnswer: 2 },
                { question: "I ___ a pupil (o'quvchi).", options: ["is", "are", "am", "be"], correctAnswer: 2 },
                { question: "It ___ a dog.", options: ["am", "is", "are", "have"], correctAnswer: 1 },
                { question: "Qaysi so'z qolganlaridan farq qiladi (Odd one out)?", options: ["Red", "Blue", "Green", "Cat"], correctAnswer: 3 },
                { question: "\"Mening kitobim\" ingliz tilida qanday aytiladi?", options: ["I book", "You book", "My book", "He book"], correctAnswer: 2 },
                { question: "Qush (a bird) qila oladi, lekin it (a dog) qila olmaydi. Bu nima?", options: ["Run (yugurish)", "Jump (sakrash)", "Fly (uchish)", "Sleep (uxlash)"], correctAnswer: 2 },
                { question: "Men ___ olma yeyapman (I am eating ___ apple). Bo'sh joyga qaysi so'z tushadi?", options: ["a", "an", "two", "- (hech narsa)"], correctAnswer: 1 },
                { question: "I ___ got a sister (Mening singlim bor).", options: ["has", "is", "am", "have"], correctAnswer: 3 },
                { question: "Qaysi so'z xato yozilgan?", options: ["Apple", "Buke", "Pen", "Bag"], correctAnswer: 1 },
                { question: "\"Katta\" so'zining ingliz tilidagi tarjimasi nima?", options: ["Small", "Big", "Long", "Short"], correctAnswer: 1 },
                { question: "Are you a pupil? (Sen o'quvchimisan?) - Yes, I ___.", options: ["is", "are", "am", "do"], correctAnswer: 2 },
                { question: "___ is this? - It is a pen.", options: ["What", "Who", "Where", "How"], correctAnswer: 0 },
                { question: "He ___ my brother (U mening akam).", options: ["am", "are", "is", "have"], correctAnswer: 2 },
                { question: "\"Yes\" (Ha) so'zining qarama-qarshisi (antonimi) nima?", options: ["Hello", "Bye", "No", "Ok"], correctAnswer: 2 },
                { question: "\"Good morning\" qachon aytiladi?", options: ["Kechqurun", "Tunda", "Kunduzi", "Ertalab"], correctAnswer: 3 },
                { question: "How are you? (Yaxshimisiz?) - I am ___, thank you!", options: ["bad", "fine", "sad", "big"], correctAnswer: 1 },
                { question: "O'rgimchakning (a spider) nechta oyog'i bor?", options: ["Two", "Four", "Six", "Eight"], correctAnswer: 3 },
                { question: "Qaysi hayvon \"Miyov\" (Meow) deydi?", options: ["Dog", "Cow", "Cat", "Mouse"], correctAnswer: 2 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        3: {
            questions: [
                { question: "The sun is ___.", options: ["yellow", "blue", "green", "black"], correctAnswer: 0 },
                { question: "I ___ 9 years old.", options: ["is", "are", "am", "be"], correctAnswer: 2 },
                { question: "One, two, three, ___, five!", options: ["six", "four", "ten", "two"], correctAnswer: 1 },
                { question: "It is ___ cat.", options: ["an", "a", "two", "are"], correctAnswer: 1 },
                { question: "A dog has four ___.", options: ["hands", "arms", "legs", "heads"], correctAnswer: 2 },
                { question: "Look! The boys ___ football.", options: ["are playing", "play", "plays", "is playing"], correctAnswer: 0 },
                { question: "I have one tooth, but my baby brother has four ___.", options: ["tooths", "teeths", "teeth", "toothes"], correctAnswer: 2 },
                { question: "My father's father is my ___.", options: ["uncle", "brother", "grandfather", "cousin"], correctAnswer: 2 },
                { question: "I have ___ apple and ___ banana.", options: ["a / a", "an / a", "an / an", "a / an"], correctAnswer: 1 },
                { question: "Qaysi so'z qolganlaridan farq qiladi (Odd one out)?", options: ["Eye", "Ear", "Nose", "Book"], correctAnswer: 3 },
                { question: "She ___ got a new doll.", options: ["have", "has", "is", "are"], correctAnswer: 1 },
                { question: "Where ___ you live?", options: ["do", "does", "are", "is"], correctAnswer: 0 },
                { question: "\"O'n uch\" raqami ingliz tilida qanday yoziladi?", options: ["thirty", "thirteen", "three", "third"], correctAnswer: 1 },
                { question: "Can a fish fly?", options: ["Yes, it can", "No, it can", "Yes, it can't", "No, it can't"], correctAnswer: 3 },
                { question: "___ is your favorite color? - It is red.", options: ["Who", "How", "What", "Where"], correctAnswer: 2 },
                { question: "Qaysi gap to'g'ri yozilgan?", options: ["I like apples.", "I likes apples.", "I am like apples.", "I to like apples."], correctAnswer: 0 },
                { question: "They ___ like milk. They like juice.", options: ["doesn't", "don't", "isn't", "aren't"], correctAnswer: 1 },
                { question: "The cat is sleeping ___ the box. (Qutining ichida)", options: ["into", "under", "on", "in"], correctAnswer: 3 },
                { question: "___ pen is this? - It's my pen.", options: ["Who", "What", "Whose", "When"], correctAnswer: 2 },
                { question: "Antonim (qarama-qarshi so'z)ni toping: Big - ___", options: ["Tall", "Small", "Long", "Fat"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        4: {
            questions: [
                { question: "___ is a doctor in the hospital.", options: ["He", "I", "They", "We"], correctAnswer: 0 },
                { question: "An apple is usually ___ or green.", options: ["blue", "red", "black", "purple"], correctAnswer: 1 },
                { question: "We ___ pupils. We love our school.", options: ["am", "is", "are", "be"], correctAnswer: 2 },
                { question: "I always get up ___ 7 o'clock in the morning.", options: ["in", "on", "at", "under"], correctAnswer: 2 },
                { question: "My mother's sister is my ___.", options: ["aunt", "uncle", "grandmother", "cousin"], correctAnswer: 0 },
                { question: "Look at those three ___! They are eating cheese.", options: ["mouse", "mouses", "mice", "mices"], correctAnswer: 2 },
                { question: "___ are my friends playing over there.", options: ["This", "That", "These", "Those"], correctAnswer: 3 },
                { question: "Shh! Be quiet! The baby ___ right now.", options: ["sleeps", "is sleeping", "sleep", "sleeping"], correctAnswer: 1 },
                { question: "Is there ___ water in the glass? I am very thirsty.", options: ["some", "any", "a", "an"], correctAnswer: 1 },
                { question: "Yesterday, they ___ at the zoo.", options: ["are", "was", "were", "is"], correctAnswer: 2 },
                { question: "___ is your favorite school subject? - Math!", options: ["Who", "When", "Where", "What"], correctAnswer: 3 },
                { question: "This book is ___. I bought it yesterday.", options: ["my", "me", "mine", "I"], correctAnswer: 2 },
                { question: "The cat is scared. It is hiding ___ the sofa.", options: ["behind", "on", "next", "at"], correctAnswer: 0 },
                { question: "A cheetah is ___ than a tiger.", options: ["fast", "more fast", "fastest", "faster"], correctAnswer: 3 },
                { question: "I saw ___ elephant at the zoo. ___ elephant was very big.", options: ["a / The", "an / The", "the / An", "an / A"], correctAnswer: 1 },
                { question: "My best friend ___ like playing football. He prefers tennis.", options: ["don't", "isn't", "doesn't", "aren't"], correctAnswer: 2 },
                { question: "Qaysi so'z qolganlaridan farq qiladi (Odd one out)?", options: ["Carrot", "Potato", "Banana", "Onion"], correctAnswer: 2 },
                { question: "\"Half past four\" qaysi vaqtni bildiradi?", options: ["4:15", "4:30", "3:30", "4:45"], correctAnswer: 1 },
                { question: "A penguin is a bird, but it ___ fly.", options: ["can", "cannot", "do", "is"], correctAnswer: 1 },
                { question: "The opposite (antonim) of the word \"cheap\" is __.", options: ["expensive", "cold", "easy", "tall"], correctAnswer: 0 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        5: {
            questions: [
                { question: "My brother ___ 10 years old.", options: ["is", "are", "am", "have"], correctAnswer: 0 },
                { question: "She ___ to school every day.", options: ["go", "goes", "going", "is go"], correctAnswer: 1 },
                { question: "The day after Tuesday is ___.", options: ["Monday", "Thursday", "Wednesday", "Friday"], correctAnswer: 2 },
                { question: "Look at those ___ playing in the park!", options: ["childs", "childrens", "children", "child"], correctAnswer: 2 },
                { question: "We have our English lesson ___ Monday.", options: ["in", "at", "on", "by"], correctAnswer: 2 },
                { question: "Yesterday, I ___ a very interesting book about animals.", options: ["readed", "read", "reading", "am reading"], correctAnswer: 1 },
                { question: "Is there ___ milk in the fridge? No, there is ___ milk.", options: ["some / any", "any / no", "a / any", "any / some"], correctAnswer: 1 },
                { question: "My spelling in English is ___ than yours.", options: ["badder", "more bad", "worse", "the worst"], correctAnswer: 2 },
                { question: "We ___ our grandparents tomorrow morning. We already bought the tickets.", options: ["are visiting", "visit", "visited", "visits"], correctAnswer: 0 },
                { question: "These books are not ___. They are ___.", options: ["my / her", "mine / hers", "me / she", "mine / her"], correctAnswer: 1 },
                { question: "Choose the correct sentence with the right word order:", options: ["He plays always tennis on Sunday.", "Always he plays tennis on Sunday.", "He always plays tennis on Sunday.", "He plays tennis always on Sunday."], correctAnswer: 2 },
                { question: "A person who writes books and stories is an ___.", options: ["actor", "author", "artist", "architect"], correctAnswer: 1 },
                { question: "You are from Uzbekistan, ___?", options: ["are you", "aren't you", "don't you", "do you"], correctAnswer: 1 },
                { question: "The dog ran ___ the bridge to get to the other side of the river.", options: ["under", "along", "across", "through"], correctAnswer: 2 },
                { question: "How ___ time do we have before the lesson starts?", options: ["many", "much", "lots", "long"], correctAnswer: 1 },
                { question: "My uncle is ___ honest man. He never lies.", options: ["a", "an", "the", "- (no article)"], correctAnswer: 1 },
                { question: "You ___ wear a school uniform. It is a strict rule at our school.", options: ["can", "must", "might", "could"], correctAnswer: 1 },
                { question: "I ___ TV when the phone suddenly ___.", options: ["watched / rings", "was watching / rang", "watching / ringed", "watched / rang"], correctAnswer: 1 },
                { question: "Which word is a synonym for \"huge\"?", options: ["tiny", "enormous", "angry", "heavy"], correctAnswer: 1 },
                { question: "She is a very good student and she speaks English very ___.", options: ["good", "well", "nice", "beautiful"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        6: {
            questions: [
                { question: "I ___ a student and my sister ___ a doctor.", options: ["am / is", "is / am", "are / is", "am / are"], correctAnswer: 0 },
                { question: "The plural form of \"child\" is ___.", options: ["childs", "children", "childrens", "childes"], correctAnswer: 1 },
                { question: "My birthday is ___ May.", options: ["on", "at", "in", "by"], correctAnswer: 2 },
                { question: "The opposite (antonim) of \"cold\" is ___.", options: ["hot", "cool", "warm", "icy"], correctAnswer: 0 },
                { question: "He usually ___ up at 7 o'clock in the morning.", options: ["wake", "wakes", "is waking", "waked"], correctAnswer: 1 },
                { question: "I ___ TV when my father suddenly ___ the room.", options: ["was watching / came", "watched / come", "am watching / comes", "watch / came"], correctAnswer: 0 },
                { question: "___ UK and ___ USA are English-speaking countries.", options: ["- / -", "The / The", "A / A", "The / -"], correctAnswer: 1 },
                { question: "This is ___ book I have ever read. I highly recommend it!", options: ["more interesting", "most interesting", "the most interesting", "interestingest"], correctAnswer: 2 },
                { question: "She made this delicious cake all by ___.", options: ["herself", "her", "she", "hers"], correctAnswer: 0 },
                { question: "A person who designs buildings and houses is called an ___.", options: ["artist", "engineer", "actor", "architect"], correctAnswer: 3 },
                { question: "Can you give me ___ advice on how to learn English faster?", options: ["an", "a", "some", "two"], correctAnswer: 2 },
                { question: "___ you ever ___ to London?", options: ["Did / go", "Have / been", "Are / going", "Do / go"], correctAnswer: 1 },
                { question: "Look at that beautiful picture hanging ___ the wall!", options: ["in", "on", "at", "under"], correctAnswer: 1 },
                { question: "Yesterday, I ___ my keys and I couldn't open the door.", options: ["lose", "losed", "lost", "losing"], correctAnswer: 2 },
                { question: "You don't like playing chess, ___?", options: ["don't you", "are you", "do you", "aren't you"], correctAnswer: 2 },
                { question: "How ___ time do we need to finish this project?", options: ["many", "much", "long", "often"], correctAnswer: 1 },
                { question: "Please, ___ your shoes before entering the room. It's a tradition here.", options: ["take off", "put on", "look for", "get up"], correctAnswer: 0 },
                { question: "I was very tired, ___ I finished all my homework because I had to.", options: ["because", "so", "but", "or"], correctAnswer: 2 },
                { question: "Mantiqiy savol: If tomorrow is Wednesday, what day was it yesterday?", options: ["Sunday", "Monday", "Tuesday", "Thursday"], correctAnswer: 1 },
                { question: "Choose the grammatically correct sentence:", options: ["He don't likes playing football.", "He doesn't likes playing football.", "He doesn't like playing football.", "He don't like playing football."], correctAnswer: 2 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        7: {
            questions: [
                { question: "My father ___ to work by car every morning.", options: ["goes", "go", "going", "is going"], correctAnswer: 0 },
                { question: "This is my friend. ___ name is Tom.", options: ["Her", "His", "Its", "He"], correctAnswer: 1 },
                { question: "We usually have a long holiday ___ summer.", options: ["at", "on", "in", "to"], correctAnswer: 2 },
                { question: "How ___ apples are there in the basket?", options: ["much", "many", "a lot", "some"], correctAnswer: 1 },
                { question: "A train is ___ than a bicycle.", options: ["fast", "fastest", "faster", "more fast"], correctAnswer: 2 },
                { question: "While I ___ my homework, the lights suddenly ___ out.", options: ["did / go", "was doing / went", "was doing / was going", "did / went"], correctAnswer: 1 },
                { question: "If it ___ tomorrow, we ___ to the mountains.", options: ["rains / won't go", "will rain / don't go", "rained / wouldn't go", "rain / will go"], correctAnswer: 0 },
                { question: "I haven't finished reading this interesting book ___.", options: ["already", "just", "yet", "never"], correctAnswer: 2 },
                { question: "The telephone ___ by Alexander Graham Bell in 1876.", options: ["invents", "invented", "was invented", "is invented"], correctAnswer: 2 },
                { question: "___ Nile is the longest river in ___ Africa.", options: ["The / the", "The / -", "- / the", "A / an"], correctAnswer: 1 },
                { question: "Your sister can speak English fluently, ___?", options: ["can she", "can't she", "does she", "doesn't she"], correctAnswer: 1 },
                { question: "Never give ___! You can achieve your goals if you try hard.", options: ["in", "out", "away", "up"], correctAnswer: 3 },
                { question: "My older brother enjoys ___ football with his friends on weekends.", options: ["play", "playing", "to play", "played"], correctAnswer: 1 },
                { question: "What do we call a person who travels to space?", options: ["Astronomer", "Astronaut", "Pilot", "Engineer"], correctAnswer: 1 },
                { question: "She speaks French very ___, so everyone understands her perfectly.", options: ["fluent", "fluency", "fluently", "more fluent"], correctAnswer: 2 },
                { question: "By the time the police arrived, the thief ___.", options: ["escaped", "has escaped", "had escaped", "escaping"], correctAnswer: 2 },
                { question: "Mantiqiy topishmoq: I am tall when I'm young, and I'm short when I'm old. What am I?", options: ["A tree", "A pencil", "A shadow", "A man"], correctAnswer: 1 },
                { question: "The cat jumped ___ the wall and ran ___ the street to the other side.", options: ["over / across", "under / through", "on / in", "across / over"], correctAnswer: 0 },
                { question: "I opened the mysterious box, but there was ___ inside. It was completely empty.", options: ["everything", "anything", "something", "nothing"], correctAnswer: 3 },
                { question: "You shouldn't ___ a mistake like this next time!", options: ["do", "take", "make", "have"], correctAnswer: 2 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        8: {
            questions: [
                { question: "She usually ___ to school by bus, but today she is walking.", options: ["goes", "go", "is going", "went"], correctAnswer: 0 },
                { question: "My older brother is ___ than me.", options: ["tall", "tallest", "more tall", "taller"], correctAnswer: 3 },
                { question: "We have our English and History lessons ___ Monday.", options: ["in", "at", "on", "by"], correctAnswer: 2 },
                { question: "They ___ a very expensive car last month.", options: ["buy", "bought", "have bought", "will buy"], correctAnswer: 1 },
                { question: "This is my dictionary, and that one on the desk is ___.", options: ["your", "you", "yours", "yourself"], correctAnswer: 2 },
                { question: "If I ___ you, I would study harder for the upcoming exams.", options: ["am", "was", "were", "have been"], correctAnswer: 2 },
                { question: "How long ___ for me? I'm so sorry I'm late!", options: ["are you waiting", "do you wait", "have you waited", "have you been waiting"], correctAnswer: 3 },
                { question: "You can't enter the room right now. It ___.", options: ["cleans", "is cleaned", "is being cleaned", "cleaned"], correctAnswer: 2 },
                { question: "The stranger stopped me in the street and asked me where ___.", options: ["did I live", "do I live", "I lived", "I live"], correctAnswer: 2 },
                { question: "Look at the wet ground. It ___ heavily last night.", options: ["must rain", "must have rained", "can't rain", "should rain"], correctAnswer: 1 },
                { question: "I can't stand ___ in long queues. It makes me really nervous.", options: ["wait", "to wait", "waiting", "waited"], correctAnswer: 2 },
                { question: "They traveled across ___ Sahara Desert and then visited ___ Lake Victoria.", options: ["the / the", "- / the", "the / -", "a / a"], correctAnswer: 2 },
                { question: "We have run ___ sugar. Could you go to the supermarket and buy some?", options: ["out from", "away with", "out of", "down on"], correctAnswer: 2 },
                { question: "He hardly ever goes to the cinema with his friends, ___?", options: ["doesn't he", "does he", "is he", "isn't he"], correctAnswer: 1 },
                { question: "You have to ___ attention to the teacher during the lesson if you want to understand the topic.", options: ["give", "make", "pay", "take"], correctAnswer: 2 },
                { question: "If she had known about the terrible traffic jam, she ___ another route.", options: ["would take", "will take", "had taken", "would have taken"], correctAnswer: 3 },
                { question: "The man ___ car was stolen yesterday turned out to be my uncle.", options: ["who", "whom", "which", "whose"], correctAnswer: 3 },
                { question: "Inglizcha iboraning (idiom) ma'nosini toping: \"When pigs ___\" (Hech qachon sodir bo'lmaydigan ishga nisbatan aytiladi).", options: ["run", "fly", "swim", "jump"], correctAnswer: 1 },
                { question: "Mantiqiy topishmoq: What has keys but can't open locks?", options: ["A map", "A piano", "A computer", "A door"], correctAnswer: 1 },
                { question: "Never before ___ such a beautiful sunset in my entire life.", options: ["I have seen", "I saw", "have I seen", "did I see"], correctAnswer: 2 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        9: {
            questions: [
                { question: "Water ___ at 100 degrees Celsius.", options: ["boil", "boils", "is boiling", "boiled"], correctAnswer: 1 },
                { question: "Excuse me, I need some ___ about the train schedule.", options: ["informations", "information", "an information", "piece of informations"], correctAnswer: 1 },
                { question: "My best friend was born ___ the 5th of November, 2010.", options: ["in", "on", "at", "by"], correctAnswer: 1 },
                { question: "You ___ use your mobile phone during the final exam. It is strictly forbidden.", options: ["haven't", "don't", "mustn't", "needn't"], correctAnswer: 2 },
                { question: "My friend ___ to music when I suddenly entered the room.", options: ["listens", "listened", "is listening", "was listening"], correctAnswer: 3 },
                { question: "If he ___ his doctor's advice last month, he ___ in hospital right now. (Mixed conditional)", options: ["followed / wouldn't be", "had followed / wouldn't be", "follows / isn't", "had followed / wouldn't have been"], correctAnswer: 1 },
                { question: "Only when he read the letter ___ the truth about the accident.", options: ["he realized", "did he realize", "he did realize", "realized he"], correctAnswer: 1 },
                { question: "The roof of our house is heavily damaged. We must have it ___ before winter comes.", options: ["repair", "to repair", "repairing", "repaired"], correctAnswer: 3 },
                { question: "Nobody wanted to help him with those heavy boxes, ___?", options: ["didn't they", "did he", "did they", "didn't he"], correctAnswer: 2 },
                { question: "They had to ___ the football match because of the heavy rain. (Phrasal verb)", options: ["put off", "put on", "put out", "put up"], correctAnswer: 0 },
                { question: "I clearly remember ___ the door before leaving the house, but now it's open!", options: ["to lock", "lock", "locked", "locking"], correctAnswer: 3 },
                { question: "\"I will call you tomorrow,\" John said. -> John said that he ___ me ___.", options: ["will call / tomorrow", "would call / the following day", "calls / the next day", "would call / tomorrow"], correctAnswer: 1 },
                { question: "___ the terrible weather, they decided to go hiking in the mountains.", options: ["Although", "Despite of", "In spite of", "Even though"], correctAnswer: 2 },
                { question: "Inglizcha iborani (idiom) to'ldiring: To buy this luxury car, it will cost you an arm and a ___. (Juda qimmat degan ma'noda)", options: ["foot", "leg", "head", "hand"], correctAnswer: 1 },
                { question: "Albert Einstein is considered ___ one of the greatest scientists of the 20th century.", options: ["be", "being", "to be", "been"], correctAnswer: 2 },
                { question: "I'd rather you ___ anyone about my secret. Please, keep it to yourself.", options: ["don't tell", "not tell", "won't tell", "didn't tell"], correctAnswer: 3 },
                { question: "Choose the correct synonym for the word \"stubborn\" (qaysar).", options: ["easy-going", "polite", "obstinate", "generous"], correctAnswer: 2 },
                { question: "Not only ___ late for the meeting, but he also forgot to bring the important documents.", options: ["he was", "was he", "did he", "he did"], correctAnswer: 1 },
                { question: "Mantiqiy topishmoq: What has to be broken before you can use it?", options: ["A glass", "An egg", "A window", "A promise"], correctAnswer: 1 },
                { question: "You ___ have seen him in London yesterday! He is currently in Tokyo on a business trip.", options: ["mustn't", "shouldn't", "can't", "mightn't"], correctAnswer: 2 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        10: {
            questions: [
                { question: "I ___ for my keys for half an hour, but I still can't find them anywhere.", options: ["am looking", "have been looking", "look", "looked"], correctAnswer: 1 },
                { question: "We were extremely tired, so we went to ___ bed very early last night.", options: ["a", "the", "an", "- (no article)"], correctAnswer: 3 },
                { question: "Let's go for a walk in the park to get some fresh air, ___?", options: ["shall we", "don't we", "do we", "will we"], correctAnswer: 0 },
                { question: "If you mix blue and yellow colors, you ___ green.", options: ["got", "will get", "get", "are getting"], correctAnswer: 2 },
                { question: "The Eiffel Tower ___ in Paris in 1889.", options: ["built", "was built", "builds", "is built"], correctAnswer: 1 },
                { question: "Seldom ___ such a brilliant and emotional performance in my entire life.", options: ["I have seen", "I saw", "have I seen", "do I see"], correctAnswer: 2 },
                { question: "The doctor highly suggested that the patient ___ smoking immediately to avoid heart problems. (Subjunctive mood)", options: ["stop", "stops", "to stop", "stopped"], correctAnswer: 0 },
                { question: "___ by the sudden loud noise, the baby woke up and started crying.", options: ["Frightening", "Frightened", "To frighten", "Frighten"], correctAnswer: 1 },
                { question: "I can't ___ what he has written; his handwriting is completely illegible. (Phrasal verb)", options: ["make up", "make off", "make for", "make out"], correctAnswer: 3 },
                { question: "Choose the correct synonym for the word \"mandatory\" (majburiy).", options: ["optional", "voluntary", "compulsory", "unnecessary"], correctAnswer: 2 },
                { question: "If she had taken her umbrella this morning, she ___ so wet right now. (Mixed conditional)", options: ["wouldn't have been", "wouldn't be", "won't be", "isn't"], correctAnswer: 1 },
                { question: "I failed my final physics exam. I wish I ___ harder last semester.", options: ["study", "studied", "had studied", "have studied"], correctAnswer: 2 },
                { question: "The brilliant scientist is completely dedicated ___ his medical research.", options: ["in", "to", "for", "with"], correctAnswer: 1 },
                { question: "Inglizcha iborani (idiom) to'ldiring: I'm really exhausted. It's time for me to hit the ___. (Uxlashga yotmoq ma'nosida)", options: ["bed", "pillow", "sack", "blanket"], correctAnswer: 2 },
                { question: "I regret ___ you that your application for the scholarship has been rejected.", options: ["to inform", "informing", "inform", "informed"], correctAnswer: 0 },
                { question: "She didn't sew her beautiful wedding dress herself. She ___. (Causative form)", options: ["had made it", "had it made", "made it", "has made it"], correctAnswer: 1 },
                { question: "Mantiqiy topishmoq: I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", options: ["A ghost", "An echo", "A cloud", "A bird"], correctAnswer: 1 },
                { question: "It took him a very long time to get used ___ on the left side of the road in London.", options: ["to drive", "driving", "to driving", "drive"], correctAnswer: 2 },
                { question: "The international company, ___ CEO was recently arrested, is now facing a severe financial crisis.", options: ["who", "whom", "which", "whose"], correctAnswer: 3 },
                { question: "Antonim (qarama-qarshi ma'noli so'z)ni toping: \"Diligent\" (Mehnatkash, tirishqoq).", options: ["Industrious", "Hard-working", "Lazy", "Smart"], correctAnswer: 2 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        11: {
            questions: [
                { question: "By the time we get to the cinema, the film ___.", options: ["starts", "will start", "will have started", "has started"], correctAnswer: 2 },
                { question: "I am really looking forward ___ you again.", options: ["to see", "seeing", "to seeing", "see"], correctAnswer: 2 },
                { question: "It's no use ___ over spilt milk. What's done is done.", options: ["cry", "to cry", "crying", "cried"], correctAnswer: 2 },
                { question: "She has been living in London ___ 2015.", options: ["for", "since", "in", "from"], correctAnswer: 1 },
                { question: "I'm sorry, but I completely disagree ___ you on this matter.", options: ["with", "to", "about", "on"], correctAnswer: 0 },
                { question: "No sooner ___ the house than it started to pour with rain.", options: ["he left", "had he left", "did he leave", "he had left"], correctAnswer: 1 },
                { question: "It is absolutely crucial that the manager ___ informed of these changes immediately. (Subjunctive mood)", options: ["is", "be", "will be", "has been"], correctAnswer: 1 },
                { question: "___ the difficult conditions, the climbers managed to reach the summit of the mountain.", options: ["Despite", "Although", "In spite", "Nevertheless"], correctAnswer: 0 },
                { question: "I'd rather you ___ your shoes on in the house, if you don't mind. The floor is clean.", options: ["don't keep", "not keep", "didn't keep", "wouldn't keep"], correctAnswer: 2 },
                { question: "But for her financial support, we ___ the business. (Advanced conditional)", options: ["hadn't started", "wouldn't start", "didn't start", "wouldn't have started"], correctAnswer: 3 },
                { question: "Choose the correct order of adjectives: She bought a ___ table.", options: ["beautiful round wooden", "wooden round beautiful", "round beautiful wooden", "wooden beautiful round"], correctAnswer: 0 },
                { question: "The company is planning to ___ hundreds of workers due to the severe economic crisis. (Phrasal verb)", options: ["take on", "lay off", "put away", "set up"], correctAnswer: 1 },
                { question: "I think I saw him at the party, but he ___ there because he was in Paris at the time. (Modal of deduction)", options: ["must have been", "shouldn't have been", "couldn't have been", "wouldn't be"], correctAnswer: 2 },
                { question: "The ___ you study for the exam, the ___ mistakes you will make.", options: ["harder / less", "more hard / fewer", "harder / fewer", "more hard / less"], correctAnswer: 2 },
                { question: "The police accused him ___ the confidential documents to the press.", options: ["for leaking", "of leaking", "to leak", "on leaking"], correctAnswer: 1 },
                { question: "By the end of this year, she ___ as a senior software engineer for exactly a decade.", options: ["will work", "will be working", "has been working", "will have been working"], correctAnswer: 3 },
                { question: "His argument was completely ___; there was no logical basis or solid evidence for his conclusions.", options: ["eloquent", "flawed", "impeccable", "comprehensive"], correctAnswer: 1 },
                { question: "Inglizcha iborani (idiom) to'ldiring: My boss usually turns a ___ to minor mistakes as long as the main job is done well.", options: ["deaf ear", "blind eye", "cold shoulder", "blind ear"], correctAnswer: 1 },
                { question: "Mantiqiy topishmoq: I am not alive, but I grow. I don't have lungs, but I need air. I don't have a mouth, but water kills me. What am I?", options: ["A plant", "Fire", "A crystal", "A storm"], correctAnswer: 1 },
                { question: "Scarcely ___ when the lights suddenly went out in the stadium. (Inversion)", options: ["the game had started", "had the game started", "did the game start", "the game started"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        }
    },
    math: {
        1: {
            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "Qutida 7 ta qizil va 3 ta ko‘k qalam bor edi. Akmal yana bitta yashil qalam soldi. Qutida jami nechta qalam bo‘ldi?", options: ["9", "10", "11", "4"], correctAnswer: 2 },
                { question: "Qonuniyatni toping va keyingi sonni belgilang: 2, 4, 6, 8, ...", options: ["9", "10", "11", "12"], correctAnswer: 1 },
                { question: "Stol ustida 3 ta stakan sut turibdi. Anvar bitta stakandagi sutni to‘liq ichib qo‘ydi. Stolda nechta stakan qoldi?", options: ["2", "3", "0", "4"], correctAnswer: 1 },
                { question: "Qaysi son 15 dan katta, lekin 17 dan kichik?", options: ["14", "15", "16", "18"], correctAnswer: 2 },
                { question: "Kvadrat shaklidagi qog'ozning nechta tomoni bor?", options: ["3", "4", "5", "6"], correctAnswer: 1 },

                // 🔴 Qiyin darajadagi savollar (6-20)
                { question: "Uzun yog‘och xodani 3 ta bir xil bo‘lakka bo‘lish uchun arra bilan necha marta kesish kerak?", options: ["2", "3", "4", "1"], correctAnswer: 0 },
                { question: "Hovlida tovuqlar va quyonlar yuribdi. Ularning jami boshlari 5 ta, oyoqlari esa 14 ta. Hovlida nechta quyon bor?", options: ["2", "3", "4", "1"], correctAnswer: 0 },
                { question: "Akasi 8 yoshda, singlisi esa 3 yoshda. Necha yildan keyin ularning yoshlari yig‘indisi 15 ga teng bo‘ladi?", options: ["1", "2", "3", "4"], correctAnswer: 1 },
                { question: "Bolalar jismoniy tarbiya darsida bir qator bo‘lib safda turishibdi. Sardor boshidan hisoblaganda 5-o‘rinda, oxiridan hisoblaganda esa 4-o‘rinda turibdi. Safda jami nechta bola bor?", options: ["9", "8", "10", "7"], correctAnswer: 1 },
                { question: "Kechadan oldingi kun Dushanba edi. Ertadan keyin qaysi kun bo‘ladi?", options: ["Payshanba", "Juma", "Shanba", "Yakshanba"], correctAnswer: 1 },
                { question: "10 metr uzunlikdagi yo‘lning bir tomoniga har 2 metrda bittadan daraxt ekildi (yo‘lning boshida va oxirida ham daraxt bor). Jami nechta daraxt ekilgan?", options: ["5", "6", "4", "7"], correctAnswer: 1 },
                { question: "Bitta tarvuz ikkita qovun bilan bir xil og‘irlikda. Bitta qovun esa uchta anor bilan bir xil og‘irlikda. Bitta tarvuzning og‘irligi nechta anorga teng?", options: ["3", "5", "6", "8"], correctAnswer: 2 },
                { question: "1 dan 20 gacha bo‘lgan sonlar orasida nechta sonning raqamlari yig‘indisi 5 ga teng?", options: ["1", "2", "3", "4"], correctAnswer: 1 },
                { question: "Kitobning bitta varag‘i yirtib olindi. Yirtilgan varaqning bir tomonida 12 raqami yozilgan bo‘lsa, uning orqa tomonida quyidagi qaysi son yozilgan bo‘lishi mumkin?", options: ["10", "11", "14", "15"], correctAnswer: 1 },
                { question: "Malika 1-qavatdan 3-qavatga chiqish uchun 20 ta zina bosib o‘tdi. U 1-qavatdan 5-qavatga chiqishi uchun jami nechta zina bosib o‘tishi kerak? (Qavatlar orasidagi zinalar soni bir xil)", options: ["30", "40", "50", "60"], correctAnswer: 1 },
                { question: "3 ta mushuk 3 ta sichqonni 3 minutda tutadi. 6 ta mushuk 6 ta sichqonni necha minutda tutadi?", options: ["3", "6", "9", "12"], correctAnswer: 0 },
                { question: "Ali, Vali va G‘ani ko‘lda birgalikda jami 12 ta baliq tutishdi. Vali Alidan 2 ta ko‘p, G‘ani esa Validan 2 ta ko‘p baliq tutgan. Ali nechta baliq tutgan?", options: ["2", "3", "4", "6"], correctAnswer: 0 },
                { question: "Shilliqqurt 5 metr uzunlikdagi daraxtga kunduzi 2 metr yuqoriga chiqadi, tunda uxlab qolgani uchun sirpanib 1 metr pastga tushib ketadi. U daraxtning eng uchiga necha kunda yetib boradi?", options: ["5", "4", "3", "6"], correctAnswer: 1 },
                { question: "To‘rtburchak shaklidagi qog‘ozning bitta burchagini qaychi bilan kesib tashlasak, qog‘ozda nechta burchak qoladi?", options: ["3", "4", "5", "6"], correctAnswer: 2 }
            ],
            questionCount: 19,
            timeLimit: 20
        },
        2: {
            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "24 va 36 sonlarining yig'indisi qancha?", options: ["60", "50", "64", "70"], correctAnswer: 0 },
                { question: "Hovlida 5 ta velosiped turibdi. Ularning jami nechta g'ildiragi bor? (Hamma velosiped 2 g'ildirakli)", options: ["5", "10", "15", "20"], correctAnswer: 1 },
                { question: "Qonuniyatni toping va so'roq belgisi o'rnidagi sonni belgilang: 10, 15, 20, 25, ?", options: ["26", "29", "30", "35"], correctAnswer: 2 },
                { question: "Avtobusda 15 kishi ketyapti edi. Bekatda 5 kishi tushib qoldi va 7 kishi chiqdi. Avtobusda necha yo'lovchi bo'ldi?", options: ["10", "12", "15", "17"], correctAnswer: 3 },
                { question: "Kvadrat va bitta uchburchakning birgalikda jami nechta burchagi bor?", options: ["7", "8", "6", "9"], correctAnswer: 0 },

                // 🔴 Qiyin darajadagi savollar (6-20)
                { question: "Bitta tuxum suvda 5 minutda pishadi. Qozonga birdaniga 4 ta tuxum solinsa, ular necha minutda pishadi?", options: ["20", "5", "9", "1"], correctAnswer: 1 },
                { question: "Akasi 12 yoshda, ukasi esa 7 yoshda. 3 yildan keyin ularning yoshlari farqi nechaga teng bo'ladi?", options: ["8", "6", "5", "10"], correctAnswer: 2 },
                { question: "10 metrli uzun arqonni har biri 2 metrdan bo'lgan qismlarga ajratish uchun necha marta kesish kerak?", options: ["5", "3", "2", "4"], correctAnswer: 3 },
                { question: "Qorong'i xonada qutining ichida 5 ta qora va 5 ta oq paypoq aralashib yotibdi. Qaramasdan kamida necha paypoq olinsa, ularning orasidan aniq bir xil rangdagi bir juft paypoq chiqadi?", options: ["3", "2", "5", "6"], correctAnswer: 0 },
                { question: "Yugurish musobaqasida Anvar marraga yetib kelganlar orasida oxiridan 7-o'rinni egalladi. Agar musobaqada jami 15 kishi qatnashgan bo'lsa, Anvar oldindan hisoblaganda nechanchi o'rinni olgan?", options: ["8", "9", "7", "10"], correctAnswer: 1 },
                { question: "Tarozining bir pallasida 2 kg tosh va yarimta g'isht, ikkinchi pallasida esa 1 ta butun g'isht bor. Tarozi to'la muvozanatda turibdi. Bitta butun g'ishtning og'irligi necha kilogramm?", options: ["2", "3", "4", "6"], correctAnswer: 2 },
                { question: "Fermada sigirlar va g'ozlar boqiladi. Ularning jami boshlari 10 ta, oyoqlari esa 26 ta. Fermada nechta g'oz bor?", options: ["3", "5", "6", "7"], correctAnswer: 3 },
                { question: "1 dan 50 gacha bo'lgan barcha sonlar qog'ozga yozib chiqildi. Bunda 3 raqami jami necha marta yozilgan?", options: ["15", "14", "13", "16"], correctAnswer: 0 },
                { question: "Qalin daftar va qalam birgalikda 1100 so'm turadi. Daftar qalamdan 1000 so'm qimmat. Bitta qalam necha pul turadi?", options: ["100", "50", "1000", "150"], correctAnswer: 1 },
                { question: "Uzunligi 10 sm, eni 5 sm bo'lgan to'g'riburchak shaklidagi qog'ozdan eng katta o'lchamdagi kvadrat kesib olindi. Kesib olingan kvadratning perimetri necha santimetrga teng?", options: ["15", "25", "20", "10"], correctAnswer: 2 },
                { question: "Agar oyning 3-kuni seshanba kuniga to'g'ri kelsa, shu oyning 25-kuni qaysi haftaning kuniga to'g'ri keladi?", options: ["Dushanba", "Juma", "Payshanba", "Chorshanba"], correctAnswer: 3 },
                { question: "Bobo 15 ta konfetni 4 ta nabirasiga bo'lib bermoqchi. Lekin hech bir nabira bir xil sonda konfet olmasligi kerak (hammasi kamida 1 tadan konfet oladi). Eng ko'p konfet olgan nabirasiga nechta konfet tekkan?", options: ["9", "8", "10", "7"], correctAnswer: 0 },
                { question: "Nodir qiziqarli kitob o'qishni boshladi. U bugun kitobning 12-betidan boshlab 25-betigacha o'qidi (12 va 25-betlarni ham to'liq o'qidi). Nodir bugun jami nechta bet o'qigan?", options: ["13", "14", "12", "15"], correctAnswer: 1 },
                { question: "Quduqning chuqurligi 10 metr. Qurbaqa kunduzi 3 metr yuqoriga sakrab chiqadi, tunda uxlab qolgani uchun sirpanib 2 metr pastga tushib ketadi. Qurbaqa necha kunda quduqdan tashqariga chiqib oladi?", options: ["10", "7", "8", "9"], correctAnswer: 2 },
                { question: "Uchta daraxtda jami 30 ta qush qo'nib turgan edi. Birinchi daraxtdan 3 ta qush uchib ketdi, ikkinchi daraxtdan esa uchinchi daraxtga 2 ta qush uchib o'tdi. Shundan so'ng uchala daraxtdagi qushlar soni bir xil bo'lib qoldi. Dastlab ikkinchi daraxtda nechta qush bo'lgan?", options: ["9", "10", "13", "11"], correctAnswer: 3 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        3: {
            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "345 va 155 sonlarining yig'indisi nechaga teng?", options: ["500", "400", "600", "490"], correctAnswer: 0 },
                { question: "8 ni 7 ga ko'paytirsak qanday son hosil bo'ladi?", options: ["54", "56", "64", "48"], correctAnswer: 1 },
                { question: "2 metr uzunlikdagi arqon necha santimetrga teng bo'ladi?", options: ["20", "200", "2000", "2"], correctAnswer: 1 },
                { question: "Qonuniyatni davom ettiring: 5, 10, 15, 20... Ushbu qatorda 8-o'rinda qanday son keladi?", options: ["30", "35", "40", "25"], correctAnswer: 2 },
                { question: "Kvadrat shaklidagi bog'ning bir tomoni 6 metrga teng. Bu bog'ning yuzi qancha?", options: ["12", "36", "24", "18"], correctAnswer: 1 },

                // 🔴 Qiyin darajadagi savollar (6-20)
                { question: "Matematika darsi soat 10:15 da boshlandi va 45 minut davom etdi. Dars soat nechada tugadi?", options: ["10:50", "11:00", "11:15", "11:45"], correctAnswer: 1 },
                { question: "Qafsda tovuqlar va quyonlar boqilmoqda. Ularning jami boshlari 12 ta, oyoqlari esa 34 ta. Qafsda nechta quyon bor?", options: ["5", "7", "6", "4"], correctAnswer: 0 },
                { question: "Ota 35 yoshda, o'g'il esa 11 yoshda. Necha yildan keyin otaning yoshi o'g'lining yoshidan roppa-rosa 2 marta katta bo'ladi?", options: ["11", "12", "13", "14"], correctAnswer: 2 },
                { question: "Faqat 1, 2 va 3 raqamlari yordamida (raqamlar takrorlanmasligi sharti bilan) jami nechta har xil uch xonali son tuzish mumkin?", options: ["3", "6", "9", "8"], correctAnswer: 1 },
                { question: "Yugurish yo'lakchasiga har 5 metrda bittadan bayroqcha o'rnatilgan (1-bayroqcha start chizigida). 1-bayroqchadan 10-bayroqchagacha bo'lgan masofa jami necha metr bo'ladi?", options: ["50", "45", "40", "55"], correctAnswer: 1 },
                { question: "4 ta usta 4 ta stulni yasash uchun 4 kun sarflaydi. Xuddi shunday ishlaydigan 8 ta usta 8 ta stulni yasash uchun necha kun sarflaydi?", options: ["8", "4", "2", "6"], correctAnswer: 1 },
                { question: "Tarozining bir pallasida 3 ta olma va 1 ta nok turibdi, ular 1 ta qovunning og'irligi bilan bir xil. Agar 1 ta qovun roppa-rosa 7 ta olmaning og'irligiga teng bo'lsa, 1 ta nok nechta olmaga teng?", options: ["2", "3", "4", "5"], correctAnswer: 2 },
                { question: "10 dan 100 gacha bo'lgan sonlar orasida oxirgi raqami 7 bilan tugaydigan nechta son bor?", options: ["10", "9", "8", "11"], correctAnswer: 0 },
                { question: "Tarvuzning yarmining yarmi 3 kilogramm tosh bosadi. Butun tarvuz necha kilogramm?", options: ["6", "9", "12", "15"], correctAnswer: 2 },
                { question: "Qalin yog'och xodani arra bilan 5 ta bo'lakka bo'lish uchun jami 20 daqiqa vaqt ketdi. Bitta joydan kesish uchun necha daqiqa vaqt sarflangan?", options: ["4", "5", "6", "3"], correctAnswer: 1 },
                { question: "Agar shu yilning yanvar oyining birinchi kuni Dushanba kuniga to'g'ri kelsa, shu oyning o'zida jami nechta Dushanba kuni bo'ladi? (Yanvar oyi 31 kun)", options: ["4", "5", "6", "3"], correctAnswer: 1 },
                { question: "Poyezd 4 ta vagondan iborat. Aziza boshidan hisoblaganda 3-vagonda ketyapti. Uning orqasida nechta vagon qolgan?", options: ["1", "2", "3", "4"], correctAnswer: 0 },
                { question: "Bo'sh turgan 12 litrli idishga jo'mrakdan har daqiqada 3 litr suv quyiladi. Lekin idishning tagidagi teshikdan har daqiqada 1 litr suv oqib ketadi. Bu idish necha daqiqada to'ladi?", options: ["4", "6", "8", "12"], correctAnswer: 1 },
                { question: "A va B noma'lum sonlar yashiringan. A + B = 15 va A - B = 3. Ushbu sonlarning ko'paytmasi (A × B) nechaga teng?", options: ["45", "50", "54", "60"], correctAnswer: 2 },
                { question: "Qutida 10 ta qizil, 8 ta ko'k va 5 ta yashil shar bor. Ko'zi yumgan holda eng kamida nechta shar olinsa, olingan sharlar orasida albatta bitta yashil shar chiqishi aniq bo'ladi?", options: ["18", "19", "14", "6"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        4: {


            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "Eng kichik to'rt xonali sondan eng katta ikki xonali sonni ayirsak, qanday son hosil bo'ladi?", options: ["901", "899", "900", "910"], correctAnswer: 0 },
                { question: "3 metr va 45 santimetr uzunlikdagi arqon jami necha santimetr bo'ladi?", options: ["3045 sm", "345 sm", "354 sm", "30045 sm"], correctAnswer: 1 },
                { question: "Qonuniyatni toping va so'roq belgisi o'rnidagi sonni belgilang: 2, 4, 8, 16, ?", options: ["24", "30", "32", "64"], correctAnswer: 2 },
                { question: "Bitta daftar 1500 so'm turadi. 4 ta daftar va 1000 so'mlik bitta xarid qilish uchun jami qancha pul kerak?", options: ["6000 so'm", "5500 so'm", "7000 so'm", "6500 so'm"], correctAnswer: 2 },
                { question: "To'g'ri to'rtburchakning bo'yi 8 sm, eni esa 5 sm. Uning yuzi (S) qanchaga teng?", options: ["26 kv.sm", "40 kv.sm", "13 kv.sm", "85 kv.sm"], correctAnswer: 1 },

                // 🔴 Qiyin darajadagi savollar (6-20)
                { question: "Avtomobil 2 soatda 160 km yo'l yurdi. U xuddi shu tezlikda 5 soatda necha kilometr yo'l yuradi?", options: ["320 km", "380 km", "400 km", "450 km"], correctAnswer: 2 },
                { question: "Ota o'g'lidan 24 yosh katta. 4 yildan keyin otaning yoshi o'g'lining yoshidan roppa-rosa 3 marta katta bo'ladi. Hozir o'g'il necha yoshda?", options: ["8", "10", "12", "6"], correctAnswer: 0 },
                { question: "Pishgan tarvuzning og'irligi 12 kg ga teng. Uning chorak (1/4) qismi va yarmisining (1/2) birgalikdagi og'irligi necha kilogramm bo'ladi?", options: ["6 kg", "8 kg", "9 kg", "10 kg"], correctAnswer: 2 },
                { question: "1, 0, 5, 8 raqamlaridan foydalanib (raqamlar bir sonda faqat bir marta ishtirok etishi sharti bilan) tuzish mumkin bo'lgan eng katta va eng kichik to'rt xonali sonlar yig'indisini toping.", options: ["9668", "9568", "8568", "9865"], correctAnswer: 1 },
                { question: "Kitobning betlari 1 dan boshlab raqamlab chiqildi. Buning uchun bosmaxonada jami 192 ta raqam ishlatildi. Kitob jami necha betdan iborat?", options: ["95", "96", "99", "100"], correctAnswer: 3 },
                { question: "Kvadratning perimetri 48 sm ga teng. Yuzasi ushbu kvadratning yuzasiga teng bo'lgan, bir tomoni 16 sm bo'lgan to'g'ri to'rtburchakning perimetrini toping.", options: ["48 sm", "50 sm", "52 sm", "54 sm"], correctAnswer: 1 },
                { question: "Do'konda 3 ta qalam va 2 ta daftar birgalikda 16000 so'm turadi. Xuddi shunday 2 ta qalam va 3 ta daftar esa 19000 so'm turadi. Bitta daftar necha pul turadi?", options: ["3000 so'm", "4000 so'm", "5000 so'm", "2000 so'm"], correctAnswer: 2 },
                { question: "Bir xil quvvatga ega bo'lgan 5 ta nasos hovuzni 12 soatda to'ldiradi. Xuddi shunday 3 ta nasos bu hovuzni necha soatda to'ldiradi?", options: ["15 soat", "18 soat", "20 soat", "24 soat"], correctAnswer: 2 },
                { question: "Qutida 20 ta oq, 15 ta qora va 10 ta qizil sharlar bor. Qaramasdan eng kamida nechta shar olinsa, olingan sharlar orasida albatta bitta oq shar chiqishi aniq bo'ladi?", options: ["21", "25", "26", "16"], correctAnswer: 2 },
                { question: "Elektron soat 14:35 ni ko'rsatmoqda. 195 daqiqadan keyin soat nechani ko'rsatadi?", options: ["17:35", "17:50", "18:05", "18:15"], correctAnswer: 1 },
                { question: "Bitta katta tarvuz 3 ta qovunning og'irligiga teng. Bitta qovun esa 5 ta anorning og'irligiga teng. 1 ta tarvuz va 2 ta qovunning birgalikdagi og'irligi nechta anorga teng bo'ladi?", options: ["15", "20", "25", "30"], correctAnswer: 2 },
                { question: "Sayyoh ko'zlangan yo'lning 1/3 qismini yurdi. Keyin qolgan yo'lning yarmini yurdi. Shundan so'ng manzilgacha 15 km yo'l qoldi. Sayyoh o'tishi kerak bo'lgan jami yo'l necha kilometr bo'lgan?", options: ["30 km", "45 km", "60 km", "75 km"], correctAnswer: 1 },
                { question: "A, B, C va D ismli bolalar yugurish musobaqasida qatnashdi. B bola A dan oldin, lekin C dan keyin marraga keldi. D eng oxirgi bo'lib kelmagan va B dan oldin kelgan. Agar C birinchi bo'lib kelmagan bo'lsa, D nechanchi o'rinni egallagan?", options: ["1-o'rin", "2-o'rin", "3-o'rin", "4-o'rin"], correctAnswer: 0 },
                { question: "Ikkita sonning yig'indisi 143 ga teng. Agar ularning kattasidan oxirgi \"0\" raqamini o'chirsak, ikkinchi kichik son hosil bo'ladi. Bu sonlarning ayirmasi (kattasidan kichigini ayirganda) nechaga teng?", options: ["117", "120", "127", "130"], correctAnswer: 0 },
                { question: "Kubning barcha qirralari uzunliklari yig'indisi 60 sm ga teng. Bu kubning to'la sirti yuzini toping.", options: ["125 kv.sm", "100 kv.sm", "150 kv.sm", "180 kv.sm"], correctAnswer: 2 }
            ],
            questionCount: 20,
            timeLimit: 20
        },

        5: {
            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "Qavslar ishtirok etgan ushbu ifodaning qiymatini toping: 25 × 4 + 100 ÷ 5", options: ["120", "100", "80", "200"], correctAnswer: 0 },
                { question: "To'rtta va yana yarimta tayoqning jami nechta uchi bor?", options: ["8", "10", "9", "12"], correctAnswer: 1 },
                { question: "Kvadratning yuzi 64 kv.sm ga teng. Uning perimetri qancha bo'ladi?", options: ["16 sm", "24 sm", "32 sm", "64 sm"], correctAnswer: 2 },
                { question: "Qonuniyatni davom ettiring va so'roq belgisi o'rnidagi sonni toping: 1, 4, 9, 16, ?", options: ["25", "20", "24", "32"], correctAnswer: 0 },
                { question: "1 kilogrammning beshdan bir (1/5) qismi necha grammga teng?", options: ["500 g", "100 g", "250 g", "200 g"], correctAnswer: 3 },

                // 🔴 Qiyin darajadagi savollar (6-20)
                { question: "Kitobning sahifalarini raqamlash uchun jami 324 ta raqam ishlatildi (1-sahifadan boshlab). Ushbu kitob necha sahifadan iborat?", options: ["144", "120", "136", "152"], correctAnswer: 0 },
                { question: "Ota 40 yoshda, uning ikkita o'g'li esa 10 va 6 yoshda. Necha yildan so'ng otaning yoshi ikkala o'g'illari yoshlari yig'indisiga teng bo'ladi?", options: ["12", "24", "18", "20"], correctAnswer: 1 },
                { question: "0, 2, 4, 5 raqamlari yordamida (raqamlar bitta sonda takrorlanmasligi sharti bilan) jami nechta har xil uch xonali son tuzish mumkin?", options: ["24", "12", "18", "20"], correctAnswer: 2 },
                { question: "Bitta quvur bo'sh hovuzni 3 soatda to'ldiradi, ikkinchi quvur xuddi shu hovuzni 6 soatda to'ldiradi. Agar ikkala quvur birdaniga ochib qo'yilsa, hovuz necha soatda to'ladi?", options: ["2", "3", "4", "4.5"], correctAnswer: 0 },
                { question: "A va B shaharlar orasidagi masofa 600 km. Ikkita poyezd bir-biriga qarab 60 km/soat va 90 km/soat tezlik bilan yo'lga chiqdi. Poyezdlar harakatni boshlagan vaqtda bir qush 120 km/soat tezlikda bir poyezddan ikkinchisiga qarab uchishni boshladi va poyezdlar uchrashguncha tinmay uchdi (poyezddan poyezdga). Qush jami necha kilometr masofani uchib o'tgan?", options: ["240", "360", "480", "600"], correctAnswer: 2 },
                { question: "Qizil ranga bo'yalgan katta kub 27 ta bir xil kichik kubchalarga bo'lindi. Faqatgina ikkita tomoni qizil ranga bo'yalgan jami nechta kichik kubcha bor?", options: ["8", "6", "12", "4"], correctAnswer: 2 },
                { question: "5 ta mushuk 5 ta sichqonni tutish uchun 5 daqiqa vaqt sarflaydi. 100 ta sichqonni 100 daqiqada tutish uchun nechta mushuk kerak bo'ladi?", options: ["100", "5", "20", "50"], correctAnswer: 1 },
                { question: "Ikkita sonning yig'indisi 120 ga teng. Ulardan biri ikkinchisidan roppa-rosa 3 marta katta. Bu ikki sonning ayirmasi nechaga teng?", options: ["30", "40", "60", "90"], correctAnswer: 2 },
                { question: "Hovlida uch g'ildirakli va ikki g'ildirakli velosipedlar turibdi. Ularning jami soni 15 ta, g'ildiraklarining umumiy soni esa 36 ta. Hovlida nechta uch g'ildirakli velosiped bor?", options: ["9", "8", "6", "7"], correctAnswer: 2 },
                { question: "O'quvchi kitobning 1/3 qismini o'qidi, so'ngra qolgan qismining 1/4 qismini o'qidi. Agar kitobning hali o'qilmagan 60 ta sahifasi qolgan bo'lsa, kitob jami nechta sahifadan iborat?", options: ["100", "120", "150", "90"], correctAnswer: 1 },
                { question: "Agar bugun seshanba kuni bo'lsa, bundan roppa-rosa 100 kundan keyin haftaning qaysi kuni bo'ladi?", options: ["Chorshanba", "Juma", "Payshanba", "Dushanba"], correctAnswer: 2 },
                { question: "Sizda 9 ta bir xil ko'rinishdagi tanga bor. Ulardan biri qalbaki va u boshqalaridan yengilroq. Ikki pallali tarozidan (toshlarsiz, faqat pallalarning o'zidan) eng kamida necha marta foydalanib qalbaki tangani aniq topish mumkin?", options: ["4", "3", "2", "1"], correctAnswer: 2 },
                { question: "Bola ruchka va kitobni birgalikda 11 000 so'mga sotib oldi. Kitob ruchkadan 10 000 so'm qimmat. Ruchkaning o'zi necha pul turadi?", options: ["1000", "500", "100", "1500"], correctAnswer: 1 },
                { question: "3, 4 va 5 ga bo'lganda har doim 2 qoldiq chiqadigan eng kichik uch xonali son qaysi?", options: ["102", "112", "122", "182"], correctAnswer: 2 },
                { question: "Shilliqqurt 10 metrli baland devorga o'rmalab chiqmoqda. U kunduzi 4 metr yuqoriga ko'tariladi, kechasi uxlab qolganda esa sirpanib 3 metr pastga tushib ketadi. U devorning eng uchiga jami necha kunda yetib boradi?", options: ["10", "9", "8", "7"], correctAnswer: 3 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        6: {
            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "0.25 o'nli kasrini qisqarmaydigan oddiy kasr ko'rinishida yozing.", options: ["1/3", "1/2", "1/4", "1/5"], correctAnswer: 2 },
                { question: "200 sonining 15% i nechaga teng?", options: ["25", "30", "35", "40"], correctAnswer: 1 },
                { question: "Tenglamani yeching: 3x - 7 = 14", options: ["7", "6", "5", "8"], correctAnswer: 0 },
                { question: "To'g'ri burchakli parallelepipedning o'lchamlari 3 sm, 4 sm va 5 sm. Uning hajmini toping.", options: ["30 sm³", "47 sm³", "12 sm³", "60 sm³"], correctAnswer: 3 },
                { question: "Sinfda 12 ta o'g'il bola va 16 ta qiz bola bor. O'g'il bolalar sonining qiz bolalar soniga nisbatini toping.", options: ["4:3", "3:4", "1:2", "2:3"], correctAnswer: 1 },

                // 🔴 Qiyin darajadagi savollar (6-20)
                { question: "Yangi uzilgan qo'ziqorinning 90% i suvdan iborat. Quritilgan qo'ziqorinning esa 20% i suv. 20 kg yangi uzilgan qo'ziqorindan necha kilogramm quritilgan qo'ziqorin olish mumkin?", options: ["2.5 kg", "2 kg", "3 kg", "4 kg"], correctAnswer: 0 },
                { question: "Bir ishchi biror ishni 10 kunda tugatadi, ikkinchisi esa xuddi shu ishni 15 kunda tugatadi. Agar ikkalasi birgalikda ishlasa, bu ishni necha kunda tugatishadi?", options: ["5", "6", "7", "8"], correctAnswer: 1 },
                { question: "1, 2, 3, 4, 5 raqamlaridan foydalanib (raqamlar bitta sonda takrorlanmasligi sharti bilan) jami nechta har xil 3 xonali juft son tuzish mumkin?", options: ["30", "24", "36", "48"], correctAnswer: 1 },
                { question: "Do'konda 3 ta qalam va 4 ta daftar 26 000 so'm turadi. 2 ta qalam va 2 ta daftar esa 14 000 so'm turadi. 1 ta daftar necha pul turadi?", options: ["4000 so'm", "4500 so'm", "5000 so'm", "5500 so'm"], correctAnswer: 2 },
                { question: "1 dan 100 gacha bo'lgan barcha natural sonlar ko'paytmasi (100!) jami nechta nol bilan tugaydi?", options: ["20", "21", "24", "25"], correctAnswer: 2 },
                { question: "Bobo 72 yoshda, uning uchta nabirasi mos ravishda 9, 11 va 14 yoshda. Necha yildan keyin nabiralarning yoshlari yig'indisi bobosining yoshiga teng bo'ladi?", options: ["17", "18", "19", "20"], correctAnswer: 2 },
                { question: "Agar bugun Yakshanba kuni bo'lsa, bundan roppa-rosa 2026 kundan keyin haftaning qaysi kuni bo'ladi?", options: ["Chorshanba", "Payshanba", "Juma", "Shanba"], correctAnswer: 0 },
                { question: "Quyidagi yig'indining qiymatini hisoblang: 1 - 2 + 3 - 4 + 5 - 6 + ... + 99 - 100", options: ["50", "-50", "-100", "0"], correctAnswer: 1 },
                { question: "Hovuzga 3 ta quvur ulangan. 1-quvur bo'sh hovuzni 2 soatda, 2-quvur esa 3 soatda to'ldiradi. 3-quvur esa to'la hovuzni 6 soatda to'liq bo'shatadi. Agar uchala quvur birdaniga ochib qo'yilsa, bo'sh hovuz qancha vaqtda to'ladi?", options: ["1 soat", "2 soat", "1 soat 30 daqiqa", "1 soat 15 daqiqa"], correctAnswer: 2 },
                { question: "Uzunligi 400 metr bo'lgan poyezd 600 metr uzunlikdagi tunneldan roppa-rosa 1 daqiqada to'liq o'tib ketdi. Poyezdning tezligi soatiga necha kilometr (km/soat) bo'lgan?", options: ["50", "60", "70", "80"], correctAnswer: 1 },
                { question: "Idishda 15% li 40 litr tuzli eritma bor. Ushbu eritmaning konsentratsiyasini 10% ga tushirish uchun unga necha litr toza suv qo'shish kerak?", options: ["15", "20", "25", "30"], correctAnswer: 1 },
                { question: "Ikkita noma'lum raqamdan tashkil topgan ikki xonali xy va yx sonlarining yig'indisi 143 ga teng (xy + yx = 143). Raqamlar yig'indisi (x + y) nechaga teng bo'ladi?", options: ["11", "12", "13", "14"], correctAnswer: 2 },
                { question: "Kvadratning tomoni uzunligi 20% ga orttirilsa, uning yuzi necha foizga ortadi?", options: ["20%", "40%", "44%", "400%"], correctAnswer: 2 },
                { question: "Velosipedchi tog'ga qarab qiyalikda 10 km/soat tezlik bilan chiqdi va orqasiga 15 km/soat tezlik bilan tushdi. Velosipedchining butun yo'l davomidagi o'rtacha tezligi qanday bo'lgan?", options: ["12.5 km/soat", "12 km/soat", "13 km/soat", "11.5 km/soat"], correctAnswer: 1 },
                { question: "1 dan 1000 gacha bo'lgan barcha butun sonlar qog'ozga yozib chiqilganda, 7 raqami jami necha marta yoziladi?", options: ["271", "280", "314", "300"], correctAnswer: 3 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        7: {
            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "Ifodaning qiymatini toping: (-5)² - (-2)³", options: ["17", "33", "27", "21"], correctAnswer: 1 },
                { question: "Noma'lum x ni toping: x/4 = 15/12", options: ["5", "4", "6", "3"], correctAnswer: 0 },
                { question: "12 va 18 sonlari uchun eng kichik umumiy karrali (EKUK) ni toping.", options: ["36", "72", "18", "6"], correctAnswer: 0 },
                { question: "Uchburchakning ichki burchaklari yig'indisi necha gradusga teng?", options: ["90°", "360°", "180°", "270°"], correctAnswer: 2 },
                { question: "150 sonining 20% i nechaga teng?", options: ["25", "35", "20", "30"], correctAnswer: 3 },

                // 🔴 Qiyin darajadagi savollar (6-20)
                { question: "Tenglamani yeching: (2x - 3)/4 = (x + 1)/3", options: ["5", "6.5", "7", "4.5"], correctAnswer: 1 },
                { question: "120 sonining jami nechta natural bo'luvchisi bor?", options: ["12", "14", "16", "18"], correctAnswer: 2 },
                { question: "Agar a + b = 7 va a·b = 10 bo'lsa, a² + b² ifodaning qiymatini toping.", options: ["29", "49", "39", "17"], correctAnswer: 0 },
                { question: "Ikkita ishchi birgalikda ma'lum bir ishni 6 kunda tugatadi. Agar birinchi ishchining o'zi bu ishni 10 kunda tugatsa, ikkinchi ishchi yolg'iz o'zi ishlasa necha kunda tugatadi?", options: ["12", "15", "20", "18"], correctAnswer: 1 },
                { question: "Poyezd elektr ustuni yonidan 10 soniyada, 300 metr uzunlikdagi ko'prikdan esa 25 soniyada to'liq o'tib ketdi. Poyezdning uzunligi necha metrga teng?", options: ["150", "200", "250", "100"], correctAnswer: 1 },
                { question: "7^(2026) soni qanday raqam bilan tugaydi?", options: ["7", "9", "3", "1"], correctAnswer: 1 },
                { question: "Do'kondagi kompyuterning narxi avval 20% ga oshirildi. Ma'lum vaqtdan so'ng yangi narx yana 20% ga arzonlashtirildi. Kompyuterning dastlabki narxi qanday o'zgargan?", options: ["O'zgarmaydi", "4% ga ortadi", "4% ga kamaydi", "2% ga kamaydi"], correctAnswer: 2 },
                { question: "Qutida 5 ta qizil, 4 ta ko'k va 3 ta yashil shar bor. Qaramasdan eng kamida nechta shar olinsa, ularning orasida har bir rangdan kamida bittadan shar bo'lishi yuz foiz aniq bo'ladi?", options: ["10", "9", "8", "12"], correctAnswer: 0 },
                { question: "5 ta ketma-ket butun sonlarning yig'indisi 105 ga teng. Shu sonlardan eng kattasini toping.", options: ["21", "22", "23", "24"], correctAnswer: 2 },
                { question: "Barcha uch xonali natural sonlar orasida yozilishida kamida bitta '5' raqami qatnashgan jami nechta son bor?", options: ["252", "248", "260", "200"], correctAnswer: 0 },
                { question: "Agar 3^x = 5 bo'lsa, 3^(x+2) ifodaning qiymatini hisoblang.", options: ["15", "25", "45", "125"], correctAnswer: 2 },
                { question: "Muntazam ko'pburchakning bitta tashqi burchagi 24° ga teng. Bu ko'pburchakning nechta tomoni bor?", options: ["12", "15", "18", "20"], correctAnswer: 1 },
                { question: "ABC uchburchakda A burchak B burchakdan 2 marta katta, C burchak esa A burchakdan 20° ga katta. B burchak necha gradusga teng?", options: ["32°", "64°", "40°", "36°"], correctAnswer: 0 },
                { question: "Quyidagi kasrlar yig'indisini hisoblang: 1/2 + 1/6 + 1/12 + 1/20 + ... + 1/90", options: ["8/9", "9/10", "1", "10/11"], correctAnswer: 1 },
                { question: "Yangi uzilgan uzumning 80% i suvdan iborat. Quritilgan mayizning esa 20% i suv. 10 kg mayiz olish uchun necha kilogramm yangi uzilgan uzum kerak bo'ladi?", options: ["30", "40", "50", "20"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        8: {
            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "√81 - √25 ifodaning qiymatini hisoblang.", options: ["2", "4", "6", "16"], correctAnswer: 1 },
                { question: "(-2)³ + (-1)⁴ yig'indini hisoblang.", options: ["-9", "-7", "-8", "7"], correctAnswer: 1 },
                { question: "Rombning diagonallari o'zaro qanday burchak ostida kesishadi?", options: ["45°", "60°", "90°", "120°"], correctAnswer: 2 },
                { question: "(a - b)² + 2ab ifodani soddalashtiring.", options: ["a² - b²", "a² + b²", "(a+b)²", "a² + 2ab + b²"], correctAnswer: 1 },
                { question: "40 soni 200 sonining necha foizini tashkil qiladi?", options: ["25%", "20%", "40%", "50%"], correctAnswer: 1 },

                // 🔴 Qiyin darajadagi savollar (6-20)
                { question: "x² - 5x + 6 = 0 tenglamaning ildizlari x₁ va x₂ bo'lsa, x₁² + x₂² ifodaning qiymatini toping.", options: ["12", "25", "13", "15"], correctAnswer: 2 },
                { question: "Trapetsiyaning o'rta chizig'i 10 ga teng. Uning bir asosi ikkinchisidan 4 ga uzun. Ushbu trapetsiya asoslarining ko'paytmasini toping.", options: ["80", "100", "108", "96"], correctAnswer: 3 },
                { question: "2023^(2024) soni qanday raqam bilan tugaydi?", options: ["1", "3", "7", "9"], correctAnswer: 0 },
                { question: "Bir quvur bo'sh hovuzni 4 soatda, ikkinchisi 6 soatda to'ldiradi. Uchinchi quvur esa to'la hovuzni 3 soatda bo'shatadi. Agar uchala quvur birdaniga ochib qo'yilsa, bo'sh hovuz necha soatda to'ladi?", options: ["6 soat", "8 soat", "12 soat", "10 soat"], correctAnswer: 2 },
                { question: "Qayiq oqim bo'ylab 3 soatda 60 km, oqimga qarshi esa 5 soatda xuddi shuncha masofani bosib o'tdi. Daryo oqimining tezligi soatiga necha km?", options: ["2", "4", "3", "5"], correctAnswer: 1 },
                { question: "To'g'ri burchakli uchburchakning katetlari 6 va 8 ga teng. Bu uchburchakka ichki chizilgan aylananing radiusini toping.", options: ["1", "2", "3", "4"], correctAnswer: 1 },
                { question: "Agar x + y = 7 va x³ + y³ = 133 bo'lsa, xy ko'paytmani toping.", options: ["12", "14", "8", "10"], correctAnswer: 3 },
                { question: "Qavariq muntazam 10 burchakning (o'ngburchak) jami nechta diagonali bor?", options: ["25", "35", "30", "40"], correctAnswer: 1 },
                { question: "(2²⁰ - 2¹⁵) / (2¹⁵ - 2¹⁰) kasrning qiymatini hisoblang.", options: ["4", "2", "1/2", "8"], correctAnswer: 3 },
                { question: "50 kg massali 10% li tuzli eritmaga ega bo'lish uchun, undan qancha suvni bug'lantirish kerakki (kg), natijada 25% li tuzli eritma hosil bo'lsin?", options: ["15", "20", "30", "25"], correctAnswer: 2 },
                { question: "To'g'ri to'rtburchakning yuzi 48 ga, perimetri esa 28 ga teng. Uning diagonalini uzunligini toping.", options: ["10", "12", "14", "16"], correctAnswer: 0 },
                { question: "10^100 - 2026 ayirmaning natijasida hosil bo'lgan sonning raqamlari yig'indisini toping.", options: ["895", "891", "900", "882"], correctAnswer: 1 },
                { question: "√(7 - 4√3) + √3 ifodaning qiymatini hisoblang.", options: ["2√3", "4", "2", "√3"], correctAnswer: 2 },
                { question: "A bekatdan birinchi poyezd yo'lga chiqdi. 2 soatdan keyin uning ortidan tezligi 90 km/soat bo'lgan ikkinchi poyezd yo'lga chiqdi va 4 soatdan so'ng birinchi poyezdni quvib yetdi. Birinchi poyezdning tezligini toping.", options: ["50 km/soat", "70 km/soat", "60 km/soat", "75 km/soat"], correctAnswer: 2 },
                { question: "Agar x + 1/x = 5 bo'lsa, x³ + 1/x³ ifodaning qiymatini hisoblang.", options: ["115", "120", "110", "125"], correctAnswer: 2 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        9: {
            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "Ifodaning qiymatini hisoblang: √12 · √3", options: ["6", "36", "6√3", "18"], correctAnswer: 0 },
                { question: "Arifmetik progressiyada a₁ = 5 va ayirma d = 3 ga teng bo'lsa, bu progressiyaning o'ninchi hadi (a₁₀) nechaga teng bo'ladi?", options: ["27", "32", "30", "35"], correctAnswer: 1 },
                { question: "Tengsizlikni yeching: 2x - 5 > 3x + 1", options: ["x > -6", "x < -6", "x > 6", "x < 6"], correctAnswer: 1 },
                { question: "Katetlari uzunligi mos ravishda 10 sm va 24 sm bo'lgan to'g'ri burchakli uchburchakning yuzini toping.", options: ["120 kv.sm", "240 kv.sm", "60 kv.sm", "26 kv.sm"], correctAnswer: 0 },
                { question: "Kasrni soddalashtiring (a ≠ 0): a³ · a⁴ / a²", options: ["a⁶", "a⁵", "a¹⁰", "a⁹"], correctAnswer: 1 },

                // 🔴 Qiyin darajadagi savollar (6-20)
                { question: "x² - 7x + 10 = 0 kvadrat tenglamaning ildizlari yig'indisini Viet teoremasi orqali toping.", options: ["-7", "10", "7", "-10"], correctAnswer: 2 },
                { question: "Ko'paytmaning qiymatini hisoblang: (1 - 1/4)(1 - 1/9)(1 - 1/16)...(1 - 1/100)", options: ["11/20", "1/10", "9/20", "1/2"], correctAnswer: 0 },
                { question: "ABC uchburchakning tomonlari uzunliklari 13, 14 va 15 ga teng. Ushbu uchburchakka ichki chizilgan aylananing radiusini (r) toping.", options: ["4", "5", "8", "6.5"], correctAnswer: 0 },
                { question: "Agar x + y = 4 va x² + y² = 10 ekani ma'lum bo'lsa, x³ + y³ ifodaning qiymati nechaga teng bo'ladi?", options: ["24", "28", "32", "64"], correctAnswer: 1 },
                { question: "Bikvadrat tenglama jami nechta haqiqiy ildizga ega: x⁴ - 5x² + 4 = 0?", options: ["2", "0", "4", "1"], correctAnswer: 2 },
                { question: "Berilgan kvadratik funksiyaning eng katta qiymatini toping: y = -2x² + 8x - 5", options: ["3", "5", "-5", "8"], correctAnswer: 0 },
                { question: "Tomoni 6 ga teng bo'lgan muntazam oltiburchakka tashqi chizilgan doiraning yuzini toping.", options: ["12π", "18π", "24π", "36π"], correctAnswer: 3 },
                { question: "3 ga bo'lganda 1 qoldiq qoladigan barcha ikki xonali natural sonlarning yig'indisini toping.", options: ["1605", "1650", "1505", "1705"], correctAnswer: 0 },
                { question: "Murakkab ildiz qatnashgan ifodani soddalashtiring: √(11 - 4√7)", options: ["2 - √7", "√7 - 2", "√7 + 2", "√11 - √7"], correctAnswer: 1 },
                { question: "Radiuslari 3 va 5 bo'lgan ikkita aylana bir-biriga tashqi tarzda urinadi. Bu aylanalar o'rtasidagi umumiy tashqi urinmaning uzunligini toping.", options: ["2√15", "√34", "8", "4√5"], correctAnswer: 0 },
                { question: "Agar f(x) = x/(x-1) bo'lsa, f(f(x)) murakkab funksiya nimaga teng bo'ladi?", options: ["-x", "x", "1/x", "x-1"], correctAnswer: 1 },
                { question: "Modulli tengsizlik jami nechta butun yechimga ega: |2x - 3| ≤ 5?", options: ["5", "6", "7", "4"], correctAnswer: 1 },
                { question: "30 ta o'quvchidan iborat sinfda 18 kishi futbol to'garagiga, 14 kishi basketbol to'garagiga qatnashadi. 5 kishi hech qanday to'garakka qatnashmaydi. Jami nechta o'quvchi ham futbol, ham basketbol to'garagiga qatnashadi?", options: ["5", "6", "7", "8"], correctAnswer: 2 },
                { question: "Quyidagi ratsional bo'lmagan kasrlar yig'indisini hisoblang: 1/(√1+√2) + 1/(√2+√3) + ... + 1/(√99+√100)", options: ["10", "9", "99", "100"], correctAnswer: 1 },
                { question: "Oltita haddan iborat geometrik progressiyada dastlabki uchta hadining yig'indisi 26 ga, oxirgi uchta hadining yig'indisi 702 ga teng. Ushbu progressiyaning maxrajini (q) toping.", options: ["2", "3", "4", "5"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        10: {
            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "Logarifmik ifodaning qiymatini hisoblang: log₂ 16 + log₃ 27", options: ["7", "5", "12", "10"], correctAnswer: 0 },
                { question: "Asosiy trigonometrik ayniyatdan foydalanib hisoblang: sin² 15° + cos² 15°", options: ["0", "1", "1/2", "2"], correctAnswer: 1 },
                { question: "Dastlabki 100 ta natural sonning yig'indisini toping (1 + 2 + 3 + ... + 100).", options: ["5000", "5050", "10100", "500"], correctAnswer: 1 },
                { question: "y = √(x - 5) funksiyaning aniqlanish sohasini toping.", options: ["(-∞, 5]", "(5, ∞)", "[5, ∞)", "(-∞, ∞)"], correctAnswer: 2 },
                { question: "Qirrasi 3 sm ga teng bo'lgan kubning hajmi necha sm³ ga teng?", options: ["9", "18", "27", "36"], correctAnswer: 2 },

                // 🔴 Qiyin darajadagi savollar (6-20)
                { question: "cos x = x² + 1 tenglama jami nechta haqiqiy ildizga ega?", options: ["0", "1", "2", "Cheksiz ko'p"], correctAnswer: 1 },
                { question: "Logarifmik tengsizlikni yeching: log₀.₅(x - 1) > log₀.₅ 3", options: ["(1, 4)", "(4, ∞)", "(-∞, 4)", "(0, 4)"], correctAnswer: 0 },
                { question: "2^2026 + 3^2026 yig'indi qanday raqam bilan tugaydi?", options: ["1", "3", "7", "9"], correctAnswer: 1 },
                { question: "P(x) = (2x² - 3x + 2)^10 ko'phadning barcha koeffitsiyentlari yig'indisi nechaga teng bo'ladi?", options: ["2^10", "1", "3^10", "0"], correctAnswer: 1 },
                { question: "Trigonometrik ifodaning qiymatini hisoblang: cos 20° · cos 40° · cos 80°", options: ["1/8", "1/4", "1/2", "1"], correctAnswer: 0 },
                { question: "Kubning ichiga uning barcha yoqlariga urinadigan shar chizildi. Ushbu sharning hajmi kubning hajmiga qanday nisbatda bo'ladi?", options: ["π/4", "π/6", "π/8", "3π/4"], correctAnswer: 1 },
                { question: "Qavariq muntazam 20 burchakning (planimetriyadagi ko'pburchak) jami nechta diagonali bor?", options: ["170", "190", "200", "380"], correctAnswer: 0 },
                { question: "Ikkita o'yin toshi (zar) birgalikda tashlanganda, tushgan ochkolar yig'indisi 8 bo'lish ehtimolligi qanday?", options: ["1/9", "5/36", "1/12", "7/36"], correctAnswer: 1 },
                { question: "Agar x² + 1/x² = 7 ekani ma'lum bo'lsa (x > 0), u holda x³ + 1/x³ ifodaning qiymatini toping.", options: ["14", "18", "21", "24"], correctAnswer: 1 },
                { question: "72 · (3^10 - 1) ifodani hisoblaganda hosil bo'ladigan sonning eng katta tub bo'luvchisi qaysi son bo'ladi?", options: ["11", "61", "17", "41"], correctAnswer: 1 },
                { question: "Tomonlari uzunliklari mos ravishda 13, 14 va 15 ga teng bo'lgan uchburchakka tashqi chizilgan doiraning yuzini toping.", options: ["4225π/64", "1325π/64", "65π/8", "84π"], correctAnswer: 0 },
                { question: "f(x) = √(x² - 4x + 13) + √(x² - 14x + 74) funksiyaning qabul qilishi mumkin bo'lgan eng kichik qiymatini toping.", options: ["√85", "10", "√89", "9"], correctAnswer: 2 },
                { question: "Murakkab ildizli ifodani soddalashtiring: √(13 + 30√2) + √(9 + 4√2)", options: ["3 + 5√2", "5 + 3√2", "4 + 3√2", "5 + √2"], correctAnswer: 1 },
                { question: "Darajali-ko'rsatkichli tenglamaning barcha haqiqiy ildizlari yig'indisini toping: (x² - 5x + 5)^(x²-9) = 1", options: ["2", "4", "5", "6"], correctAnswer: 2 },
                { question: "Tenglamaning barcha musbat ildizlari ko'paytmasini toping: x^(log₃ x) = 9x", options: ["3", "9", "1/9", "27"], correctAnswer: 0 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        11: {
            questions: [
                // 🟢 Oson savollar (1-5)
                { question: "Quyidagi limitni hisoblang: lim(x→0) sin(3x)/x", options: ["0", "1", "3", "∞"], correctAnswer: 2 },
                { question: "f(x) = x · eˣ funksiya berilgan. Hosilaning x = 0 nuqtadagi qiymatini (f'(0)) toping.", options: ["0", "1", "e", "-1"], correctAnswer: 1 },
                { question: "Aniq integralni hisoblang: ∫₀² (3x² - 2x)dx", options: ["2", "4", "6", "8"], correctAnswer: 1 },
                { question: "z = 3 - 4i kompleks sonining modulini (|z|) toping.", options: ["7", "-1", "5", "25"], correctAnswer: 2 },
                { question: "Bir vaqtda ikkita o'yin toshi (zar) tashlandi. Tushgan ochkolar yig'indisi 7 bo'lish ehtimolligi qanday?", options: ["1/9", "1/6", "7/36", "1/12"], correctAnswer: 1 },

                // 🔴 Qiyin darajadagi savollar (6-20)
                { question: "Funksiya limitini hisoblang: lim(x→∞) (1 + 2/x)^(2x)", options: ["e²", "e³", "e⁴", "1"], correctAnswer: 2 },
                { question: "y = x³ - 3x² + 5 funksiyaning [-1; 3] kesmadagi eng katta va eng kichik qiymatları yig'indisini toping.", options: ["4", "5", "6", "8"], correctAnswer: 1 },
                { question: "Bo'laklab integrallash formulasidan foydalanib hisoblang: ∫₀^π x cos x dx", options: ["0", "-2", "2", "π"], correctAnswer: 1 },
                { question: "Konus yon sirtining yoyilmasi markaziy burchagi 120° bo'lgan doiraviy sektordan iborat. Konus balandligining uning asos radiusiga nisbatini toping.", options: ["√2", "2√2", "3", "√3"], correctAnswer: 1 },
                { question: "Kompleks sonni hisoblang: z = ((1+i)/(1-i))^2026", options: ["i", "-i", "1", "-1"], correctAnswer: 3 },
                { question: "Quyidagi tenglamalar sistemasi koordinatalar tekisligida jami nechta yechimga (kesishish nuqtasiga) ega? { x²+y²=4; |x|+|y|=2 }", options: ["2", "4", "8", "Cheksiz ko'p"], correctAnswer: 1 },
                { question: "f(x) + 2f(1 - x) = x² funksional tenglama berilgan. f(2) ning qiymatini toping.", options: ["-2/3", "2/3", "-1", "1"], correctAnswer: 0 },
                { question: "Agar fazoda a(2; -1; 3) va b(1; 2; -2) vektorlar berilgan bo'lsa, ularning vektor ko'paytmasi c = a × b vektorining uzunligini (|c|) toping.", options: ["9", "3√10", "2√15", "10"], correctAnswer: 1 },
                { question: "x³ - 6x² + 11x - 6 = 0 tenglamaning ildizlari x₁, x₂, x₃ ekani ma'lum. Ildizlar kvadratlarining yig'indisini (x₁² + x₂² + x₃²) toping.", options: ["11", "14", "22", "36"], correctAnswer: 1 },
                { question: "Geometrik ma'nosidan foydalanib aniq integralni hisoblang: ∫₋₂² √(4 - x²)dx", options: ["π", "2π", "4π", "8"], correctAnswer: 1 },
                { question: "Qutida 3 ta oq va 4 ta qora shar bor. Qutidan qaramasdan tasodifiy 3 ta shar olindi. Olingan sharlarning kamida bittasi oq bo'lish ehtimolligini toping.", options: ["31/35", "4/35", "1/2", "18/35"], correctAnswer: 0 },
                { question: "y = 2x³ - 3x² + 4 funksiya grafigiga o'tkazilgan urinma y = 12x + 5 to'g'ri chiziqqa parallel. Barcha shunday urinish nuqtalarining abssissalari (x) yig'indisini toping.", options: ["1", "2", "-1", "0"], correctAnswer: 0 },
                { question: "Irratsional tengsizlikni yeching: √(x² - 4x + 3) ≥ 2 - x", options: ["[2; ∞)", "[3; ∞)", "(-∞; 1] ∪ [3; ∞)", "[1; 3]"], correctAnswer: 1 },
                { question: "Agar sin x + cos x = 1.2 ekani ma'lum bo'lsa, sin³x + cos³x ifodaning son qiymatini toping.", options: ["0.864", "0.936", "1.2", "1.728"], correctAnswer: 1 },
                { question: "Diagonali uzunligi d ga teng bo'lgan ixtiyoriy to'g'ri burchakli parallelepiped to'la sirtining yuzi eng ko'pi bilan (maksimum) nechaga teng bo'lishi mumkin?", options: ["d²", "√3d²", "2d²", "3d²"], correctAnswer: 2 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
    }
};

const subjectNames = { russian: "Rus tili", english: "Ingliz tili", math: "Matematika" };

function getQuestions(subject, grade) {
    if (questionsDatabase[subject] && questionsDatabase[subject][grade]) {
        return questionsDatabase[subject][grade];
    }
    return { questions: [], questionCount: 0, timeLimit: 20 };
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function shuffleQuestionOptions(question) {
    const optionsWithIndex = question.options.map((opt, idx) => ({ text: opt, originalIndex: idx }));
    const shuffledOptions = shuffleArray(optionsWithIndex);
    const newCorrectAnswer = shuffledOptions.findIndex(opt => opt.originalIndex === question.correctAnswer);
    return { question: question.question, options: shuffledOptions.map(opt => opt.text), correctAnswer: newCorrectAnswer };
}

function prepareTest(subject, grade) {
    const data = getQuestions(subject, grade);
    if (data.questions.length === 0) return { questions: [], questionCount: 0, timeLimit: data.timeLimit };
    const shuffledQuestions = shuffleArray(data.questions);
    const preparedQuestions = shuffledQuestions.map(q => shuffleQuestionOptions(q));
    return { questions: preparedQuestions, questionCount: data.questionCount, timeLimit: data.timeLimit };
}
