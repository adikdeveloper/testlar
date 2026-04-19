// Savollar bazasi
const questionsDatabase = {
    russian: {
        1: {
            questions: [
                // рџџў Oson testlar (1-5)
                { question: "3 + 2 = ?", options: ["4", "5", "6", "7"], correctAnswer: 1 },
                { question: "7 - 4 = ?", options: ["2", "3", "4", "5"], correctAnswer: 1 },
                { question: "5 + 1 = ?", options: ["5", "6", "7", "8"], correctAnswer: 1 },
                { question: "9 - 2 = ?", options: ["6", "7", "8", "5"], correctAnswer: 1 },
                { question: "4 + 4 = ?", options: ["6", "7", "8", "9"], correctAnswer: 2 },

                // рџ”ґ Qiyinroq savollar (6-15)
                { question: "Dilshodda 6 ta olma bor edi. Onasi unga yana 5 ta olma berdi. Dilshodda jami nechta olma boвЂldi?", options: ["10", "11", "12", "13"], correctAnswer: 1 },
                { question: "Stol ustida 12 ta qalam bor edi. 4 tasi olindi. Stol ustida nechta qalam qoldi?", options: ["6", "7", "8", "9"], correctAnswer: 2 },
                { question: "Azizada 7 ta gul bor edi. U yana 6 ta gul oldi. Endi unda nechta gul boвЂldi?", options: ["12", "13", "14", "15"], correctAnswer: 1 },
                { question: "Javohir 15 ta konfetdan 7 tasini yedi. Nechta konfet qoldi?", options: ["7", "8", "9", "10"], correctAnswer: 1 },
                { question: "BogвЂda 9 ta qush bor edi. Yana 8 ta qush uchib keldi. Jami nechta qush boвЂldi?", options: ["15", "16", "17", "18"], correctAnswer: 2 },
                { question: "Bir qutida 14 ta shar bor edi. 6 tasi yorildi. Nechta shar qoldi?", options: ["7", "8", "9", "10"], correctAnswer: 1 },
                { question: "Malika 5 ta daftar oldi. Keyin yana 3 ta va yana 4 ta daftar oldi. U jami nechta daftar oldi?", options: ["10", "11", "12", "13"], correctAnswer: 2 },
                { question: "18 ta kitobning 9 tasi javonga qoвЂyildi. Nechta kitob qolib turibdi?", options: ["7", "8", "9", "10"], correctAnswer: 2 },
                { question: "Bahromda 16 ta kubik, ukasida 12 ta kubik bor. Kimda koвЂproq kubik bor?", options: ["Ukasida", "Ikkalasida teng", "Bahromda", "Hech birida"], correctAnswer: 2 },
                { question: "Nodirada 3 ta qizil, 4 ta yashil va 5 ta sariq shar bor. Jami nechta shar bor?", options: ["10", "11", "12", "13"], correctAnswer: 2 },

                // рџџЎ ChalgвЂituvchi testlar (16-20)
                { question: "Sandiqda 10 ta oвЂyinchoq bor edi. Hech biri olinmadi. Sandiqda nechta oвЂyinchoq bor?", options: ["0", "1", "9", "10"], correctAnswer: 3 },
                { question: "Javlonda 0 ta qalam bor edi. Unga 7 ta qalam berildi. Endi unda nechta qalam bor?", options: ["0", "6", "7", "8"], correctAnswer: 2 },
                { question: "Darsxonada 11 ta kitob bor edi. 1 tasi olindi. Nechta kitob qoldi?", options: ["9", "10", "11", "12"], correctAnswer: 1 },
                { question: "Savatda 2 tadan 3 guruh olma bor. Jami nechta olma bor?", options: ["4", "5", "6", "7"], correctAnswer: 2 },
                { question: "Sonlar ketma-ketligi shunday: 4, 5, 6, __. BoвЂsh joyga qaysi son yoziladi?", options: ["5", "6", "7", "8"], correctAnswer: 2 },

                // рџ§  Mantiqiy testlar (21-25)
                { question: "Sonlar qatorini davom ettiring: 2, 4, 6, __.", options: ["7", "8", "9", "10"], correctAnswer: 1 },
                { question: "Sonlar qatorini davom ettiring: 10, 9, 8, __.", options: ["7", "6", "5", "4"], correctAnswer: 0 },
                { question: "Layloda 3 ta olma bor edi. Ukasi unga yana 2 ta olma berdi. Keyin u 1 ta olmani yedi. Layloda nechta olma qoldi?", options: ["3", "4", "5", "6"], correctAnswer: 1 },
                { question: "Stol ustida 5 ta qalam bor edi. 2 tasi olindi, keyin yana 1 ta qalam qoвЂyildi. Stol ustida nechta qalam boвЂldi?", options: ["2", "3", "4", "5"], correctAnswer: 2 },
                { question: "Anvarda 4 ta shar bor edi. Unga yana 3 ta shar berildi. Keyin 2 ta shari uchib ketdi. Anvarda nechta shar qoldi?", options: ["4", "5", "6", "7"], correctAnswer: 1 }
            ],
            questionCount: 25,
            timeLimit: 20
        },
        2: {
            questions: [
                // рџџў Oson savollar (1-5)
                { question: "вЂњРЁРєРѕР»Р°вЂќ soвЂzining maвЂ™nosi qaysi?", options: ["Maktab", "Kitob", "Qalam", "Uy"], correctAnswer: 0 },
                { question: "Qaysi soвЂz rangni bildiradi?", options: ["РљСЂР°СЃРЅС‹Р№", "РЎС‚РѕР»", "РљРѕС€РєР°", "РњСЏС‡"], correctAnswer: 0 },
                { question: "вЂњРћРґРёРЅвЂќdan keyin qaysi son keladi?", options: ["РўСЂРё", "РџСЏС‚СЊ", "Р”РІР°", "Р§РµС‚С‹СЂРµ"], correctAnswer: 2 },
                { question: "вЂњРљРЅРёРіР°вЂќ soвЂzida nechta boвЂgвЂin bor?", options: ["1", "2", "3", "4"], correctAnswer: 1 },
                { question: "вЂњРЎРїР°СЃРёР±РѕвЂќ soвЂzi nimani bildiradi?", options: ["Salom", "Xayr", "Rahmat", "Kechirasiz\nQiyinroq savollar"], correctAnswer: 2 },

                // рџ”ґ Qiyinroq savollar (6-15)
                { question: "Qaysi qatorda faqat meva nomlari berilgan?", options: ["РЇР±Р»РѕРєРѕ, РіСЂСѓС€Р°, Р±Р°РЅР°РЅ", "РЎС‚РѕР», РѕРєРЅРѕ, РґРІРµСЂСЊ", "РљРѕС€РєР°, СЃРѕР±Р°РєР°, Р»РёСЃР°", "Р СѓС‡РєР°, С‚РµС‚СЂР°РґСЊ, РєРЅРёРіР°"], correctAnswer: 0 },
                { question: "вЂњРЈС‡РµРЅРёРєвЂќ soвЂzining koвЂpligi qaysi?", options: ["РЈС‡РµРЅРёРє", "РЈС‡РµРЅРёС†Р°", "РЈС‡РµРЅРёРєРё", "РЈС‡РёС‚РµР»СЏ"], correctAnswer: 2 },
                { question: "Qaysi soвЂz savolga javob beradi: вЂњРљС‚Рѕ СЌС‚Рѕ?вЂќ", options: ["РЎС‚РѕР»", "Р”РµРІРѕС‡РєР°", "РћРєРЅРѕ", "Р”РµСЂРµРІРѕ"], correctAnswer: 1 },
                { question: "вЂњРњР°Р»СЊС‡РёРє С‡РёС‚Р°РµС‚ РєРЅРёРіСѓ.вЂќ gapida feвЂ™l qaysi?", options: ["РњР°Р»СЊС‡РёРє", "Р§РёС‚Р°РµС‚", "РљРЅРёРіСѓ", "РљРЅРёРіР°"], correctAnswer: 1 },
                { question: "Qaysi soвЂzda urgвЂu ikkinchi boвЂgвЂinga tushadi?", options: ["РњР°МЃРјР°", "РџР°МЃРїР°", "РћРєРЅРѕМЃ", "Р”РѕМЃРј"], correctAnswer: 2 },
                { question: "Qaysi qatorda faqat hayvonlar berilgan?", options: ["Р’РѕР»Рє, Р»РёСЃР°, РјРµРґРІРµРґСЊ", "РЎС‚РѕР», СЃС‚СѓР», С€РєР°С„", "РЎРЅРµРі, РґРѕР¶РґСЊ, РІРµС‚РµСЂ", "Р›РµС‚Рѕ, РѕСЃРµРЅСЊ, Р·РёРјР°"], correctAnswer: 0 },
                { question: "вЂњРЇ ... РІ С€РєРѕР»Рµ.вЂќ gapini toвЂldiring.", options: ["СѓС‡СѓСЃСЊ", "РєРЅРёРіР°", "РєСЂР°СЃРЅС‹Р№", "СЃС‚РѕР»"], correctAnswer: 0 },
                { question: "Qaysi soвЂz erkak jinsiga mansub?", options: ["РњР°РјР°", "РћРєРЅРѕ", "РЎС‚РѕР»", "Р СѓС‡РєР°"], correctAnswer: 2 },
                { question: "вЂњР‘РѕР»СЊС€РѕР№вЂќ soвЂziga maвЂ™nodoshga yaqin soвЂzni toping.", options: ["РћРіСЂРѕРјРЅС‹Р№", "РњР°Р»РµРЅСЊРєРёР№", "РЈР·РєРёР№", "РќРёР·РєРёР№"], correctAnswer: 0 },
                { question: "вЂњРћРЅР°вЂќ olmoshi kimga nisbatan ishlatiladi?", options: ["Qiz bola yoki ayolga", "OвЂgвЂil bolaga", "Bir nechta odamga", "Buyumga faqat erkak jinsida\nChalgвЂituvchi savollar"], correctAnswer: 0 },

                // рџџЎ ChalgвЂituvchi savollar (16-20)
                { question: "Qaysi soвЂzda СЊ belgisi bor?", options: ["Р”РµРЅСЊ", "Р”РѕРј", "РЁР°СЂ", "РљРѕС‚"], correctAnswer: 0 },
                { question: "вЂњРЎРѕР±Р°РєР°вЂќ soвЂzining birinchi harfi qaysi?", options: ["Рћ", "РЎ", "Рђ", "Рљ"], correctAnswer: 1 },
                { question: "Qaysi qatorda faqat unli harflar berilgan?", options: ["Рђ, Рћ, РЈ", "Р‘, Р’, Р“", "Рњ, Рќ, Р›", "Рў, Р , РЎ"], correctAnswer: 0 },
                { question: "вЂњРњС‹вЂќ olmoshi nimani bildiradi?", options: ["Men", "Sen", "Biz", "U"], correctAnswer: 2 },
                { question: "вЂњР—РёРјРѕР№ РёРґС‘С‚ ...вЂќ gapini toвЂldiring.", options: ["СЃРЅРµРі", "РєРЅРёРіР°", "СѓСЂРѕРє", "РґРѕРј"], correctAnswer: 0 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        3: {
            questions: [
                // рџџў Oson savollar (1-5)
                { question: "вЂњР›РёСЃР°вЂќ soвЂzi nimani bildiradi?", options: ["Hayvon", "Mebel", "Fasl", "Kiyim"], correctAnswer: 0 },
                { question: "Qaysi soвЂz feвЂ™l hisoblanadi?", options: ["РљСЂР°СЃРёРІС‹Р№", "Р‘РµР¶Р°С‚СЊ", "РљРЅРёРіР°", "Р›РµСЃ"], correctAnswer: 1 },
                { question: "вЂњРЎРёРЅРёР№вЂќ soвЂzi nimani bildiradi?", options: ["Hayvon", "Rang", "Shahar", "Son"], correctAnswer: 1 },
                { question: "Qaysi soвЂz вЂњkim?вЂќ savoliga javob beradi?", options: ["РЈС‡РёС‚РµР»СЊ", "РћРєРЅРѕ", "РњРѕСЂРµ", "РџРѕР»Рµ"], correctAnswer: 0 },
                { question: "вЂњРџСЏС‚СЊвЂќ bu вЂ” ...", options: ["Rang", "Son", "Predmet", "FeвЂ™l\nQiyinroq savollar"], correctAnswer: 1 },

                // рџ”ґ Qiyinroq savollar (6-15)
                { question: "вЂњР”РµС‚Рё РёРіСЂР°СЋС‚ РІРѕ РґРІРѕСЂРµ.вЂќ gapida ega qaysi?", options: ["РРіСЂР°СЋС‚", "Р’Рѕ РґРІРѕСЂРµ", "Р”РµС‚Рё", "Р”РІРѕСЂРµ"], correctAnswer: 2 },
                { question: "Qaysi soвЂz sifat?", options: ["Р’РµСЃС‘Р»С‹Р№", "РџСЂС‹РіР°С‚СЊ", "РњР°Р»СЊС‡РёРє", "Р‘С‹СЃС‚СЂРѕ"], correctAnswer: 0 },
                { question: "вЂњРРґС‚РёвЂќ feвЂ™lining hozirgi zamon shakli qaysi?", options: ["РРґСѓ", "РЁС‘Р»", "РџРѕР№РґС‘С‚", "РРґС‘РјС‚Рµ"], correctAnswer: 0 },
                { question: "Qaysi qatorda antonimlar berilgan?", options: ["Р‘РѕР»СЊС€РѕР№ вЂ” РјР°Р»РµРЅСЊРєРёР№", "Р”РѕРј вЂ” РѕРєРЅРѕ", "РљРѕС‚ вЂ” РєРѕС€РєР°", "Р СѓС‡РєР° вЂ” РєР°СЂР°РЅРґР°С€"], correctAnswer: 0 },
                { question: "вЂњРќР° СЃС‚РѕР»Рµ Р»РµР¶РёС‚ РєРЅРёРіР°.вЂќ gapida predlog qaysi?", options: ["СЃС‚РѕР»Рµ", "Р»РµР¶РёС‚", "РЅР°", "РєРЅРёРіР°"], correctAnswer: 2 },
                { question: "Qaysi soвЂz koвЂplikda berilgan?", options: ["Р”РµСЂРµРІРѕ", "РЈС‡РµРЅРёРєРё", "РљРѕС€РєР°", "РџР°СЂС‚Р°"], correctAnswer: 1 },
                { question: "вЂњР‘С‹СЃС‚СЂРѕвЂќ soвЂzi qaysi soвЂz turkumiga kiradi?", options: ["Ot", "Sifat", "Ravish", "Olmosh"], correctAnswer: 2 },
                { question: "вЂњРЈ РґРµРІРѕС‡РєРё РєСѓРєР»Р°.вЂќ gapida kimning? soвЂrogвЂiga javob boвЂladigan soвЂz qaysi?", options: ["РґРµРІРѕС‡РєРё", "РєСѓРєР»Р°", "Сѓ", "РґРµРІРѕС‡РєР°"], correctAnswer: 0 },
                { question: "Qaysi gap toвЂgвЂri yozilgan?", options: ["РјР°РјР° С‡РёС‚Р°РµС‚ РєРЅРёРіСѓ.", "РњР°РјР° С‡РёС‚Р°РµС‚ РєРЅРёРіСѓ.", "РјР°РјР° Р§РёС‚Р°РµС‚ РєРЅРёРіСѓ.", "РњР°РјР° С‡РёС‚Р°РµС‚ РљРЅРёРіСѓ."], correctAnswer: 1 },
                { question: "вЂњР“РѕРІРѕСЂРёС‚СЊвЂќ soвЂzining yaqin maвЂ™nolisi qaysi?", options: ["РњРѕР»С‡Р°С‚СЊ", "РЎРєР°Р·Р°С‚СЊ", "РЎРїР°С‚СЊ", "Р›РµР¶Р°С‚СЊ\nChalgвЂituvchi savollar"], correctAnswer: 1 },

                // рџџЎ ChalgвЂituvchi savollar (16-20)
                { question: "Qaysi soвЂzda harakat maвЂ™nosi bor?", options: ["Р‘РµР¶Р°С‚СЊ", "РљСЂР°СЃРЅС‹Р№", "РЎС‚РѕР»", "РЎРЅРµРі"], correctAnswer: 0 },
                { question: "вЂњРўРµС‚СЂР°РґСЊвЂќ soвЂzi qaysi harf bilan tugaydi?", options: ["Р”", "Р¬", "Рў", "Р "], correctAnswer: 1 },
                { question: "Qaysi qatorda faqat olmoshlar berilgan?", options: ["РЇ, С‚С‹, РјС‹", "РћРЅ, СЃС‚РѕР», РєРЅРёРіР°", "РћРЅР°, РєСЂР°СЃРёРІС‹Р№, РјС‹", "РЇ, С€РєРѕР»Р°, РІС‹"], correctAnswer: 0 },
                { question: "вЂњР’С‹СЃРѕРєРёР№вЂќ soвЂzining antonimi qaysi?", options: ["Р”Р»РёРЅРЅС‹Р№", "РЈР·РєРёР№", "РќРёР·РєРёР№", "РљРѕСЂРѕС‚РєРёР№"], correctAnswer: 2 },
                { question: "вЂњРћСЃРµРЅСЊСЋ Р»РёСЃС‚СЊСЏ ...вЂќ gapini toвЂldiring.", options: ["РїР°РґР°СЋС‚", "РїРёС€СѓС‚", "С‡РёС‚Р°СЋС‚", "СЃРёРґСЏС‚"], correctAnswer: 0 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        4: {
            questions: [
                // рџџў Oson savollar (1-5)
                { question: "Qaysi soвЂz ot hisoblanadi?", options: ["РљСЂР°СЃРёРІС‹Р№", "Р‘РµР¶Р°С‚СЊ", "РЈС‡РёС‚РµР»СЊ", "Р‘С‹СЃС‚СЂРѕ"], correctAnswer: 2 },
                { question: "Qaysi soвЂz sifat hisoblanadi?", options: ["РЁРєРѕР»Р°", "Р—РµР»С‘РЅС‹Р№", "РРіСЂР°С‚СЊ", "Р’С‡РµСЂР°"], correctAnswer: 1 },
                { question: "Qaysi soвЂz feвЂ™l hisoblanadi?", options: ["Р›РµС‚Р°С‚СЊ", "РЎРёРЅРёР№", "РџР°СЂС‚Р°", "РњРµРґР»РµРЅРЅРѕ"], correctAnswer: 0 },
                { question: "вЂњРњС‹вЂќ soвЂzi qaysi soвЂz turkumiga kiradi?", options: ["Ot", "FeвЂ™l", "Olmosh", "Sifat"], correctAnswer: 2 },
                { question: "вЂњР’РµСЃРЅР°вЂќ nimani bildiradi?", options: ["Fasl", "Hayvon", "Buyum", "Rang\nQiyinroq savollar"], correctAnswer: 0 },

                // рџ”ґ Qiyinroq savollar (6-15)
                { question: "вЂњРЈС‡РµРЅРёРєРё РЅР°РїРёСЃР°Р»Рё РґРёРєС‚Р°РЅС‚.вЂќ gapida kesim qaysi?", options: ["РЈС‡РµРЅРёРєРё", "РќР°РїРёСЃР°Р»Рё", "Р”РёРєС‚Р°РЅС‚", "РЈС‡РµРЅРёРєРё РЅР°РїРёСЃР°Р»Рё"], correctAnswer: 1 },
                { question: "Qaysi qatorda bir xil oвЂzakli soвЂzlar berilgan?", options: ["Р›РµСЃ, Р»РµСЃРЅРѕР№, Р»РµСЃРЅРёРє", "Р”РѕРј, РѕРєРЅРѕ, РґРІРµСЂСЊ", "РџРёСЃР°С‚СЊ, РєРЅРёРіР°, СЂСѓС‡РєР°", "Р—РёРјР°, Р»РµС‚Рѕ, РѕСЃРµРЅСЊ"], correctAnswer: 0 },
                { question: "вЂњРҐСЂР°Р±СЂС‹Р№вЂќ soвЂzining sinonimi qaysi?", options: ["РЎРјРµР»С‹Р№", "РўСЂСѓСЃР»РёРІС‹Р№", "РњР°Р»РµРЅСЊРєРёР№", "РЎР»Р°Р±С‹Р№"], correctAnswer: 0 },
                { question: "вЂњР”РµС‚Рё С‡РёС‚Р°СЋС‚ РёРЅС‚РµСЂРµСЃРЅСѓСЋ РєРЅРёРіСѓ.вЂќ gapida sifat qaysi?", options: ["Р”РµС‚Рё", "Р§РёС‚Р°СЋС‚", "РРЅС‚РµСЂРµСЃРЅСѓСЋ", "РљРЅРёРіСѓ"], correctAnswer: 2 },
                { question: "Qaysi gapda soвЂroq belgisi qoвЂyiladi?", options: ["РњС‹ РїРѕС€Р»Рё РІ С€РєРѕР»Сѓ", "РљС‚Рѕ СЃРµРіРѕРґРЅСЏ РґРµР¶СѓСЂРЅС‹Р№", "РќР° СѓР»РёС†Рµ РёРґС‘С‚ РґРѕР¶РґСЊ", "РЇ Р»СЋР±Р»СЋ С‡РёС‚Р°С‚СЊ"], correctAnswer: 1 },
                { question: "вЂњРџРѕРґ СЃС‚РѕР»РѕРјвЂќ birikmasida predlog qaysi?", options: ["СЃС‚РѕР»РѕРј", "РїРѕРґ", "СЃС‚РѕР»", "РѕРј"], correctAnswer: 1 },
                { question: "вЂњРЇ РїРёСЃР°Р»вЂќ birikmasi qaysi zamonni bildiradi?", options: ["Hozirgi", "OвЂtgan", "Kelasi", "Buyruq"], correctAnswer: 1 },
                { question: "вЂњРћРЅ Р±СѓРґРµС‚ С‡РёС‚Р°С‚СЊ.вЂќ gapida feвЂ™l qaysi zamonda?", options: ["OвЂtgan", "Hozirgi", "Kelasi", "NomaвЂ™lum"], correctAnswer: 2 },
                { question: "Qaysi soвЂz murakkab gap tarkibida bogвЂlovchi boвЂla oladi?", options: ["Рё", "СЃС‚РѕР»", "Р±РµРіР°С‚СЊ", "РѕРєРЅРѕ"], correctAnswer: 0 },
                { question: "вЂњРњРѕСЂРѕР·вЂќ soвЂziga maвЂ™nodoshga yaqin soвЂzni toping.", options: ["РҐРѕР»РѕРґ", "Р–Р°СЂР°", "РЎРѕР»РЅС†Рµ", "Р”РѕР¶РґСЊ\nChalgвЂituvchi savollar"], correctAnswer: 0 },

                // рџџЎ ChalgвЂituvchi savollar (16-20)
                { question: "вЂњРЎРѕР»РЅС†Рµ СЃРІРµС‚РёС‚ СЏСЂРєРѕ.вЂќ gapida ravish qaysi?", options: ["РЎРѕР»РЅС†Рµ", "РЎРІРµС‚РёС‚", "РЇСЂРєРѕ", "РЎРІРµС‚"], correctAnswer: 2 },
                { question: "Qaysi soвЂz koвЂplikda emas?", options: ["РЈС‡РёС‚РµР»СЏ", "Р”РѕРјР°", "РљРЅРёРіР°", "РћРєРЅР°"], correctAnswer: 2 },
                { question: "вЂњРР· РїСЂСѓРґР°вЂќ birikmasida predlog qaysi?", options: ["РёР·", "РїСЂСѓРґР°", "СЂС‹Р±РєСѓ", "Рё"], correctAnswer: 0 },
                { question: "Qaysi qatorda faqat feвЂ™llar berilgan?", options: ["Р§РёС‚Р°С‚СЊ, РїРёСЃР°С‚СЊ, РіРѕРІРѕСЂРёС‚СЊ", "РљРЅРёРіР°, С‡РёС‚Р°С‚СЊ, Р»РµСЃ", "РљСЂР°СЃРЅС‹Р№, СЃРёРЅРёР№, Р±РµР»С‹Р№", "Р‘С‹СЃС‚СЂРѕ, РјРµРґР»РµРЅРЅРѕ, С‚РёС…Рѕ"], correctAnswer: 0 },
                { question: "вЂњР”РѕР±СЂС‹Р№вЂќ soвЂzining antonimi qaysi?", options: ["РҐРѕСЂРѕС€РёР№", "Р—Р»РѕР№", "РЎРјРµР»С‹Р№", "РЎРёР»СЊРЅС‹Р№"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        5: {
            questions: [
                // рџџў Oson savollar (1-5)
                { question: "Qaysi soвЂz turkumi predmet nomini bildiradi?", options: ["FeвЂ™l", "Ot", "Ravish", "BogвЂlovchi"], correctAnswer: 1 },
                { question: "Qaysi soвЂz harakatni bildiradi?", options: ["РљСЂР°СЃРѕС‚Р°", "РРіСЂР°С‚СЊ", "РЎРјРµР»С‹Р№", "Р‘С‹СЃС‚СЂРѕ"], correctAnswer: 1 },
                { question: "Qaysi soвЂz belgi-xususiyatni bildiradi?", options: ["РЈРјРЅС‹Р№", "Р‘РµР¶Р°С‚СЊ", "РЎС‚РѕР»", "Р’С‡РµСЂР°"], correctAnswer: 0 },
                { question: "Qaysi soвЂz olmosh hisoblanadi?", options: ["РћРЅ", "Р”РѕРј", "РЎРёРЅРёР№", "РРґС‚Рё"], correctAnswer: 0 },
                { question: "Qaysi soвЂz ravish hisoblanadi?", options: ["РўРёС…Рѕ", "РўРёС€РёРЅР°", "РўРёС…РёР№", "РўРёС…РЅСѓС‚СЊ\nQiyinroq savollar"], correctAnswer: 0 },

                // рџ”ґ Qiyinroq savollar (6-15)
                { question: "вЂњР•СЃР»Рё РїРѕР№РґС‘С‚ РґРѕР¶РґСЊ, РјС‹ РѕСЃС‚Р°РЅРµРјСЃСЏ РґРѕРјР°.вЂќ gap turi qaysi?", options: ["Sodda gap", "QoвЂshma gap", "Undov gap", "Atov gap"], correctAnswer: 1 },
                { question: "вЂњРџРµСЂРµРїРёСЃР°С‚СЊвЂќ soвЂzida prefiks qaysi?", options: ["РїРёСЃР°С‚СЊ", "РїРµСЂРµ-", "-Р°С‚СЊ", "-РїРёСЃ-"], correctAnswer: 1 },
                { question: "вЂњР›РµСЃРЅРёРєвЂќ soвЂzida suffiksni toping.", options: ["Р»РµСЃ", "-РЅРёРє", "-РёРє", "-Рє"], correctAnswer: 1 },
                { question: "вЂњРљСЂР°СЃРёРІРµРµвЂќ soвЂzi nimani bildiradi?", options: ["Sifatning oddiy darajasi", "Sifatning qiyosiy darajasi", "FeвЂ™l shakli", "Ravish"], correctAnswer: 1 },
                { question: "вЂњРЇ, С‚С‹, РѕРЅ, РѕРЅР°вЂќ qaysi turkumga kiradi?", options: ["Son", "Olmosh", "Sifat", "FeвЂ™l"], correctAnswer: 1 },
                { question: "вЂњР’РµС‡РµСЂРѕРјвЂќ soвЂzi qaysi savolga javob beradi?", options: ["РљС‚Рѕ?", "Р§С‚Рѕ?", "РљРѕРіРґР°?", "РљР°РєРѕР№?"], correctAnswer: 2 },
                { question: "вЂњР§РёС‚Р°С‚СЊ РєРЅРёРіСѓвЂќ birikmasida bosh soвЂz qaysi?", options: ["Р§РёС‚Р°С‚СЊ", "РљРЅРёРіСѓ", "Ikkalasi teng", "Bosh soвЂz yoвЂq"], correctAnswer: 0 },
                { question: "вЂњР РµР±СЏС‚Р° РїСЂРёС€Р»Рё, Рё СѓСЂРѕРє РЅР°С‡Р°Р»СЃСЏ.вЂќ gapida bogвЂlovchi qaysi?", options: ["РїСЂРёС€Р»Рё", "СѓСЂРѕРє", "Рё", "РЅР°С‡Р°Р»СЃСЏ"], correctAnswer: 2 },
                { question: "вЂњРќРµвЂќ qaysi qatorda alohida yoziladi?", options: ["(РЅРµ)РєСЂР°СЃРёРІС‹Р№ РґРѕРј", "(РЅРµ)Р±РѕР»СЊС€РѕР№ РјСЏС‡", "(РЅРµ)С‡РёС‚Р°Р» РєРЅРёРіСѓ", "(РЅРµ)РІС‹СЃРѕРєРёР№ СЃС‚РѕР»"], correctAnswer: 2 },
                { question: "вЂњРЎРјРµР»РѕСЃС‚СЊвЂќ soвЂzi qaysi soвЂzdan yasalgan?", options: ["РЎРјРµР»С‹Р№", "РЎРјРµР»Рѕ", "РћСЃРјРµР»РµС‚СЊ", "РЎРјРµР»СЊС‡Р°Рє\nChalgвЂituvchi savollar"], correctAnswer: 0 },

                // рџџЎ ChalgвЂituvchi savollar (16-20)
                { question: "Qaysi qatorda faqat xizmatchi soвЂzlar berilgan?", options: ["Р, РІ, РЅР°", "Р”РѕРј, РІ, РЅР°", "Р‘С‹СЃС‚СЂРѕ, Рё, РЅР°", "РЇ, С‚С‹, Рё"], correctAnswer: 0 },
                { question: "вЂњРњС‹ СѓРІРёРґРµР»Рё РєСЂР°СЃРёРІС‹Р№ РіРѕСЂРѕРґ.вЂќ gapida toвЂldiruvchi qaysi?", options: ["РњС‹", "РЈРІРёРґРµР»Рё", "РљСЂР°СЃРёРІС‹Р№", "РіРѕСЂРѕРґ"], correctAnswer: 3 },
                { question: "вЂњРЁРєРѕР»СЊРЅС‹Р№вЂќ soвЂzi qaysi soвЂzdan yasalgan?", options: ["РЁРєРѕР»Р°", "РЁРєРѕР»СЊРЅРёРє", "РЁРєРѕР»СЏСЂ", "РЈС‡С‘Р±Р°"], correctAnswer: 0 },
                { question: "Qaysi gap undov gap hisoblanadi?", options: ["РњС‹ РёРґС‘Рј РІ РїР°СЂРє.", "РљР°Рє РєСЂР°СЃРёРІРѕ РІРѕРєСЂСѓРі!", "РљС‚Рѕ РїСЂРёС€С‘Р»?", "РќР° СѓР»РёС†Рµ СЃРЅРµРі."], correctAnswer: 1 },
                { question: "вЂњРЎРµРІРµСЂвЂќ soвЂzining antonimi qaysi?", options: ["Р—Р°РїР°Рґ", "Р’РѕСЃС‚РѕРє", "Р®Рі", "Р’РІРµСЂС…"], correctAnswer: 2 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        6: {
            questions: [
                // рџџў Oson savollar (1-5)
                { question: "Qaysi soвЂz ot hisoblanadi?", options: ["Р›РµСЃ", "Р—РµР»С‘РЅС‹Р№", "Р‘РµР¶Р°С‚СЊ", "Р‘С‹СЃС‚СЂРѕ"], correctAnswer: 0 },
                { question: "Qaysi soвЂz sifat hisoblanadi?", options: ["РЎРјРµР»С‹Р№", "Р”РѕРј", "РРіСЂР°С‚СЊ", "Р’С‡РµСЂР°"], correctAnswer: 0 },
                { question: "Qaysi soвЂz feвЂ™l hisoblanadi?", options: ["РљРЅРёРіР°", "РџРёСЃР°С‚СЊ", "РЎРёРЅРёР№", "РўРёС…Рѕ"], correctAnswer: 1 },
                { question: "Qaysi soвЂz olmosh hisoblanadi?", options: ["РћРЅ", "РЎС‚РѕР»", "РљСЂР°СЃРёРІС‹Р№", "РЈСЂРѕРє"], correctAnswer: 0 },
                { question: "Qaysi soвЂz ravish hisoblanadi?", options: ["Р‘С‹СЃС‚СЂРѕ", "Р‘С‹СЃС‚СЂС‹Р№", "РЎРєРѕСЂРѕСЃС‚СЊ", "Р‘РµРі\nQiyinroq savollar"], correctAnswer: 0 },

                // рџ”ґ Qiyinroq savollar (6-15)
                { question: "вЂњРџРѕРґРїРёСЃР°С‚СЊвЂќ soвЂzida prefiksni toping.", options: ["-РїРёСЃ-", "РїРѕРґ-", "-Р°С‚СЊ", "РїРёСЃР°С‚СЊ"], correctAnswer: 1 },
                { question: "вЂњР›РµСЃРЅРѕР№вЂќ soвЂzida oвЂzak qaysi?", options: ["Р»РµСЃ", "-РЅРѕР№", "Р»Рµ-", "-РѕР№"], correctAnswer: 0 },
                { question: "вЂњР”РѕР±СЂРѕС‚Р°вЂќ soвЂzida suffiksni toping.", options: ["РґРѕР±СЂ", "-РѕС‚-", "-Р°", "РґРѕ-"], correctAnswer: 1 },
                { question: "Qaysi gapda ega toвЂgвЂri koвЂrsatilgan? вЂњРЈС‡РµРЅРёРєРё РїРёС€СѓС‚ РґРёРєС‚Р°РЅС‚.вЂќ", options: ["РїРёС€СѓС‚", "РґРёРєС‚Р°РЅС‚", "СѓС‡РµРЅРёРєРё", "РїРёС€СѓС‚ РґРёРєС‚Р°РЅС‚"], correctAnswer: 2 },
                { question: "Qaysi gapda kesim toвЂgвЂri koвЂrsatilgan? вЂњРџС‚РёС†С‹ СѓР»РµС‚РµР»Рё РЅР° СЋРі.вЂќ", options: ["РїС‚РёС†С‹", "СѓР»РµС‚РµР»Рё", "СЋРі", "РЅР° СЋРі"], correctAnswer: 1 },
                { question: "вЂњРљСЂР°СЃРёРІС‹Р№вЂќ soвЂzining antonimini toping.", options: ["РџСЂРµРєСЂР°СЃРЅС‹Р№", "РќР°СЂСЏРґРЅС‹Р№", "РќРµРєСЂР°СЃРёРІС‹Р№", "РЎРІРµС‚Р»С‹Р№"], correctAnswer: 2 },
                { question: "вЂњРЎРјРµР»С‹Р№вЂќ soвЂzining sinonimini toping.", options: ["РҐСЂР°Р±СЂС‹Р№", "РўСЂСѓСЃР»РёРІС‹Р№", "РЎР»Р°Р±С‹Р№", "Р“СЂСѓСЃС‚РЅС‹Р№"], correctAnswer: 0 },
                { question: "вЂњРЇ С‡РёС‚Р°СЋ РєРЅРёРіСѓ.вЂќ gapida toвЂldiruvchi qaysi?", options: ["РЇ", "С‡РёС‚Р°СЋ", "РєРЅРёРіСѓ", "С‡РёС‚Р°СЋ РєРЅРёРіСѓ"], correctAnswer: 2 },
                { question: "вЂњРќР° СѓР»РёС†Рµ С…РѕР»РѕРґРЅРѕ, РЅРѕ СЃРѕР»РЅРµС‡РЅРѕ.вЂќ gapida bogвЂlovchini toping.", options: ["РЅР°", "РЅРѕ", "СѓР»РёС†Рµ", "С…РѕР»РѕРґРЅРѕ"], correctAnswer: 1 },
                { question: "вЂњРњС‹ РІРµСЂРЅСѓР»РёСЃСЊ РґРѕРјРѕР№ РІРµС‡РµСЂРѕРј.вЂќ gapida qachon? soвЂrogвЂiga javob boвЂladigan soвЂz qaysi?", options: ["РјС‹", "РІРµСЂРЅСѓР»РёСЃСЊ", "РґРѕРјРѕР№", "РІРµС‡РµСЂРѕРј\nChalgвЂituvchi savollar"], correctAnswer: 3 },

                // рџџЎ ChalgвЂituvchi savollar (16-20)
                { question: "Qaysi soвЂz koвЂplikda berilgan?", options: ["РўРµС‚СЂР°РґСЊ", "РЈС‡РёС‚РµР»СЊ", "Р”РѕРјР°", "РћРєРЅРѕ"], correctAnswer: 2 },
                { question: "вЂњРЎРёР»СЊРЅРµРµвЂќ soвЂzi nimani bildiradi?", options: ["Sifatning oddiy darajasi", "Sifatning orttirma darajasi", "Sifatning qiyosiy darajasi", "FeвЂ™l"], correctAnswer: 2 },
                { question: "вЂњР’ Р»РµСЃСѓвЂќ birikmasida predlog qaysi?", options: ["РІ", "Р»РµСЃСѓ", "Р»РµСЃ", "Сѓ"], correctAnswer: 0 },
                { question: "Qaysi qatorda faqat undov gap berilgan?", options: ["РљР°Рє РєСЂР°СЃРёРІРѕ!", "РњС‹ РїСЂРёС€Р»Рё РґРѕРјРѕР№.", "РљС‚Рѕ СЌС‚Рѕ?", "РќР° СѓР»РёС†Рµ РґРѕР¶РґСЊ."], correctAnswer: 0 },
                { question: "вЂњР§С‚РµРЅРёРµвЂќ soвЂzi qaysi soвЂzdan yasalgan?", options: ["Р§С‚РёС‚СЊ", "Р§РёС‚Р°С‚СЊ", "Р§С‚РµС†", "РџСЂРѕС‡РёС‚Р°С‚СЊ"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        7: {
            questions: [
                // рџџў Oson savollar (1-5)
                { question: "Qaysi soвЂz turkumi harakatni bildiradi?", options: ["Ot", "Sifat", "FeвЂ™l", "Olmosh"], correctAnswer: 2 },
                { question: "Qaysi soвЂz sifatdosh emas, oddiy sifat?", options: ["Р§РёС‚Р°СЋС‰РёР№", "РљСЂР°СЃРёРІС‹Р№", "РќР°РїРёСЃР°РЅРЅС‹Р№", "РЎРґРµР»Р°РЅРЅС‹Р№"], correctAnswer: 1 },
                { question: "Qaysi soвЂz ravish hisoblanadi?", options: ["Р’С‹СЃРѕС‚Р°", "Р’С‹СЃРѕРєРёР№", "Р’С‹СЃРѕРєРѕ", "РџРѕРІС‹СЃРёС‚СЊ"], correctAnswer: 2 },
                { question: "Qaysi gap soвЂroq gap?", options: ["РњС‹ С‡РёС‚Р°РµРј РєРЅРёРіСѓ.", "Р“РґРµ РЅР°С…РѕРґРёС‚СЃСЏ С€РєРѕР»Р°?", "РљР°РєРѕР№ С‡СѓРґРµСЃРЅС‹Р№ РґРµРЅСЊ!", "РЎРЅРµРі РёРґС‘С‚."], correctAnswer: 1 },
                { question: "Qaysi bogвЂlovchi zidlov maвЂ™nosini bildiradi?", options: ["Рё", "РёР»Рё", "РЅРѕ", "С‡С‚РѕР±С‹\nQiyinroq savollar"], correctAnswer: 2 },

                // рџ”ґ Qiyinroq savollar (6-15)
                { question: "вЂњРџСЂРѕС‡РёС‚Р°РЅРЅР°СЏ РєРЅРёРіР°вЂќ birikmasida вЂњРїСЂРѕС‡РёС‚Р°РЅРЅР°СЏвЂќ qaysi turkumga kiradi?", options: ["Ravishdosh", "Sifatdosh", "FeвЂ™l", "Ravish"], correctAnswer: 1 },
                { question: "вЂњРЈР»С‹Р±Р°СЏСЃСЊ, РґРµРІРѕС‡РєР° РІРѕС€Р»Р° РІ РєР»Р°СЃСЃ.вЂќ gapida ravishdosh qaysi?", options: ["РґРµРІРѕС‡РєР°", "РІРѕС€Р»Р°", "СѓР»С‹Р±Р°СЏСЃСЊ", "РІ РєР»Р°СЃСЃ"], correctAnswer: 2 },
                { question: "вЂњРћРЅ СЃРєР°Р·Р°Р», С‡С‚Рѕ РїСЂРёРґС‘С‚ Р·Р°РІС‚СЂР°.вЂќ gap turi qaysi?", options: ["Sodda gap", "QoвЂshma gap", "Atov gap", "Undov gap"], correctAnswer: 1 },
                { question: "вЂњРќРµРІС‹СЃРѕРєРёР№вЂќ soвЂzi qaysi holatda yozilgan?", options: ["вЂњРЅРµвЂќ alohida yozilgan", "вЂњРЅРµвЂќ qoвЂshib yozilgan", "Defis bilan yozilgan", "Qavs ichida yozilgan"], correctAnswer: 1 },
                { question: "вЂњРџРѕС‚РѕРјСѓ С‡С‚РѕвЂќ qaysi turkumga kiradi?", options: ["Yuklama", "Predlog", "BogвЂlovchi", "Undov soвЂz"], correctAnswer: 2 },
                { question: "вЂњР•СЃР»Рё Р±СѓРґРµС‚ С‚РµРїР»Рѕ, РјС‹ РїРѕР№РґС‘Рј РіСѓР»СЏС‚СЊ.вЂќ gapida ergash gap qaysi?", options: ["РјС‹ РїРѕР№РґС‘Рј РіСѓР»СЏС‚СЊ", "РµСЃР»Рё Р±СѓРґРµС‚ С‚РµРїР»Рѕ", "РјС‹ РїРѕР№РґС‘Рј", "Р±СѓРґРµС‚ С‚РµРїР»Рѕ РјС‹"], correctAnswer: 1 },
                { question: "вЂњРћРЅ РіРѕРІРѕСЂРёР» СѓРІРµСЂРµРЅРЅРѕ.вЂќ gapida ravish qaysi?", options: ["РѕРЅ", "РіРѕРІРѕСЂРёР»", "СѓРІРµСЂРµРЅРЅРѕ", "РіРѕРІРѕСЂРёР» СѓРІРµСЂРµРЅРЅРѕ"], correctAnswer: 2 },
                { question: "вЂњР—РёРјРЅРёР№вЂќ soвЂzi qaysi soвЂzdan yasalgan?", options: ["Р—РёРјР°", "Р—РёРјРѕРІР°С‚СЊ", "Р—РёРјРЅРёР№ СЃР°Рґ", "РћР·РёРјСЊ"], correctAnswer: 0 },
                { question: "вЂњРџСЂРµРєСЂР°СЃРЅС‹Р№вЂќ soвЂzining sinonimini toping.", options: ["РЈР¶Р°СЃРЅС‹Р№", "РљСЂР°СЃРёРІС‹Р№", "РҐРѕР»РѕРґРЅС‹Р№", "РќРёР·РєРёР№"], correctAnswer: 1 },
                { question: "вЂњРћРєРЅРѕ Р±С‹Р»Рѕ РѕС‚РєСЂС‹С‚Рѕ РІРµС‚СЂРѕРј.вЂќ gapida вЂњРІРµС‚СЂРѕРјвЂќ qaysi boвЂlak?", options: ["Ega", "Kesim", "Hol", "ToвЂldiruvchi\nChalgвЂituvchi savollar"], correctAnswer: 3 },

                // рџџЎ ChalgвЂituvchi savollar (16-20)
                { question: "Qaysi soвЂzda qoвЂshimcha maвЂ™no beruvchi prefiks bor?", options: ["Р”РѕРј", "РҐРѕРґ", "РџСЂРёС…РѕРґ", "РџРѕР»Рµ"], correctAnswer: 2 },
                { question: "вЂњР§РёС‚Р°СЏ РєРЅРёРіСѓ, РѕРЅ РґРµР»Р°Р» Р·Р°РјРµС‚РєРё.вЂќ gapida nechta grammatik asos bor?", options: ["1 ta", "2 ta", "3 ta", "YoвЂq"], correctAnswer: 0 },
                { question: "вЂњРўСѓРјР°РЅ СЂР°СЃСЃРµСЏР»СЃСЏ, Рё СЃС‚Р°Р»Рѕ СЏСЃРЅРѕ.вЂќ gapida bogвЂlovchi qaysi?", options: ["СЃС‚Р°Р»Рѕ", "СЏСЃРЅРѕ", "Рё", "С‚СѓРјР°РЅ"], correctAnswer: 2 },
                { question: "вЂњРќРµРіСЂРѕРјРєРѕвЂќ soвЂzi qaysi soвЂz turkumiga kiradi?", options: ["Ot", "Sifat", "Ravish", "FeвЂ™l"], correctAnswer: 2 },
                { question: "вЂњРљРѕС‚РѕСЂС‹Р№вЂќ soвЂzi koвЂpincha qaysi vazifada ishlatiladi?", options: ["SoвЂroq yoki bogвЂlovchi soвЂz", "Predlog", "Undov", "FeвЂ™l"], correctAnswer: 0 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        8: {
            questions: [
                // рџџў Oson savollar (1-5)
                { question: "Qaysi gap qoвЂshma gap hisoblanadi?", options: ["РЎРѕР»РЅС†Рµ СЃРІРµС‚РёС‚, Рё РїС‚РёС†С‹ РїРѕСЋС‚.", "РЇ РІРѕС€С‘Р» РІ РєР»Р°СЃСЃ Рё СЃРµР» Р·Р° РїР°СЂС‚Сѓ.", "Р’РµС‡РµСЂ.", "РўРёС€РёРЅР°."], correctAnswer: 0 },
                { question: "Qaysi soвЂz ravishdosh hisoblanadi?", options: ["Р”РµР»Р°СЏ", "РЎРґРµР»Р°РЅРЅС‹Р№", "Р”РµР»РѕРІРѕР№", "Р”РµР»Рѕ"], correctAnswer: 0 },
                { question: "Qaysi soвЂz sifatdosh hisoblanadi?", options: ["РРґСЏ", "Р§РёС‚Р°РІС€РёР№", "Р‘С‹СЃС‚СЂРѕ", "Р‘РµРі"], correctAnswer: 1 },
                { question: "Qaysi qatorda faqat predloglar berilgan?", options: ["Рё, РЅРѕ, Р°", "РІ, РЅР°, РїРѕРґ", "РЅРµ, РЅРё, Р¶Рµ", "РѕР№, Р°С…, СѓРІС‹"], correctAnswer: 1 },
                { question: "Qaysi gap undov gap hisoblanadi?", options: ["РљС‚Рѕ РїСЂРёС€С‘Р»?", "РњС‹ Р±С‹Р»Рё РґРѕРјР°.", "РљР°Рє РїСЂРµРєСЂР°СЃРµРЅ СЌС‚РѕС‚ РјРёСЂ!", "РќР°СЃС‚СѓРїРёР»Р° РѕСЃРµРЅСЊ.\nQiyinroq savollar"], correctAnswer: 2 },

                // рџ”ґ Qiyinroq savollar (6-15)
                { question: "вЂњРљРѕРіРґР° РЅР°С‡Р°Р»СЃСЏ РґРѕР¶РґСЊ, РјС‹ Р·Р°С€Р»Рё РІ РґРѕРј.вЂќ gapida ergash gap qaysi?", options: ["РјС‹ Р·Р°С€Р»Рё РІ РґРѕРј", "РєРѕРіРґР° РЅР°С‡Р°Р»СЃСЏ РґРѕР¶РґСЊ", "РјС‹ Р·Р°С€Р»Рё", "РЅР°С‡Р°Р»СЃСЏ РґРѕР¶РґСЊ РјС‹"], correctAnswer: 1 },
                { question: "вЂњРќРµСЃРјРѕС‚СЂСЏ РЅР° РґРѕР¶РґСЊ, РјР°С‚С‡ СЃРѕСЃС‚РѕСЏР»СЃСЏ.вЂќ birikmasidagi вЂњРЅРµСЃРјРѕС‚СЂСЏ РЅР°вЂќ nimaga kiradi?", options: ["BogвЂlovchi", "Murakkab predlog", "Yuklama", "Undov"], correctAnswer: 1 },
                { question: "вЂњР§РµР»РѕРІРµРє, РєРѕС‚РѕСЂС‹Р№ СЃС‚РѕРёС‚ Сѓ РѕРєРЅР°, РјРѕР№ Р±СЂР°С‚.вЂќ gapida вЂњРєРѕС‚РѕСЂС‹Р№ СЃС‚РѕРёС‚ Сѓ РѕРєРЅР°вЂќ qaysi qism?", options: ["Ega", "Aniqlovchi ergash gap", "Kesim", "Ravish holi"], correctAnswer: 1 },
                { question: "вЂњРќРµ Р±С‹Р» РіРѕС‚РѕРІвЂќ birikmasida вЂњРЅРµвЂќ qanday yoziladi?", options: ["QoвЂshib", "Ajratib", "Defis bilan", "Ikkalasi ham mumkin emas"], correctAnswer: 1 },
                { question: "вЂњРћРЅ РЅРµ С‚РѕР»СЊРєРѕ С‡РёС‚Р°Р», РЅРѕ Рё Р·Р°РїРёСЃС‹РІР°Р».вЂќ gapida qanday bogвЂlovchi konstruktsiya ishlatilgan?", options: ["Yakka bogвЂlovchi", "Takror bogвЂlovchi", "Juft bogвЂlovchi", "BogвЂlovchisiz"], correctAnswer: 2 },
                { question: "вЂњРџСЂРёРµС…Р°РІ РІ РіРѕСЂРѕРґ, С‚СѓСЂРёСЃС‚С‹ СЃСЂР°Р·Сѓ РїРѕС€Р»Рё РІ РјСѓР·РµР№.вЂќ gapida ravishdosh birikmani toping.", options: ["С‚СѓСЂРёСЃС‚С‹ СЃСЂР°Р·Сѓ", "РїРѕС€Р»Рё РІ РјСѓР·РµР№", "РїСЂРёРµС…Р°РІ РІ РіРѕСЂРѕРґ", "СЃСЂР°Р·Сѓ РїРѕС€Р»Рё"], correctAnswer: 2 },
                { question: "вЂњРЎРєР°Р·Р°РЅРЅРѕРµ СЃР»РѕРІРѕ РЅРµ РІРµСЂРЅС‘С€СЊ.вЂќ gapida вЂњСЃРєР°Р·Р°РЅРЅРѕРµвЂќ qaysi turkum?", options: ["Ravishdosh", "Sifatdosh", "Ravish", "FeвЂ™l"], correctAnswer: 1 },
                { question: "вЂњР•СЃР»Рё Р±С‹ СЏ Р·РЅР°Р», СЏ Р±С‹ РїСЂРёС€С‘Р» СЂР°РЅСЊС€Рµ.вЂќ gapida qanday maвЂ™no ifodalangan?", options: ["Shart", "Payt", "Sabab", "Zidlov"], correctAnswer: 0 },
                { question: "вЂњР—Р°СЃС‹РїР°РЅРЅС‹Р№ СЃРЅРµРіРѕРј РґРІРѕСЂвЂќ birikmasida вЂњСЃРЅРµРіРѕРјвЂќ qaysi soвЂroqqa javob boвЂladi?", options: ["РєС‚Рѕ?", "С‡С‚Рѕ?", "С‡РµРј?", "РіРґРµ?"], correctAnswer: 2 },
                { question: "вЂњРҐРѕС‚СЏ Р±С‹Р»Рѕ РїРѕР·РґРЅРѕ, РґРµС‚Рё РЅРµ СЃРїР°Р»Рё.вЂќ gapidagi bogвЂlovchining maвЂ™nosi qaysi?", options: ["Sabab", "Shart", "ToвЂsiqsizlik", "Maqsad\nChalgвЂituvchi savollar"], correctAnswer: 2 },

                // рџџЎ ChalgвЂituvchi savollar (16-20)
                { question: "Qaysi qatorda yuklamalar berilgan?", options: ["РЅРµ, РЅРё, Р¶Рµ", "РІ, СЃ, Сѓ", "Рё, Р°, РЅРѕ", "Р°С…, СѓРІС‹, РѕР№"], correctAnswer: 0 },
                { question: "вЂњРџР°РґР°СЋС‰РёР№ Р»РёСЃС‚вЂќ birikmasida вЂњРїР°РґР°СЋС‰РёР№вЂќ qanday sifatdosh?", options: ["OвЂtgan zamon majhul", "Hozirgi zamon faol", "OвЂtgan zamon faol", "Hozirgi zamon majhul"], correctAnswer: 1 },
                { question: "вЂњР”РѕРј Р±С‹Р» РїРѕСЃС‚СЂРѕРµРЅ СЂР°Р±РѕС‡РёРјРё.вЂќ gapida вЂњСЂР°Р±РѕС‡РёРјРёвЂќ qaysi kelishikda kelgan?", options: ["Bosh kelishik", "Qaratqich kelishigi", "Tushum kelishigi", "Vositali kelishik"], correctAnswer: 3 },
                { question: "вЂњРЇ Р·РЅР°СЋ, С‡С‚Рѕ РѕРЅ РїСЂР°РІ.вЂќ gapida bosh gap qaysi?", options: ["С‡С‚Рѕ РѕРЅ РїСЂР°РІ", "СЏ Р·РЅР°СЋ", "РѕРЅ РїСЂР°РІ", "Р·РЅР°СЋ, С‡С‚Рѕ"], correctAnswer: 1 },
                { question: "вЂњР’СЃР»РµРґСЃС‚РІРёРµ СЃРЅРµРіРѕРїР°РґР° РґРѕСЂРѕРіР° Р±С‹Р»Р° Р·Р°РєСЂС‹С‚Р°.вЂќ gapida вЂњРІСЃР»РµРґСЃС‚РІРёРµвЂќ nimaga kiradi?", options: ["Ravish", "BogвЂlovchi", "Hosila predlog", "Yuklama"], correctAnswer: 2 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        9: {
            questions: [
                // рџџў Oson savollar (1-5)
                { question: "Qaysi gap ergashgan qoвЂshma gap hisoblanadi?", options: ["РЇ РІРѕС€С‘Р» Рё СЃРµР».", "РљРѕРіРґР° СЃС‚РµРјРЅРµР»Рѕ, РјС‹ РІРµСЂРЅСѓР»РёСЃСЊ РґРѕРјРѕР№.", "РќР° СѓР»РёС†Рµ РґРѕР¶РґСЊ.", "РќР°СЃС‚СѓРїРёР»Р° РЅРѕС‡СЊ."], correctAnswer: 1 },
                { question: "Qaysi soвЂz birikmasi ravishdoshli birikma hisoblanadi?", options: ["Р§РёС‚Р°СЋС‰РёР№ РєРЅРёРіСѓ", "РџСЂРѕС‡РёС‚Р°РЅРЅР°СЏ РєРЅРёРіР°", "Р§РёС‚Р°СЏ РєРЅРёРіСѓ", "РљРЅРёРіР° РїСЂРѕС‡РёС‚Р°РЅР°"], correctAnswer: 2 },
                { question: "Qaysi vosita koвЂchirma gapni ifodalashda ishlatiladi?", options: ["Ikki nuqta va tirnoq", "Faqat vergul", "Faqat nuqta", "Faqat soвЂroq belgisi"], correctAnswer: 0 },
                { question: "Qaysi qatorda kirish soвЂz bor?", options: ["Рљ СЃС‡Р°СЃС‚СЊСЋ, РїРѕРµР·Рґ РїСЂРёС€С‘Р» РІРѕРІСЂРµРјСЏ.", "РџРѕРµР·Рґ РїСЂРёС€С‘Р» РІРѕРІСЂРµРјСЏ.", "РњС‹ Р¶РґР°Р»Рё РїРѕРµР·Рґ.", "РџРѕРµР·Рґ СѓРµС…Р°Р» Р±С‹СЃС‚СЂРѕ."], correctAnswer: 0 },
                { question: "Qaysi gapda umumlashtiruvchi soвЂz bor?", options: ["РќР° СЃС‚РѕР»Рµ Р»РµР¶Р°Р»Рё РєРЅРёРіРё, С‚РµС‚СЂР°РґРё, СЂСѓС‡РєРё вЂ” РІСЃС‘ Р±С‹Р»Рѕ РіРѕС‚РѕРІРѕ Рє СѓСЂРѕРєСѓ.", "РњС‹ СЃРёРґРµР»Рё РґРѕРјР°.", "РќР°СЃС‚СѓРїРёР»Р° РІРµСЃРЅР°.", "РћРЅ Р±С‹СЃС‚СЂРѕ РѕС‚РІРµС‚РёР».\nQiyinroq savollar"], correctAnswer: 0 },

                // рџ”ґ Qiyinroq savollar (6-15)
                { question: "вЂњРЇ СѓРІРµСЂРµРЅ, С‡С‚Рѕ РѕРЅ РїСЂРёРґС‘С‚.вЂќ gapida ergash gapning turi qaysi?", options: ["Aniqlovchi", "ToвЂldiruvchi", "Payt", "Shart"], correctAnswer: 1 },
                { question: "вЂњР”РѕРј, РєРѕС‚РѕСЂС‹Р№ СЃС‚РѕРёС‚ РЅР° С…РѕР»РјРµ, РІРёРґРµРЅ РёР·РґР°Р»РµРєР°.вЂќ gapida ergash gap turi qaysi?", options: ["Aniqlovchi", "Sabab", "Maqsad", "Shart"], correctAnswer: 0 },
                { question: "вЂњР•СЃР»Рё Р±С‹ РѕРЅ РїРѕР·РІРѕРЅРёР», РјС‹ Р±С‹ РІСЃС‚СЂРµС‚РёР»Рё РµРіРѕ.вЂќ gapidagi ergash gap turi qaysi?", options: ["Sabab", "Shart", "Payt", "Maqsad"], correctAnswer: 1 },
                { question: "вЂњРћРЅ СЃРєР°Р·Р°Р»: В«РЇ РїСЂРёРґСѓ Р·Р°РІС‚СЂР°В».вЂќ gapida qanday sintaktik hodisa bor?", options: ["OвЂzlashtirma gap", "KoвЂchirma gap", "Undalma", "Kirish soвЂz"], correctAnswer: 1 },
                { question: "вЂњРџРѕ СЃР»РѕРІР°Рј СѓС‡РёС‚РµР»СЏ, СЂР°Р±РѕС‚Р° Р±С‹Р»Р° РІС‹РїРѕР»РЅРµРЅР° С…РѕСЂРѕС€Рѕ.вЂќ gapida вЂњРїРѕ СЃР»РѕРІР°Рј СѓС‡РёС‚РµР»СЏвЂќ nimaga kiradi?", options: ["Kirish birikma", "Ega", "Kesim", "Undalma"], correctAnswer: 0 },
                { question: "вЂњР”РµСЂРµРІСЊСЏ, РїРѕРєСЂС‹С‚С‹Рµ РёРЅРµРµРј, СЃРІРµСЂРєР°Р»Рё РЅР° СЃРѕР»РЅС†Рµ.вЂќ gapida ajratilgan boвЂlak qaysi?", options: ["СЃРІРµСЂРєР°Р»Рё РЅР° СЃРѕР»РЅС†Рµ", "РґРµСЂРµРІСЊСЏ", "РїРѕРєСЂС‹С‚С‹Рµ РёРЅРµРµРј", "РЅР° СЃРѕР»РЅС†Рµ"], correctAnswer: 2 },
                { question: "вЂњРћРЅ, РєР°Р¶РµС‚СЃСЏ, СѓР¶Рµ СѓС€С‘Р».вЂќ gapida vergullar nima sababdan qoвЂyilgan?", options: ["Undalma uchun", "Kirish soвЂz uchun", "Uyushiq boвЂlak uchun", "Ergash gap uchun"], correctAnswer: 1 },
                { question: "вЂњРќРµ Р·РЅР°СЏ РґРѕСЂРѕРіРё, РјС‹ РІСЃС‘ Р¶Рµ РЅР°С€Р»Рё РґРµСЂРµРІРЅСЋ.вЂќ gapida qanday hol bor?", options: ["Ravishdoshli hol", "Aniqlovchi", "ToвЂldiruvchi", "Ega"], correctAnswer: 0 },
                { question: "вЂњР’СЃРµ Р±С‹Р»Рё РіРѕС‚РѕРІС‹: Рё СѓС‡РµРЅРёРєРё, Рё СѓС‡РёС‚РµР»СЏ, Рё СЂРѕРґРёС‚РµР»Рё.вЂќ gapida ikki nuqta nima uchun qoвЂyilgan?", options: ["KoвЂchirma gapdan oldin", "Umumlashtiruvchi soвЂzdan keyin uyushiq boвЂlaklar kelgani uchun", "Ergash gapdan oldin", "Undovdan keyin"], correctAnswer: 1 },
                { question: "вЂњР§РµРј Р±С‹СЃС‚СЂРµРµ РјС‹ С€Р»Рё, С‚РµРј СЂР°РЅСЊС€Рµ РїСЂРёС…РѕРґРёР»Рё.вЂќ gapida qanday bogвЂlanish bor?", options: ["Sabab-oqibat", "Qiyosiy munosabat", "Payt munosabati", "Zidlov munosabati\nChalgвЂituvchi savollar"], correctAnswer: 1 },

                // рџџЎ ChalgвЂituvchi savollar (16-20)
                { question: "Qaysi gapda undalma bor?", options: ["Р”СЂСѓР·СЊСЏ, РґР°РІР°Р№С‚Рµ РЅР°С‡РЅС‘Рј СѓСЂРѕРє.", "Р”СЂСѓР·СЊСЏ РїСЂРёС€Р»Рё РІРѕРІСЂРµРјСЏ.", "РњС‹ РїРѕР·РІР°Р»Рё РґСЂСѓР·РµР№.", "РЎ РґСЂСѓР·СЊСЏРјРё Р±С‹Р»Рѕ РІРµСЃРµР»Рѕ."], correctAnswer: 0 },
                { question: "вЂњРћРЅ РѕС‚РІРµС‚РёР», С‡С‚Рѕ РЅРµ СЃРјРѕР¶РµС‚ РїСЂРёР№С‚Рё.вЂќ gapida вЂњС‡С‚Рѕ РЅРµ СЃРјРѕР¶РµС‚ РїСЂРёР№С‚РёвЂќ qaysi gap boвЂlagi vazifasida?", options: ["Hol", "Kesim", "ToвЂldiruvchi", "Aniqlovchi"], correctAnswer: 2 },
                { question: "вЂњРљРЅРёРіР°, Р»РµР¶Р°С‰Р°СЏ РЅР° СЃС‚РѕР»Рµ, РїСЂРёРЅР°РґР»РµР¶РёС‚ РјРЅРµ.вЂќ gapida vergullar nima uchun ishlatilgan?", options: ["Kirish soвЂz uchun", "Ajratilgan aniqlovchi uchun", "Undalma uchun", "Uyushiq boвЂlak uchun"], correctAnswer: 1 },
                { question: "вЂњР’Рѕ-РїРµСЂРІС‹С…, РЅСѓР¶РЅРѕ РІС‹СЃР»СѓС€Р°С‚СЊ РІСЃРµС….вЂќ gapida вЂњРІРѕ-РїРµСЂРІС‹С…вЂќ nimaga kiradi?", options: ["Kirish soвЂz", "Ravish", "Predlogli birikma", "ToвЂldiruvchi"], correctAnswer: 0 },
                { question: "вЂњРЎРѕР»РЅС†Рµ СЃРµР»Рѕ вЂ” РЅР°С‡Р°Р»СЃСЏ С…РѕР»РѕРґРЅС‹Р№ РІРµС‡РµСЂ.вЂќ gapida tire nima vazifada ishlatilgan?", options: ["Uyushiq boвЂlakni ajratish uchun", "Sabab-oqibat yoki tez almashinuvchi voqealarni koвЂrsatish uchun", "Undalmani ajratish uchun", "KoвЂchirma gap uchun"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        10: {
            questions: [
                // рџџў Oson savollar (1-5)
                { question: "Qaysi gap ergashgan qoвЂshma gap hisoblanadi?", options: ["РЇ РІРѕС€С‘Р» РІ РєР»Р°СЃСЃ Рё СЃРµР».", "РљРѕРіРґР° РЅР°С‡Р°Р»СЃСЏ СѓСЂРѕРє, РІСЃРµ Р·Р°РјРѕР»С‡Р°Р»Рё.", "РќР° СѓР»РёС†Рµ РґРѕР¶РґСЊ.", "Р”РµСЂРµРІСЊСЏ С€СѓРјСЏС‚."], correctAnswer: 1 },
                { question: "Qaysi soвЂz ravishdosh hisoblanadi?", options: ["РРґСЏ", "РРґСѓС‰РёР№", "РҐРѕРґСЊР±Р°", "РҐРѕРґРёС‚СЊ"], correctAnswer: 0 },
                { question: "Qaysi soвЂz sifatdosh hisoblanadi?", options: ["Р§РёС‚Р°СЏ", "РџСЂРѕС‡РёС‚Р°РІ", "Р§РёС‚Р°СЋС‰РёР№", "Р§С‚РµРЅРёРµ"], correctAnswer: 2 },
                { question: "Qaysi qatorda kirish soвЂz qatnashgan?", options: ["Рљ СЃРѕР¶Р°Р»РµРЅРёСЋ, РїРѕРµР·Рґ РѕРїРѕР·РґР°Р».", "РџРѕРµР·Рґ РѕРїРѕР·РґР°Р» РЅР° С‡Р°СЃ.", "РњС‹ Р¶РґР°Р»Рё РїРѕРµР·Рґ.", "РћРЅ РїСЂРёС€С‘Р» РїРѕР·РґРЅРѕ."], correctAnswer: 0 },
                { question: "Qaysi gapda undalma bor?", options: ["Р”СЂСѓР·СЊСЏ, РґР°РІР°Р№С‚Рµ РѕР±СЃСѓРґРёРј СЌС‚Рѕ.", "Р”СЂСѓР·СЊСЏ РїСЂРёС€Р»Рё РІРѕРІСЂРµРјСЏ.", "РЇ РІСЃС‚СЂРµС‚РёР» РґСЂСѓР·РµР№.", "РњС‹ РіРѕРІРѕСЂРёР»Рё Рѕ РґСЂСѓР·СЊСЏС….\nQiyinroq savollar"], correctAnswer: 0 },

                // рџ”ґ Qiyinroq savollar (6-15)
                { question: "вЂњРЇ Р·РЅР°СЋ, С‡С‚Рѕ СЌРєР·Р°РјРµРЅ Р±СѓРґРµС‚ С‚СЂСѓРґРЅС‹Рј.вЂќ gapida ergash gapning turi qaysi?", options: ["Aniqlovchi", "ToвЂldiruvchi", "Payt", "Maqsad"], correctAnswer: 1 },
                { question: "вЂњР”РѕРј, РєРѕС‚РѕСЂС‹Р№ РїРѕСЃС‚СЂРѕРёР»Рё РЅРµРґР°РІРЅРѕ, СѓР¶Рµ Р·Р°СЃРµР»С‘РЅ.вЂќ gapida ergash gap qaysi turga kiradi?", options: ["Aniqlovchi", "Sabab", "Shart", "Natija"], correctAnswer: 0 },
                { question: "вЂњР•СЃР»Рё Р±С‹ Сѓ РјРµРЅСЏ Р±С‹Р»Рѕ РІСЂРµРјСЏ, СЏ Р±С‹ РїСЂРѕС‡РёС‚Р°Р» СЌС‚Сѓ РєРЅРёРіСѓ.вЂќ gapida qanday maвЂ™no ifodalangan?", options: ["Sabab", "Payt", "Shart", "Maqsad"], correctAnswer: 2 },
                { question: "вЂњРћРЅ СЃРєР°Р·Р°Р», С‡С‚Рѕ РІРµСЂРЅС‘С‚СЃСЏ РІРµС‡РµСЂРѕРј.вЂќ gapida вЂњС‡С‚Рѕ РІРµСЂРЅС‘С‚СЃСЏ РІРµС‡РµСЂРѕРјвЂќ qaysi vazifani bajaradi?", options: ["Aniqlovchi", "ToвЂldiruvchi", "Hol", "Ega"], correctAnswer: 1 },
                { question: "вЂњРќРµСЃРјРѕС‚СЂСЏ РЅР° СѓСЃС‚Р°Р»РѕСЃС‚СЊ, СЃРїРѕСЂС‚СЃРјРµРЅ РїСЂРѕРґРѕР»Р¶Р°Р» С‚СЂРµРЅРёСЂРѕРІРєСѓ.вЂќ gapidagi вЂњРЅРµСЃРјРѕС‚СЂСЏ РЅР°вЂќ nimaga kiradi?", options: ["BogвЂlovchi", "Murakkab predlog", "Yuklama", "Ravish"], correctAnswer: 1 },
                { question: "вЂњР§РµР»РѕРІРµРє, С‡РёС‚Р°СЋС‰РёР№ РєРЅРёРіСѓ Сѓ РѕРєРЅР°, РјРѕР№ Р±СЂР°С‚.вЂќ gapida ajratilgan boвЂlak qaysi?", options: ["РјРѕР№ Р±СЂР°С‚", "С‡РµР»РѕРІРµРє", "С‡РёС‚Р°СЋС‰РёР№ РєРЅРёРіСѓ Сѓ РѕРєРЅР°", "Сѓ РѕРєРЅР°"], correctAnswer: 2 },
                { question: "вЂњР’Рѕ-РїРµСЂРІС‹С…, РЅСѓР¶РЅРѕ РІРЅРёРјР°С‚РµР»СЊРЅРѕ РїСЂРѕС‡РёС‚Р°С‚СЊ С‚РµРєСЃС‚.вЂќ gapida вЂњРІРѕ-РїРµСЂРІС‹С…вЂќ nimaga kiradi?", options: ["Kirish soвЂz", "Ravish", "Undalma", "ToвЂldiruvchi"], correctAnswer: 0 },
                { question: "вЂњРЈСЃР»С‹С€Р°РІ РЅРѕРІРѕСЃС‚СЊ, РѕРЅ СЃСЂР°Р·Сѓ РїРѕР·РІРѕРЅРёР» РґСЂСѓРіСѓ.вЂќ gapida ravishdosh birikma qaysi?", options: ["РѕРЅ СЃСЂР°Р·Сѓ", "РїРѕР·РІРѕРЅРёР» РґСЂСѓРіСѓ", "СѓСЃР»С‹С€Р°РІ РЅРѕРІРѕСЃС‚СЊ", "СЃСЂР°Р·Сѓ РїРѕР·РІРѕРЅРёР»"], correctAnswer: 2 },
                { question: "вЂњРљР°Рє С‚РѕР»СЊРєРѕ РїСЂРѕР·РІРµРЅРµР» Р·РІРѕРЅРѕРє, СѓС‡РµРЅРёРєРё РІРѕС€Р»Рё РІ РєР»Р°СЃСЃ.вЂќ gapida ergash gap turi qaysi?", options: ["Payt", "Sabab", "Maqsad", "Aniqlovchi"], correctAnswer: 0 },
                { question: "вЂњРћРЅ Р±С‹Р» РЅРµ РіРѕС‚РѕРІ Рє РѕС‚РІРµС‚Сѓ.вЂќ birikmasida вЂњРЅРµвЂќ qanday yoziladi?", options: ["QoвЂshib", "Ajratib", "Defis bilan", "Har doim ikki xil boвЂladi\nChalgвЂituvchi savollar"], correctAnswer: 1 },

                // рџџЎ ChalgвЂituvchi savollar (16-20)
                { question: "вЂњРџРёСЃР°С‚РµР»СЊ, РїРѕ РјРЅРµРЅРёСЋ РєСЂРёС‚РёРєРѕРІ, СЃРѕР·РґР°Р» Р»СѓС‡С€РµРµ РїСЂРѕРёР·РІРµРґРµРЅРёРµ.вЂќ gapida вЂњРїРѕ РјРЅРµРЅРёСЋ РєСЂРёС‚РёРєРѕРІвЂќ nimaga kiradi?", options: ["Kirish birikma", "Ega", "Kesim", "ToвЂldiruvchi"], correctAnswer: 0 },
                { question: "вЂњРљРЅРёРіР° РїСЂРѕС‡РёС‚Р°РЅР° СѓС‡РµРЅРёРєРѕРј.вЂќ gapida вЂњСѓС‡РµРЅРёРєРѕРјвЂќ qaysi kelishikda turibdi?", options: ["Bosh kelishik", "Tushum kelishigi", "Vositali kelishik", "Qaratqich kelishigi"], correctAnswer: 2 },
                { question: "вЂњР§РµРј Р±РѕР»СЊС€Рµ С‡РµР»РѕРІРµРє С‡РёС‚Р°РµС‚, С‚РµРј Р±РѕРіР°С‡Рµ РµРіРѕ СЂРµС‡СЊ.вЂќ gapida qanday munosabat ifodalangan?", options: ["Sabab", "Qiyosiy munosabat", "Payt", "Zidlov"], correctAnswer: 1 },
                { question: "вЂњР’СЃРµ Р±С‹Р»Рё РіРѕС‚РѕРІС‹ Рє РІС‹СЃС‚СѓРїР»РµРЅРёСЋ: Рё РІРµРґСѓС‰РёРµ, Рё СѓС‡Р°СЃС‚РЅРёРєРё, Рё РіРѕСЃС‚Рё.вЂќ gapida ikki nuqta nima uchun qoвЂyilgan?", options: ["KoвЂchirma gapdan oldin", "Umumlashtiruvchi soвЂzdan keyin uyushiq boвЂlaklar kelgani uchun", "Ergash gapdan oldin", "Undovdan keyin"], correctAnswer: 1 },
                { question: "вЂњРћРЅ РѕС‚РІРµС‚РёР»: В«РЇ РѕР±СЏР·Р°С‚РµР»СЊРЅРѕ РїСЂРёРґСѓ Р·Р°РІС‚СЂР°В».вЂќ gapida qanday sintaktik hodisa bor?", options: ["OвЂzlashtirma gap", "KoвЂchirma gap", "Kirish soвЂz", "Ajratilgan hol"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        11: {
            questions: [
                // рџџў Oson savollar (1-5)
                { question: "Qaysi gap bogвЂlovchisiz qoвЂshma gap hisoblanadi?", options: ["РЇ РІРѕС€С‘Р», Рё РІСЃРµ РїРѕСЃРјРѕС‚СЂРµР»Рё РЅР° РјРµРЅСЏ.", "РќР°СЃС‚СѓРїРёР» РІРµС‡РµСЂ вЂ” СЃС‚Р°Р»Рѕ РїСЂРѕС…Р»Р°РґРЅРѕ.", "РљРѕРіРґР° СЏ РїСЂРёС€С‘Р», СѓСЂРѕРє СѓР¶Рµ РЅР°С‡Р°Р»СЃСЏ.", "РњС‹ СЃРёРґРµР»Рё Рё СЂР°Р·РіРѕРІР°СЂРёРІР°Р»Рё."], correctAnswer: 1 },
                { question: "Qaysi qatorda ajratilgan aniqlovchi qatnashgan?", options: ["Р”РµРІРѕС‡РєР°, С‡РёС‚Р°СЋС‰Р°СЏ РєРЅРёРіСѓ, СЃРёРґРµР»Р° Сѓ РѕРєРЅР°.", "Р”РµРІРѕС‡РєР° СЃРёРґРµР»Р° Сѓ РѕРєРЅР°.", "РЈ РѕРєРЅР° СЃРёРґРµР»Р° РґРµРІРѕС‡РєР°.", "РљРЅРёРіР° Р»РµР¶Р°Р»Р° РЅР° СЃС‚РѕР»Рµ."], correctAnswer: 0 },
                { question: "Qaysi soвЂz kirish soвЂz boвЂla oladi?", options: ["РєРѕРЅРµС‡РЅРѕ", "РѕРєРЅРѕ", "Р±РµР¶Р°С‚СЊ", "РІС‡РµСЂР°"], correctAnswer: 0 },
                { question: "Qaysi gapda undov intonatsiyasi bor?", options: ["РљР°Рє РїСЂРµРєСЂР°СЃРЅР° СЌС‚Р° РјСѓР·С‹РєР°!", "Р“РґРµ Р»РµР¶РёС‚ С‚РµС‚СЂР°РґСЊ?", "РњС‹ СЃР»СѓС€Р°Р»Рё РјСѓР·С‹РєСѓ.", "РњСѓР·С‹РєР° Р·РІСѓС‡Р°Р»Р° С‚РёС…Рѕ."], correctAnswer: 0 },
                { question: "Qaysi vosita koвЂchirma gapni rasmiylashtirishda ishlatiladi?", options: ["Tirnoq", "Faqat vergul", "Faqat nuqta", "Qavs\nQiyinroq savollar"], correctAnswer: 0 },

                // рџ”ґ Qiyinroq savollar (6-15)
                { question: "вЂњРЇ СЂР°Рґ, С‡С‚Рѕ С‚С‹ РїСЂРёС€С‘Р».вЂќ gapida ergash gap turi qaysi?", options: ["Aniqlovchi", "ToвЂldiruvchi", "Payt", "Shart"], correctAnswer: 1 },
                { question: "вЂњРўРѕС‚, РєС‚Рѕ РјРЅРѕРіРѕ С‡РёС‚Р°РµС‚, СѓРјРµРµС‚ СЏСЃРЅРѕ РІС‹СЂР°Р¶Р°С‚СЊ РјС‹СЃР»Рё.вЂќ gapida вЂњРєС‚Рѕ РјРЅРѕРіРѕ С‡РёС‚Р°РµС‚вЂќ qismi nimani aniqlab kelmoqda?", options: ["С‚РѕС‚ olmoshini", "СѓРјРµРµС‚ feвЂ™lini", "РјС‹СЃР»Рё otini", "СЏСЃРЅРѕ ravishini"], correctAnswer: 0 },
                { question: "вЂњРҐРѕС‚СЏ Р±С‹Р»Рѕ СѓР¶Рµ РїРѕР·РґРЅРѕ, СЂР°Р±РѕС‚Р° РїСЂРѕРґРѕР»Р¶Р°Р»Р°СЃСЊ.вЂќ gapidagi ergash gap turi qaysi?", options: ["Sabab", "Shart", "ToвЂsiqsizlik", "Natija"], correctAnswer: 2 },
                { question: "вЂњРћРЅ РіРѕРІРѕСЂРёР» С‚Р°Рє С‚РёС…Рѕ, С‡С‚Рѕ РµРіРѕ РїРѕС‡С‚Рё РЅРµ СЃР»С‹С€Р°Р»Рё.вЂќ gapida qanday maвЂ™no ifodalangan?", options: ["Daraja va natija", "Payt", "Sabab", "Maqsad"], correctAnswer: 0 },
                { question: "вЂњРџРѕ СЃР»РѕРІР°Рј РґРёСЂРµРєС‚РѕСЂР°, РїСЂРѕРµРєС‚ Р±СѓРґРµС‚ Р·Р°РІРµСЂС€С‘РЅ РІРѕРІСЂРµРјСЏ.вЂќ gapida вЂњРїРѕ СЃР»РѕРІР°Рј РґРёСЂРµРєС‚РѕСЂР°вЂќ nimaga kiradi?", options: ["Kirish birikma", "ToвЂldiruvchi", "Kesim", "Hol"], correctAnswer: 0 },
                { question: "вЂњРќРµ РїСЂРѕС‡РёС‚Р°РІ СЃС‚Р°С‚СЊСЋ, РЅРµР»СЊР·СЏ РґРµР»Р°С‚СЊ РІС‹РІРѕРґС‹.вЂќ gapida ravishdosh birikma qanday maвЂ™no beradi?", options: ["Payt", "Shart / sababga yaqin holat", "Aniqlovchi", "Natija"], correctAnswer: 1 },
                { question: "вЂњРЎС‚СѓРґРµРЅС‚, СѓСЃС‚Р°РІС€РёР№ РїРѕСЃР»Рµ Р·Р°РЅСЏС‚РёР№, РІСЃС‘ Р¶Рµ РїСЂРѕРґРѕР»Р¶Р°Р» СЂР°Р±РѕС‚Р°С‚СЊ.вЂќ gapida ajratilgan boвЂlak qaysi?", options: ["СЃС‚СѓРґРµРЅС‚", "РїСЂРѕРґРѕР»Р¶Р°Р» СЂР°Р±РѕС‚Р°С‚СЊ", "СѓСЃС‚Р°РІС€РёР№ РїРѕСЃР»Рµ Р·Р°РЅСЏС‚РёР№", "РІСЃС‘ Р¶Рµ"], correctAnswer: 2 },
                { question: "вЂњРќРµвЂќ qaysi holatda feвЂ™l bilan alohida yoziladi?", options: ["РЅРµРЅР°РІРёРґРµС‚СЊ", "РЅРµРґРѕСѓРјРµРІР°С‚СЊ", "РЅРµ Р·РЅР°Р»", "РЅРµРІР·Р»СЋР±РёС‚СЊ"], correctAnswer: 2 },
                { question: "вЂњР’ С‚РµС‡РµРЅРёРµ РЅРµРґРµР»Рё РјС‹ РіРѕС‚РѕРІРёР»РёСЃСЊ Рє РѕР»РёРјРїРёР°РґРµ.вЂќ gapidagi вЂњРІ С‚РµС‡РµРЅРёРµвЂќ nimaga kiradi?", options: ["Hosila predlog", "BogвЂlovchi", "Ravish", "Yuklama"], correctAnswer: 0 },
                { question: "вЂњРћРЅ РЅРµ С‚РѕР»СЊРєРѕ РїРѕРґРіРѕС‚РѕРІРёР» РґРѕРєР»Р°Рґ, РЅРѕ Рё РІС‹СЃС‚СѓРїРёР» СЃ РЅРёРј Р±Р»РµСЃС‚СЏС‰Рµ.вЂќ gapida qanday bogвЂlovchi qoвЂllangan?", options: ["Zidlov bogвЂlovchi", "Juft bogвЂlovchi", "Ayiruv bogвЂlovchi", "Ergash gap bogвЂlovchisi\nChalgвЂituvchi savollar"], correctAnswer: 1 },

                // рџџЎ ChalgвЂituvchi savollar (16-20)
                { question: "вЂњРЎРѕР»РЅС†Рµ СЃРєСЂС‹Р»РѕСЃСЊ Р·Р° С‚СѓС‡Р°РјРё вЂ” РЅР°С‡Р°Р»СЃСЏ СЃРёР»СЊРЅС‹Р№ РґРѕР¶РґСЊ.вЂќ gapida tire nima maвЂ™noni kuchaytiradi?", options: ["Izohlash", "Tez almashinuvchi voqealar yoki natija", "Uyushiq boвЂlak", "Undalma"], correctAnswer: 1 },
                { question: "вЂњРЇ СѓРІРµСЂРµРЅ: СЂРµС€РµРЅРёРµ Р±СѓРґРµС‚ РЅР°Р№РґРµРЅРѕ.вЂќ gapida ikki nuqta nima sababdan ishlatilgan?", options: ["KoвЂchirma gap uchun", "Ikkinchi qism birinchi qism mazmunini ochib bergani uchun", "Undalma uchun", "Uyushiq boвЂlak uchun"], correctAnswer: 1 },
                { question: "вЂњРљРЅРёРіР°, РєР°Рє РјРЅРµ РєР°Р¶РµС‚СЃСЏ, РѕС‡РµРЅСЊ РёРЅС‚РµСЂРµСЃРЅР°.вЂќ gapida вЂњРєР°Рє РјРЅРµ РєР°Р¶РµС‚СЃСЏвЂќ nimaga kiradi?", options: ["Kirish gapcha", "Aniqlovchi", "Ega", "ToвЂldiruvchi"], correctAnswer: 0 },
                { question: "вЂњРўРµ, РєС‚Рѕ РѕРїРѕР·РґР°Р», РІРѕС€Р»Рё С‚РёС…Рѕ.вЂќ gapida bosh gap qaysi?", options: ["РєС‚Рѕ РѕРїРѕР·РґР°Р»", "С‚Рµ РІРѕС€Р»Рё С‚РёС…Рѕ", "РѕРїРѕР·РґР°Р»", "РєС‚Рѕ РІРѕС€Р»Рё С‚РёС…Рѕ"], correctAnswer: 1 },
                { question: "вЂњРќРµ РІСЃС‘ С‚Рѕ Р·РѕР»РѕС‚Рѕ, С‡С‚Рѕ Р±Р»РµСЃС‚РёС‚.вЂќ gapida ergash gapning turi qaysi?", options: ["Aniqlovchi", "ToвЂldiruvchi", "Ega", "Payt"], correctAnswer: 0 }
            ],
            questionCount: 20,
            timeLimit: 20
        }
    },
    english: {
        1: {
            questions: [
                { question: "Which word is a color?", options: ["apple", "red", "book", "pen"], correctAnswer: 1 },
                { question: "Choose the correct greeting.", options: ["Goodbye", "Thank you", "Hello", "Sit down"], correctAnswer: 2 },
                { question: "Which one is a number?", options: ["seven", "cat", "blue", "jump"], correctAnswer: 0 },
                { question: "Find the animal.", options: ["table", "tiger", "teacher", "pencil"], correctAnswer: 1 },
                { question: "Which word means вЂњonaвЂќ?", options: ["brother", "mother", "father", "sister"], correctAnswer: 1 },
                { question: "Choose the school thing.", options: ["eraser", "banana", "chicken", "flower"], correctAnswer: 0 },
                { question: "Which word starts with the letter вЂњBвЂќ?", options: ["apple", "cat", "ball", "dog"], correctAnswer: 2 },
                { question: "Choose the correct plural form.", options: ["one book", "two books", "two book", "one books"], correctAnswer: 1 },
                { question: "Which one is a fruit?", options: ["orange", "ruler", "fish", "chair"], correctAnswer: 0 },
                { question: "Complete the sentence: вЂњI ___ a pupil.вЂќ", options: ["am", "is", "are", "be"], correctAnswer: 0 },
                { question: "Which word is opposite of вЂњbigвЂќ?", options: ["tall", "long", "small", "fat"], correctAnswer: 2 },
                { question: "Choose the correct answer: вЂњWhat is this?вЂќ", options: ["It is a bag.", "I am fine.", "Good morning.", "Stand up."], correctAnswer: 0 },
                { question: "Which one is a body part?", options: ["nose", "notebook", "window", "blackboard"], correctAnswer: 0 },
                { question: "Choose the correct sentence.", options: ["She are my friend.", "He am a boy.", "It is a cat.", "I is a pupil."], correctAnswer: 2 },
                { question: "Which word means вЂњkitobвЂќ?", options: ["pen", "book", "copybook", "desk"], correctAnswer: 1 },
                { question: "Find the correct order of numbers.", options: ["one, three, two", "two, one, three", "one, two, three", "three, one, two"], correctAnswer: 2 },
                { question: "Which one can fly?", options: ["bird", "fish", "dog", "cow"], correctAnswer: 0 },
                { question: "Choose the correct classroom command.", options: ["Open your book.", "I like apples.", "This is my mother.", "It is yellow."], correctAnswer: 0 },
                { question: "Complete the sentence: вЂњThe sun is ___.вЂќ", options: ["green", "yellow", "black", "purple"], correctAnswer: 1 },
                { question: "Which answer is correct for: вЂњHow are you?вЂќ", options: ["IвЂ™m fine, thank you.", "My name is Tom.", "It is a pen.", "I am seven."], correctAnswer: 0 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        2: {
            questions: [
                { question: "Choose the correct translation of вЂњolmaвЂќ.", options: ["banana", "apple", "orange", "peach"], correctAnswer: 1 },
                { question: "Which sentence is correct?", options: ["He are my brother.", "She is my sister.", "I is a pupil.", "They am my friends."], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњThis ___ a cat.вЂќ", options: ["am", "are", "is", "be"], correctAnswer: 2 },
                { question: "Which word is a day of the week?", options: ["Monday", "Winter", "July", "Morning"], correctAnswer: 0 },
                { question: "Choose the correct plural form.", options: ["childs", "childrens", "children", "childes"], correctAnswer: 2 },
                { question: "What color is the grass usually?", options: ["blue", "green", "black", "white"], correctAnswer: 1 },
                { question: "Which one is a family member?", options: ["teacher", "father", "doctor", "driver"], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњI have got two ___.вЂќ", options: ["book", "books", "a book", "one book"], correctAnswer: 1 },
                { question: "Which question is correct?", options: ["What your name is?", "What is your name?", "Your name what is?", "What are your name?"], correctAnswer: 1 },
                { question: "Choose the correct answer: вЂњHow old are you?вЂќ", options: ["I am fine.", "My name is Ali.", "I am eight.", "It is a pen."], correctAnswer: 2 },
                { question: "Which one is a verb?", options: ["run", "table", "school", "red"], correctAnswer: 0 },
                { question: "Complete the sentence: вЂњShe ___ got a doll.вЂќ", options: ["have", "has", "is", "are"], correctAnswer: 1 },
                { question: "Which word is opposite of вЂњhappyвЂќ?", options: ["sad", "tall", "short", "big"], correctAnswer: 0 },
                { question: "Choose the correct sentence.", options: ["We has got a car.", "They has got books.", "I have got a bag.", "He have got a pencil."], correctAnswer: 2 },
                { question: "Which one is a room in a house?", options: ["kitchen", "garden", "school", "market"], correctAnswer: 0 },
                { question: "Complete the sentence: вЂњThere ___ three books on the table.вЂќ", options: ["is", "am", "are", "be"], correctAnswer: 2 },
                { question: "Which one is correct?", options: ["These is my hands.", "This are my hands.", "These are my hands.", "Those is my hand."], correctAnswer: 2 },
                { question: "Choose the correct answer: вЂњWhere do you study?вЂќ", options: ["I study at school.", "I am ten.", "I like English.", "It is my schoolbag."], correctAnswer: 0 },
                { question: "Which sentence is in present continuous?", options: ["I play football every day.", "She is reading a book.", "They have two cats.", "We are pupils."], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњMy mother is cooking in the ___.вЂќ", options: ["bedroom", "bathroom", "kitchen", "classroom"], correctAnswer: 2 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        3: {
            questions: [
                { question: "Choose the correct sentence.", options: ["He go to school every day.", "He goes to school every day.", "He going to school every day.", "He is go to school every day."], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњThey ___ playing in the garden now.вЂќ", options: ["is", "am", "are", "be"], correctAnswer: 2 },
                { question: "Which word is an adjective?", options: ["beautiful", "run", "teacher", "school"], correctAnswer: 0 },
                { question: "Choose the correct question.", options: ["Where you live?", "Where do you live?", "Where are you live?", "Where does you live?"], correctAnswer: 1 },
                { question: "Which one is the correct plural form?", options: ["foots", "feets", "feet", "footes"], correctAnswer: 2 },
                { question: "Complete the sentence: вЂњI ___ English on Monday.вЂќ", options: ["has", "have", "am", "is"], correctAnswer: 1 },
                { question: "Which sentence is correct?", options: ["She can sings very well.", "She can sing very well.", "She cans sing very well.", "She can to sing very well."], correctAnswer: 1 },
                { question: "Choose the correct answer: вЂњWhat time do you get up?вЂќ", options: ["I get up in the kitchen.", "I get up at 7 oвЂ™clock.", "I get up with my mother.", "I get up because I study."], correctAnswer: 1 },
                { question: "Which word is opposite of вЂњoldвЂќ?", options: ["young", "tall", "long", "strong"], correctAnswer: 0 },
                { question: "Complete the sentence: вЂњThere is ___ apple on the table.вЂќ", options: ["a", "an", "the", "two"], correctAnswer: 1 },
                { question: "Which sentence is in the past tense?", options: ["I play football.", "I am playing football.", "I played football.", "I plays football."], correctAnswer: 2 },
                { question: "Choose the correct sentence.", options: ["We was at home yesterday.", "They was at school yesterday.", "I were in the park yesterday.", "She was in the classroom yesterday."], correctAnswer: 3 },
                { question: "Which one is a correct question for this answer: вЂњYes, I do.вЂќ", options: ["Do you like bananas?", "Are you a pupil?", "Is this your pen?", "Can he swim?"], correctAnswer: 0 },
                { question: "Complete the sentence: вЂњMy father is taller ___ my mother.вЂќ", options: ["then", "than", "that", "as"], correctAnswer: 1 },
                { question: "Which word is a month?", options: ["Friday", "Spring", "August", "Morning"], correctAnswer: 2 },
                { question: "Choose the correct sentence.", options: ["There are a cat under the table.", "There is a cat under the table.", "There is two cats under the table.", "There are one cat under the table."], correctAnswer: 1 },
                { question: "Which sentence shows ability?", options: ["I am reading a book.", "I can ride a bike.", "I have a bike.", "I like my bike."], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњHe ___ TV every evening.вЂќ", options: ["watch", "watches", "watching", "is watch"], correctAnswer: 1 },
                { question: "Choose the correct answer: вЂњWhy are you happy?вЂќ", options: ["Because today is my birthday.", "At school.", "I am ten.", "With my friend."], correctAnswer: 0 },
                { question: "Which sentence is correct?", options: ["My brother have got a kite.", "My brother has got a kite.", "My brother got has a kite.", "My brother have a got kite."], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        4: {
            questions: [
                { question: "Choose the correct sentence.", options: ["She donвЂ™t like apples.", "She doesnвЂ™t likes apples.", "She doesnвЂ™t like apples.", "She not like apples."], correctAnswer: 2 },
                { question: "Complete the sentence: вЂњI ___ my homework yesterday.вЂќ", options: ["do", "did", "does", "doing"], correctAnswer: 1 },
                { question: "Which word is a pronoun?", options: ["quickly", "beautiful", "they", "school"], correctAnswer: 2 },
                { question: "Choose the correct question.", options: ["Did you went to school yesterday?", "Did you go to school yesterday?", "Did you goes to school yesterday?", "Did you going to school yesterday?"], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњThere arenвЂ™t ___ bananas in the basket.вЂќ", options: ["some", "any", "a", "much"], correctAnswer: 1 },
                { question: "Which sentence is correct?", options: ["He is the tallest boy in the class.", "He is the most tall boy in the class.", "He is taller boy in the class.", "He is the tall boyest in the class."], correctAnswer: 0 },
                { question: "Choose the correct answer: вЂњHow often do you play football?вЂќ", options: ["In the yard.", "With my brother.", "Every weekend.", "At 5 oвЂ™clock yesterday."], correctAnswer: 2 },
                { question: "Complete the sentence: вЂњMy sister ___ to music now.вЂќ", options: ["listen", "listens", "is listening", "listened"], correctAnswer: 2 },
                { question: "Which one is an irregular past form?", options: ["played", "worked", "went", "cleaned"], correctAnswer: 2 },
                { question: "Choose the correct sentence.", options: ["We was very tired after school.", "They was in the library.", "I were at home last night.", "She was very happy yesterday."], correctAnswer: 3 },
                { question: "Complete the sentence: вЂњWould you like ___ tea?вЂќ", options: ["some", "any", "many", "much"], correctAnswer: 0 },
                { question: "Which sentence shows future meaning?", options: ["I am eating lunch.", "I ate lunch.", "I will visit my grandmother tomorrow.", "I visit my grandmother every week."], correctAnswer: 2 },
                { question: "Choose the correct word order.", options: ["Always I get up early.", "I get up always early.", "I always get up early.", "I get always up early."], correctAnswer: 2 },
                { question: "Complete the sentence: вЂњThis bag is ___ than that one.вЂќ", options: ["heavy", "heavier", "heasiest", "more heavy"], correctAnswer: 1 },
                { question: "Which one is countable?", options: ["water", "milk", "bread", "apple"], correctAnswer: 3 },
                { question: "Choose the correct answer: вЂњWhat were you doing at 7 p.m.?вЂќ", options: ["I was reading a book.", "I read a book every day.", "I will read a book.", "I am reading a book now."], correctAnswer: 0 },
                { question: "Complete the sentence: вЂњHe has lived here ___ two years.вЂќ", options: ["since", "for", "from", "at"], correctAnswer: 1 },
                { question: "Which sentence is correct?", options: ["There is too many sugar in my tea.", "There are too much apples on the table.", "There is too much water in the glass.", "There are too much books in my bag."], correctAnswer: 2 },
                { question: "Choose the correct tag question.", options: ["You are a pupil, are you?", "You are a pupil, arenвЂ™t you?", "You are a pupil, donвЂ™t you?", "You are a pupil, isnвЂ™t you?"], correctAnswer: 1 },
                { question: "Which sentence is correct?", options: ["If it rains, we stay at home.", "If it will rain, we stay at home.", "If it rains, we will stay at home.", "If it raining, we will stay at home."], correctAnswer: 2 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        5: {
            questions: [
                { question: "Choose the correct sentence.", options: ["He donвЂ™t go to school by bus.", "He doesnвЂ™t goes to school by bus.", "He doesnвЂ™t go to school by bus.", "He not go to school by bus."], correctAnswer: 2 },
                { question: "Complete the sentence: вЂњThey ___ dinner when I came home.вЂќ", options: ["have", "had", "were having", "are having"], correctAnswer: 2 },
                { question: "Which word is an adverb?", options: ["careful", "carefully", "care", "caring"], correctAnswer: 1 },
                { question: "Choose the correct question.", options: ["How long you have studied English?", "How long have you studied English?", "How long did you studied English?", "How long are you study English?"], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњThere isnвЂ™t ___ milk in the fridge.вЂќ", options: ["many", "some", "any", "a few"], correctAnswer: 2 },
                { question: "Which sentence is correct?", options: ["She is more intelligent than her brother.", "She is intelligenter than her brother.", "She is most intelligent than her brother.", "She is intelligentest than her brother."], correctAnswer: 0 },
                { question: "Choose the correct answer: вЂњWhat does your father do?вЂќ", options: ["He is tall and kind.", "He is a doctor.", "He likes football.", "He goes to work by car."], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњIf I ___ time, I will help you.вЂќ", options: ["will have", "had", "have", "am having"], correctAnswer: 2 },
                { question: "Which one is the correct reported form?", options: ["He said that he is tired.", "He said that he was tired.", "He said that he tired.", "He said that was tired."], correctAnswer: 1 },
                { question: "Choose the correct sentence.", options: ["I have seen that film yesterday.", "I saw that film yesterday.", "I have saw that film yesterday.", "I seen that film yesterday."], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњThis is the boy ___ won the competition.вЂќ", options: ["which", "whose", "who", "whom"], correctAnswer: 2 },
                { question: "Which sentence is in passive voice?", options: ["They built this house in 2010.", "This house was built in 2010.", "They are building this house.", "They will build this house."], correctAnswer: 1 },
                { question: "Choose the correct word order.", options: ["She speaks very well English.", "She speaks English very well.", "She very well speaks English.", "She English speaks very well."], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњI am interested ___ learning languages.вЂќ", options: ["on", "at", "in", "for"], correctAnswer: 2 },
                { question: "Which one is an uncountable noun?", options: ["coin", "advice", "chair", "bottle"], correctAnswer: 1 },
                { question: "Choose the correct answer: вЂњWhy didnвЂ™t you come yesterday?вЂќ", options: ["Because I was ill.", "At 5 oвЂ™clock.", "In the classroom.", "With my cousin."], correctAnswer: 0 },
                { question: "Complete the sentence: вЂњShe has been living here ___ 2018.вЂќ", options: ["for", "since", "from", "during"], correctAnswer: 1 },
                { question: "Which sentence is correct?", options: ["There are fewer water in this bottle.", "There is less water in this bottle.", "There is fewer water in this bottle.", "There are less water in this bottle."], correctAnswer: 1 },
                { question: "Choose the correct modal verb. вЂњYou ___ wear a seatbelt in a car.вЂќ", options: ["must", "can", "may", "might"], correctAnswer: 0 },
                { question: "Which sentence is correct?", options: ["Although he was tired, but he finished his work.", "Although he was tired, he finished his work.", "Although he tired, he finished his work.", "Although was tired, he finished his work."], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        6: {
            questions: [
                { question: "Choose the correct sentence.", options: ["She has went to the library.", "She has gone to the library.", "She have gone to the library.", "She had gone to the library yesterday."], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњBy the time we arrived, the film ___.вЂќ", options: ["starts", "has started", "had started", "was starting"], correctAnswer: 2 },
                { question: "Which word is a conjunction?", options: ["quickly", "because", "happy", "teacher"], correctAnswer: 1 },
                { question: "Choose the correct question.", options: ["How many students are there in your class?", "How many students there are in your class?", "How many students is there in your class?", "How many are there students in your class?"], correctAnswer: 0 },
                { question: "Complete the sentence: вЂњI donвЂ™t have ___ information about it.вЂќ", options: ["many", "much", "a few", "several"], correctAnswer: 1 },
                { question: "Which sentence is correct?", options: ["This task is easier than the last one.", "This task is more easy than the last one.", "This task is easiest than the last one.", "This task is easyer than the last one."], correctAnswer: 0 },
                { question: "Choose the correct answer: вЂњWhat is your sister like?вЂќ", options: ["She likes music.", "She is kind and friendly.", "She is reading a book.", "She is at school."], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњIf they had studied harder, they ___ the exam.вЂќ", options: ["pass", "would pass", "would have passed", "had passed"], correctAnswer: 2 },
                { question: "Which one is the correct reported speech?\nDirect speech: He said, вЂњI am busy.вЂќ", options: ["He said that he is busy.", "He said that I was busy.", "He said that he was busy.", "He said that he busy."], correctAnswer: 2 },
                { question: "Choose the correct sentence.", options: ["I have lived here since five years.", "I have been living here for five years.", "I am living here since five years.", "I live here for five years."], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњThe woman ___ lives next door is a doctor.вЂќ", options: ["which", "whose", "where", "who"], correctAnswer: 3 },
                { question: "Which sentence is passive?", options: ["People speak English in many countries.", "English is spoken in many countries.", "Many countries speak English.", "People are speaking English in many countries."], correctAnswer: 1 },
                { question: "Choose the correct word order.", options: ["He always is late for school.", "He is late always for school.", "He is always late for school.", "Always he is late for school."], correctAnswer: 2 },
                { question: "Complete the sentence: вЂњShe apologized ___ being late.вЂќ", options: ["of", "for", "with", "on"], correctAnswer: 1 },
                { question: "Which one is the correct form?", options: ["There are too much people here.", "There is too many people here.", "There are too many people here.", "There is too much person here."], correctAnswer: 2 },
                { question: "Choose the correct answer: вЂњWhat had you done before the teacher came?вЂќ", options: ["I am finishing my work.", "I had finished my work.", "I finished my work tomorrow.", "I have finish my work."], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњNeither my brother nor my friends ___ coming.вЂќ", options: ["is", "are", "was", "be"], correctAnswer: 1 },
                { question: "Which sentence is correct?", options: ["She suggested to go to the museum.", "She suggested going to the museum.", "She suggested go to the museum.", "She suggested that go to the museum."], correctAnswer: 1 },
                { question: "Choose the correct modal form.", options: ["You mustnвЂ™t to smoke here.", "You donвЂ™t have smoke here.", "You must not smoke here.", "You not must smoke here."], correctAnswer: 2 },
                { question: "Which sentence is correct?", options: ["If I would know the answer, I would tell you.", "If I knew the answer, I would tell you.", "If I know the answer, I would told you.", "If I knew the answer, I will tell you."], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        7: {
            questions: [
                { question: "Choose the correct sentence.", options: ["She didnвЂ™t went to school yesterday.", "She didnвЂ™t go to school yesterday.", "She not go to school yesterday.", "She doesnвЂ™t go to school yesterday."], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњBy next year, they ___ in this city for ten years.вЂќ", options: ["will live", "will be living", "will have lived", "have lived"], correctAnswer: 2 },
                { question: "Which word is a relative pronoun?", options: ["although", "whose", "quickly", "under"], correctAnswer: 1 },
                { question: "Choose the correct question.", options: ["Who did call you last night?", "Who called you last night?", "Who was call you last night?", "Who calling you last night?"], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњThere is very ___ sugar left in the jar.вЂќ", options: ["few", "a few", "little", "many"], correctAnswer: 2 },
                { question: "Which sentence is correct?", options: ["This is the more interesting book I have ever read.", "This is the most interesting book I have ever read.", "This is the interestinger book I have ever read.", "This is the interestingest book I have ever read."], correctAnswer: 1 },
                { question: "Choose the correct answer: вЂњWhat does your brother look like?вЂќ", options: ["He likes swimming.", "He is honest and kind.", "He is tall and has short black hair.", "He is fixing his bike."], correctAnswer: 2 },
                { question: "Complete the sentence: вЂњIf she ___ earlier, she wouldnвЂ™t have missed the train.вЂќ", options: ["leaves", "left", "had left", "would leave"], correctAnswer: 2 },
                { question: "Which one is the correct reported speech?\nDirect speech: Mary said, вЂњI have finished my homework.вЂќ", options: ["Mary said that she has finished her homework.", "Mary said that she had finished her homework.", "Mary said that I had finished my homework.", "Mary said that she finished my homework."], correctAnswer: 1 },
                { question: "Choose the correct sentence.", options: ["I am used to wake up early.", "I used to waking up early.", "I am used to waking up early.", "I use to waking up early."], correctAnswer: 2 },
                { question: "Complete the sentence: вЂњThe book, ___ cover is red, belongs to me.вЂќ", options: ["who", "which", "whose", "whom"], correctAnswer: 2 },
                { question: "Which sentence is in passive voice?", options: ["They will announce the results tomorrow.", "The results will be announced tomorrow.", "They are announcing the results tomorrow.", "The results announce tomorrow."], correctAnswer: 1 },
                { question: "Choose the correct word order.", options: ["She has never been to London.", "She never has been to London.", "She has been to never London.", "Never she has been to London."], correctAnswer: 0 },
                { question: "Complete the sentence: вЂњIвЂ™m looking forward ___ from you soon.вЂќ", options: ["hear", "to hear", "to hearing", "hearing"], correctAnswer: 2 },
                { question: "Which one is the correct form?", options: ["Neither of the answers are correct.", "Neither of the answers is correct.", "Neither of the answer are correct.", "Neither of answers is correct."], correctAnswer: 1 },
                { question: "Choose the correct answer: вЂњWhy had they cancelled the match?вЂќ", options: ["Because it was raining heavily.", "In the stadium.", "At five oвЂ™clock.", "With the players."], correctAnswer: 0 },
                { question: "Complete the sentence: вЂњHardly ___ the room when the phone rang.вЂќ", options: ["I had left", "had I left", "I left", "did I left"], correctAnswer: 1 },
                { question: "Which sentence is correct?", options: ["He suggested that we should go home.", "He suggested us to go home.", "He suggested go home.", "He suggested that go home."], correctAnswer: 0 },
                { question: "Choose the correct modal meaning. вЂњYou ___ have told me the truth.вЂќ", options: ["should", "can", "might", "need"], correctAnswer: 0 },
                { question: "Which sentence is correct?", options: ["No sooner had I arrived when it started raining.", "No sooner I had arrived than it started raining.", "No sooner had I arrived than it started raining.", "No sooner did I arrive than it had started raining."], correctAnswer: 2 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        8: {
            questions: [
                { question: "Choose the correct sentence.", options: ["If I knew his number, I will call him.", "If I know his number, I would call him.", "If I knew his number, I would call him.", "If I had knew his number, I would call him."], correctAnswer: 2 },
                { question: "Complete the sentence: вЂњBy the time the guests arrived, we ___ dinner.вЂќ", options: ["prepared", "have prepared", "had prepared", "were prepare"], correctAnswer: 2 },
                { question: "Which word is a determiner?", options: ["those", "quickly", "because", "beautiful"], correctAnswer: 0 },
                { question: "Choose the correct question.", options: ["How long has she been learning English?", "How long she has been learning English?", "How long has been she learning English?", "How long she been learning English?"], correctAnswer: 0 },
                { question: "Complete the sentence: вЂњOnly a ___ people understood the problem.вЂќ", options: ["little", "few", "much", "less"], correctAnswer: 1 },
                { question: "Which sentence is correct?", options: ["This is one of the most useful tools I have ever used.", "This is one of the usefulest tools I have ever used.", "This is one of the more useful tools I have ever used.", "This is one of the most usefuler tools I have ever used."], correctAnswer: 0 },
                { question: "Choose the correct answer: вЂњWhat is your new teacher like?вЂќ", options: ["She likes reading books.", "She is patient, strict, and helpful.", "She is wearing a blue dress.", "She teaches us on Monday."], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњIf they had left earlier, they ___ the bus.вЂќ", options: ["wouldnвЂ™t miss", "wouldnвЂ™t have missed", "wonвЂ™t miss", "hadnвЂ™t missed"], correctAnswer: 1 },
                { question: "Which one is the correct reported speech?\nDirect speech: Tom said, вЂњI can solve this problem.вЂќ", options: ["Tom said that he can solve that problem.", "Tom said that he could solve that problem.", "Tom said that he could solve this problem.", "Tom said that I could solve that problem."], correctAnswer: 1 },
                { question: "Choose the correct sentence.", options: ["She denied to break the window.", "She denied breaking the window.", "She denied break the window.", "She denied that break the window."], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњThe students, ___ were late, missed the test.вЂќ", options: ["which", "whom", "who", "whose"], correctAnswer: 2 },
                { question: "Which sentence is passive?", options: ["Someone has stolen my bike.", "My bike has been stolen.", "Someone stole my bike yesterday.", "My bike stole yesterday."], correctAnswer: 1 },
                { question: "Choose the correct word order.", options: ["Rarely I have seen such a view.", "I have seen rarely such a view.", "Rarely have I seen such a view.", "I rarely have seen such a view."], correctAnswer: 2 },
                { question: "Complete the sentence: вЂњHe succeeded ___ passing the exam.вЂќ", options: ["in", "at", "on", "for"], correctAnswer: 0 },
                { question: "Which one is correct?", options: ["Each of the boys have a book.", "Each of the boys has a book.", "Each of the boys are having a book.", "Each of boys has a book."], correctAnswer: 1 },
                { question: "Choose the correct answer: вЂњWhy was the meeting postponed?вЂќ", options: ["Because the manager was ill.", "In the office.", "At 10 oвЂ™clock.", "For two hours."], correctAnswer: 0 },
                { question: "Complete the sentence: вЂњNot until he apologized ___ to him again.вЂќ", options: ["I spoke", "did I speak", "I did speak", "spoke I"], correctAnswer: 1 },
                { question: "Which sentence is correct?", options: ["IвЂ™d rather you donвЂ™t smoke here.", "IвЂ™d rather you didnвЂ™t smoke here.", "IвЂ™d rather you not smoked here.", "IвЂ™d rather you arenвЂ™t smoking here."], correctAnswer: 1 },
                { question: "Choose the correct modal meaning. вЂњHe ___ be at home now; I just saw him downtown.вЂќ", options: ["must", "canвЂ™t", "should", "may"], correctAnswer: 1 },
                { question: "Which sentence is correct?", options: ["Scarcely had we reached the station when the train left.", "Scarcely we had reached the station when the train left.", "Scarcely had we reached the station than the train left.", "Scarcely did we reach the station when the train had left."], correctAnswer: 0 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        9: {
            questions: [
                { question: "Choose the correct sentence.", options: ["If he had studied harder, he would pass the exam.", "If he studied harder, he would have passed the exam.", "If he had studied harder, he would have passed the exam.", "If he has studied harder, he would have passed the exam."], correctAnswer: 2 },
                { question: "Complete the sentence: вЂњBy next month, I ___ this project for a year.вЂќ", options: ["will do", "will have been doing", "have done", "had been doing"], correctAnswer: 1 },
                { question: "Which word is a modal verb?", options: ["should", "because", "quickly", "under"], correctAnswer: 0 },
                { question: "Choose the correct question.", options: ["What did she say where she had been?", "What she said where she had been?", "What did she say where had she been?", "What did she say about where she had been?"], correctAnswer: 3 },
                { question: "Complete the sentence: вЂњThere is hardly ___ chance of success.вЂќ", options: ["some", "any", "many", "a few"], correctAnswer: 1 },
                { question: "Which sentence is correct?", options: ["He is one of the most talented students in the school.", "He is one of the more talentedest students in the school.", "He is one of the most talentedest students in the school.", "He is one of the talented students most in the school."], correctAnswer: 0 },
                { question: "Choose the correct answer: вЂњWhat does it mean to be responsible?вЂќ", options: ["It means being careless.", "It means doing your duties properly.", "It means being afraid of everything.", "It means never helping others."], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњIf you ___ me earlier, I would have helped you.вЂќ", options: ["told", "had told", "would tell", "have told"], correctAnswer: 1 },
                { question: "Which one is the correct reported speech?\nDirect speech: She said, вЂњI will call you tomorrow.вЂќ", options: ["She said that she would call me the next day.", "She said that she will call me tomorrow.", "She said that she would call you tomorrow.", "She said that I would call her the next day."], correctAnswer: 0 },
                { question: "Choose the correct sentence.", options: ["He admitted to cheat in the test.", "He admitted cheating in the test.", "He admitted cheat in the test.", "He admitted that cheat in the test."], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњThis is the house ___ I was born.вЂќ", options: ["which", "who", "where", "whose"], correctAnswer: 2 },
                { question: "Which sentence is passive?", options: ["They are discussing the new plan.", "The new plan is being discussed.", "They discussed the new plan yesterday.", "They will discuss the new plan."], correctAnswer: 1 },
                { question: "Choose the correct word order.", options: ["Never I have heard such nonsense.", "Never have I heard such nonsense.", "I have never heard such nonsense.", "Both B and C are correct."], correctAnswer: 3 },
                { question: "Complete the sentence: вЂњShe insisted ___ paying for dinner.вЂќ", options: ["on", "in", "at", "for"], correctAnswer: 0 },
                { question: "Which one is correct?", options: ["Neither of them know the answer.", "Neither of them knows the answer.", "Neither of them are knowing the answer.", "Neither of them have known the answer."], correctAnswer: 1 },
                { question: "Choose the correct answer: вЂњWhy had the scientist repeated the experiment?вЂќ", options: ["To check whether the results were accurate.", "In the laboratory.", "For three hours.", "With his assistant."], correctAnswer: 0 },
                { question: "Complete the sentence: вЂњNo sooner ___ the door than the baby started crying.вЂќ", options: ["had she opened", "she had opened", "did she open", "she opened"], correctAnswer: 0 },
                { question: "Which sentence is correct?", options: ["I wish I am taller.", "I wish I was taller.", "I wish I were taller.", "Both B and C are acceptable, but C is more formal."], correctAnswer: 3 },
                { question: "Choose the correct modal meaning. вЂњYou ___ have brought an umbrella; itвЂ™s sunny now.вЂќ", options: ["mustnвЂ™t", "neednвЂ™t", "couldnвЂ™t", "shouldnвЂ™t"], correctAnswer: 1 },
                { question: "Which sentence is correct?", options: ["Seldom we see such dedication in young students.", "Seldom do we see such dedication in young students.", "Seldom we do see such dedication in young students.", "Seldom such dedication we see in young students."], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        10: {
            questions: [
                { question: "Choose the correct sentence.", options: ["If I had known about the meeting, I would attend it.", "If I knew about the meeting, I would have attended it.", "If I had known about the meeting, I would have attended it.", "If I know about the meeting, I would attend it."], correctAnswer: 2 },
                { question: "Complete the sentence: вЂњBy the end of this year, she ___ at this school for fifteen years.вЂќ", options: ["will teach", "will have been teaching", "had taught", "has taught"], correctAnswer: 1 },
                { question: "Which word is a discourse marker?", options: ["however", "beautiful", "under", "teacher"], correctAnswer: 0 },
                { question: "Choose the correct question.", options: ["What did he explain why he had left early?", "What did he explain about why he had left early?", "What he explained about why he had left early?", "Why did he explain had he left early?"], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњThere is scarcely ___ evidence to support his claim.вЂќ", options: ["some", "no", "any", "many"], correctAnswer: 2 },
                { question: "Which sentence is correct?", options: ["She is by far the most capable candidate for the position.", "She is by far the more capable candidate for the position.", "She is by far the most capable than the others.", "She is by far the capableest candidate for the position."], correctAnswer: 0 },
                { question: "Choose the correct answer: вЂњWhat does it mean to be open-minded?вЂќ", options: ["It means refusing all new ideas.", "It means being willing to consider different opinions.", "It means changing your mind every day.", "It means speaking without thinking."], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњIf they ___ more carefully, the accident might have been avoided.вЂќ", options: ["drove", "had driven", "would drive", "have driven"], correctAnswer: 1 },
                { question: "Which one is the correct reported speech?\nDirect speech: He said, вЂњI may not be able to finish the work today.вЂќ", options: ["He said that he might not be able to finish the work that day.", "He said that I might not be able to finish the work today.", "He said that he may not be able to finish the work that day.", "He said that he might not able to finish the work that day."], correctAnswer: 0 },
                { question: "Choose the correct sentence.", options: ["She regrets to tell him the truth.", "She regrets telling him the truth.", "She regrets tell him the truth.", "She regrets that tell him the truth."], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњThe reason ___ he resigned remains unclear.вЂќ", options: ["which", "why", "where", "who"], correctAnswer: 1 },
                { question: "Which sentence is passive?", options: ["They will have completed the bridge by next summer.", "The bridge will have been completed by next summer.", "They have been completing the bridge.", "The bridge will complete next summer."], correctAnswer: 1 },
                { question: "Choose the correct word order.", options: ["Hardly I had entered the room when everyone became silent.", "Hardly had I entered the room when everyone became silent.", "Hardly had entered I the room when everyone became silent.", "I had hardly entered the room than everyone became silent."], correctAnswer: 1 },
                { question: "Complete the sentence: вЂњShe is capable ___ solving complex problems quickly.вЂќ", options: ["at", "to", "of", "on"], correctAnswer: 2 },
                { question: "Which one is correct?", options: ["A number of students has applied for the scholarship.", "A number of students have applied for the scholarship.", "The number of students have applied for the scholarship.", "The number of students are applied for the scholarship."], correctAnswer: 1 },
                { question: "Choose the correct answer: вЂњWhy had the company changed its strategy?вЂќ", options: ["Because the previous plan had failed to produce results.", "In the main office.", "During the meeting.", "With the new manager."], correctAnswer: 0 },
                { question: "Complete the sentence: вЂњLittle ___ about the consequences of his decision at that time.вЂќ", options: ["he knew", "did he know", "knew he", "he did know"], correctAnswer: 1 },
                { question: "Which sentence is correct?", options: ["I would rather you leave now.", "I would rather you left now.", "I would rather you had leave now.", "I would rather you are leaving now."], correctAnswer: 1 },
                { question: "Choose the correct modal meaning. вЂњHe ___ have forgotten the appointment; otherwise, he would be here by now.вЂќ", options: ["must", "canвЂ™t", "should", "ought to"], correctAnswer: 0 },
                { question: "Which sentence is correct?", options: ["Under no circumstances you should open this door.", "Under no circumstances should you open this door.", "Under no circumstances you open this door should.", "Under no circumstances should open you this door."], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        11: {
            questions: [
                { question: "What does critical thinking involve?", options: ["Memorizing information without understanding it", "Rejecting all traditional views automatically", "Analyzing ideas carefully before forming a judgment", "Accepting every opinion without question"], correctAnswer: 2 },
                { question: "Direct speech: He said, вЂњI may have misunderstood the instructions.вЂќ\nWhich one is the correct reported speech?", options: ["He said that he might misunderstood the instructions.", "He said that he might have misunderstood the instructions.", "He said that I might have misunderstood the instructions.", "He said that he may have misunderstood the instructions."], correctAnswer: 1 },
                { question: "By the end of next month, the scientists ___ the experiment.", options: ["will have completed", "have completed", "will complete", "had completed"], correctAnswer: 0 },
                { question: "Choose the correct question form.", options: ["What the lecturer explained about why the results had changed?", "What did the lecturer explain why had the results changed?", "What did explain the lecturer about why the results had changed?", "What did the lecturer explain about why the results had changed?"], correctAnswer: 3 },
                { question: "She objected ___ treated unfairly during the discussion.", options: ["for being", "with being", "to being", "at being"], correctAnswer: 2 },
                { question: "Choose the correct sentence.", options: ["If she would have prepared better, she passed the interview.", "If she prepared better, she would have passed the interview.", "If she had prepared better, she would have passed the interview.", "If she had prepared better, she would pass the interview."], correctAnswer: 2 },
                { question: "Which word is a concessive linker?", options: ["although", "unless", "besides", "therefore"], correctAnswer: 0 },
                { question: "Choose the correct sentence.", options: ["This is the convincest explanation proposed so far.", "This is the most convincing explanation proposed so far.", "This is the most convincing than the others.", "This is the more convincing explanation proposed so far."], correctAnswer: 1 },
                { question: "The theory ___ the article is based has been questioned recently.", options: ["at which", "in which", "by which", "on which"], correctAnswer: 3 },
                { question: "Which sentence is passive?", options: ["The report is expected to be published tomorrow.", "They are expected to publish the report tomorrow.", "The report is expecting to publish tomorrow.", "They will be publishing the report tomorrow."], correctAnswer: 0 },
                { question: "There is hardly ___ evidence to support the accusation.", options: ["any", "a few", "many", "some"], correctAnswer: 0 },
                { question: "Which one is correct?", options: ["Not only the students but also the principal are surprised yesterday.", "Not only the students but also the principal have been surprised.", "Not only the students but also the principal was surprised.", "Not only the students but also the principal were surprised."], correctAnswer: 2 },
                { question: "Why had the board delayed the decision?", options: ["In the meeting room", "For three hours", "Because additional evidence needed to be examined", "During the afternoon"], correctAnswer: 2 },
                { question: "Choose the correct sentence.", options: ["She denied to have seen the document.", "She denied have seen the document.", "She denied that having seen the document.", "She denied having seen the document."], correctAnswer: 3 },
                { question: "If the warning ___ earlier, many lives might have been saved.", options: ["issued", "had been issued", "has been issued", "was issued"], correctAnswer: 1 },
                { question: "She ___ have missed the warning, because her report ignores it completely.", options: ["must", "should", "ought to", "can"], correctAnswer: 0 },
                { question: "Choose the correct word order.", options: ["Rarely do we encounter such dedication in young researchers.", "Rarely encounter we such dedication in young researchers.", "Rarely we encounter such dedication in young researchers.", "Rarely such dedication we encounter in young researchers."], correctAnswer: 0 },
                { question: "So little ___ about the disease at that time that treatment was largely ineffective.", options: ["we knew", "we did know", "did we know", "knew we"], correctAnswer: 2 },
                { question: "Which sentence is correct?", options: ["At no point the witness did admit being at the scene.", "At no point did the witness admit being at the scene.", "At no point did admit the witness being at the scene.", "At no point the witness admitted being at the scene."], correctAnswer: 1 },
                { question: "Choose the correct sentence.", options: ["I would rather he stays silent than speaks without evidence.", "I would rather he will stay silent than speak without evidence.", "I would rather he stayed silent than spoke without evidence.", "I would rather he stayed silent than speak without evidence."], correctAnswer: 3 }
            ],
            questionCount: 20,
            timeLimit: 20
        }
    },
    math: {
        1: {
            questions: [
                { question: "Zanjirni davom ettiring: 2, 5, 3, 6, 4, 7, ... keyingi son necha?", options: ["8", "5", "6", "9"], correctAnswer: 1 },
                { question: "Savatda 10 ta butun olma bor edi. Ali 3 ta olmani pichoq bilan teng ikkiga bo'ldi va savatga qayta qo'ydi. Endi savatda nechta olma bor?", options: ["13 ta", "7 ta", "6 ta", "10 ta"], correctAnswer: 3 },
                { question: "Anvar 9 qavatli uyning 5-qavatida yashaydi. Agar u uyni tepadan (9-qavatdan) pastga qarab sanasa, u nechanchi qavatda bo'ladi?", options: ["4-qavat", "5-qavat", "3-qavat", "6-qavat"], correctAnswer: 1 },
                { question: "To'rtburchak shaklidagi qog'ozning bir burchagi to'g'ri chiziq bo'ylab kesib tashlansa, unda nechta burchak hosil bo'ladi?", options: ["3 ta", "4 ta", "6 ta", "5 ta"], correctAnswer: 3 },
                { question: "Tenglikni tiklang: 10 - * + 2 = 7. '*' o'rnida qaysi son turishi kerak?", options: ["5", "3", "4", "1"], correctAnswer: 0 },
                { question: "Raqamlari yig'indisi eng kichik bo'lgan ikki xonali sonni toping.", options: ["11", "20", "10", "01"], correctAnswer: 2 },
                { question: "Qutida 5 ta qizil va 5 ta ko'k qalam bor. Ko'zingizni yumib, kamida nechta qalam olsangiz, ularning ichida albatta bir xil rangdagi juftlik chiqadi?", options: ["2 ta", "3 ta", "11 ta", "5 ta"], correctAnswer: 1 },
                { question: "Bugun haftaning seshanba kuni bo'lsa, 3 kundan keyin haftaning qaysi kuni bo'ladi?", options: ["Payshanba", "Juma", "Yakshanba", "Shanba"], correctAnswer: 1 },
                { question: "Uzun taxtani 4 bo'lakka ajratish uchun uni necha joyidan arralash kerak?", options: ["4 marta", "3 marta", "5 marta", "2 marta"], correctAnswer: 1 },
                { question: "Eng kichik ikki xonali son va eng katta bir xonali sonning ayirmasini toping.", options: ["1", "0", "11", "2"], correctAnswer: 0 },
                { question: "5 ta bola uchrashganda bir-biri bilan bir martadan qo'l berib so'rashdi. Hammasi bo'lib necha marta qo'l berib so'rashilgan?", options: ["5 marta", "10 marta", "15 marta", "20 marta"], correctAnswer: 1 },
                { question: "Gulzorda 7 ta lola bor. Chinnigullar esa lolalardan 3 ta ko'p. Gulzorda jami nechta gul bor?", options: ["10 ta", "17 ta", "4 ta", "13 ta"], correctAnswer: 1 },
                { question: "Akmal 6 yoshda, singlisi 4 yoshda. Oradan 5 yil o'tgach, Akmal singlisidan necha yosh katta bo'ladi?", options: ["7 yosh", "2 yosh", "11 yosh", "5 yosh"], correctAnswer: 1 },
                { question: "Tarozi pallasida 2 ta olma 3 ta nokni bosib turibdi (vazni teng). 4 ta olma nechta nokka teng bo'ladi?", options: ["5 ta", "6 ta", "9 ta", "4 ta"], correctAnswer: 1 },
                { question: "1 dan 11 gacha bo'lgan sonlar ichida nechta juft son bor? (1 va 11 ham kiradi)", options: ["4 ta", "5 ta", "10 ta", "6 ta"], correctAnswer: 1 },
                { question: "Poyga musobaqasida siz ikkinchi o'rindagi yuguruvchini quvib o'tdingiz. Hozir siz nechanchi o'rindasiz?", options: ["Birinchi", "Ikkinchi", "Oxirgi", "Uchinchi"], correctAnswer: 1 },
                { question: "Bir oilada 5 ta o'g'il bor. Har bir o'g'ilning bittadan singlisi bor. Shu oilada jami nechta farzand bor?", options: ["10 ta", "6 ta", "11 ta", "5 ta"], correctAnswer: 1 },
                { question: "Stolda 10 ta sham yonib turibdi. Shamollatish uchun deraza ochilganda 3 ta sham o'chib qoldi. Qolganlari yonib tugadi. Ertalab stolda nechta sham qoladi?", options: ["0 ta", "3 ta", "10 ta", "7 ta"], correctAnswer: 1 },
                { question: "Bolalar velosipedida 3 ta g'ildirak bor. Shunday velosipeddan 3 tasida jami nechta g'ildirak bor?", options: ["6 ta", "9 ta", "12 ta", "3 ta"], correctAnswer: 1 },
                { question: "O'ylangan sondan 5 ni ayirib, natijaga 2 ni qo'shsak, 8 hosil bo'ladi. Men qaysi sonni o'ylaganman?", options: ["5", "11", "10", "15"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        2: {
            questions: [
                { question: "Qonuniyatni davom ettiring: 10, 20, 30, 40, ... Keyingi son necha?", options: ["41", "50", "45", "60"], correctAnswer: 1 },
                { question: "Eng kichik ikki xonali son (10) va eng katta bir xonali sonning (9) yig'indisini toping.", options: ["10", "19", "11", "20"], correctAnswer: 1 },
                { question: "Bir yilda nechta fasl bor?", options: ["12 ta", "4 ta", "7 ta", "3 ta"], correctAnswer: 1 },
                { question: "Sizda 20 so'm pul bor edi. 5 so'mga muzqaymoq, 3 so'mga saqich oldingiz. Sizda necha so'm qoldi?", options: ["15 so'm", "12 so'm", "8 so'm", "17 so'm"], correctAnswer: 1 },
                { question: "Agar X + 5 = 15 bo'lsa, X soni nechaga teng?", options: ["5", "10", "15", "20"], correctAnswer: 1 },
                { question: "Kvadratning 4 ta tomoni bor. 3 ta kvadratning jami nechta tomoni bor?", options: ["7 ta", "12 ta", "8 ta", "10 ta"], correctAnswer: 1 },
                { question: "Sonlarni kamayish tartibida qo'ying: 15, 25, 10, 30.", options: ["10, 15, 25, 30", "30, 25, 15, 10", "15, 25, 30, 10", "30, 10, 25, 15"], correctAnswer: 1 },
                { question: "Daftar 2000 so'm, qalam esa 1000 so'm. Ikkita qalam va bitta daftar jami qancha bo'ladi?", options: ["3000 so'm", "4000 so'm", "3500 so'm", "5000 so'm"], correctAnswer: 1 },
                { question: "Soat 8:00 ni ko'rsatmoqda. Yarim soatdan keyin soat necha bo'ladi?", options: ["8:30", "9:00", "7:30", "8:15"], correctAnswer: 0 },
                { question: "Lentani 1 joyidan kessak, necha bo'lak hosil bo'ladi?", options: ["1 ta", "2 ta", "0 ta", "3 ta"], correctAnswer: 1 },
                { question: "Ikki xonali sonlar ichida eng kichigi qaysi?", options: ["11", "10", "99", "01"], correctAnswer: 1 },
                { question: "5 sonini o'ziga bir marta qo'shsangiz (5+5), natija necha bo'ladi?", options: ["5", "10", "25", "15"], correctAnswer: 1 },
                { question: "Uchburchakning bir tomoni 3 sm, ikkinchi tomoni 3 sm, uchinchi tomoni ham 3 sm. Perimetri necha sm?", options: ["6 sm", "9 sm", "12 sm", "3 sm"], correctAnswer: 1 },
                { question: "Haftaning oxirgi (yettinchi) kuni qaysi?", options: ["Shanba", "Yakshanba", "Dushanba", "Juma"], correctAnswer: 1 },
                { question: "20 dan bitta oldingi sonni toping.", options: ["21", "19", "22", "18"], correctAnswer: 1 },
                { question: "Daraxtda 10 ta qush bor edi. Qattiq qarsak chalingandan keyin, nechta qush qoldi?", options: ["9 ta", "0 ta", "1 ta", "10 ta"], correctAnswer: 1 },
                { question: "Men, dadam va oyim ko'chaga chiqdik. Biz jami nechta odammiz?", options: ["2 ta", "3 ta", "1 ta", "4 ta"], correctAnswer: 1 },
                { question: "Stolning 4 ta burchagi bor. Agar bitta burchagini kessak, burchaklar soni ko'payadimi yoki kamayadimi?", options: ["Kamayadi", "Ko'payadi (5 ta bo'ladi)", "Burchak qolmaydi", "O'zgarmaydi"], correctAnswer: 1 },
                { question: "Qaysi biri og'irroq: 1 kg temirmi yoki 1 kg qog'ozmi?", options: ["Temir", "Ikkalasi ham teng (1 kg)", "Bilmayman", "Qog'oz"], correctAnswer: 1 },
                { question: "Avtobusda 5 kishi ketayotgan edi. Bekatda 5 kishi tushdi, lekin avtobusda yana bir kishi qoldi. U kim?", options: ["Yo'lovchi", "Haydovchi", "Nazoratchi", "Hech kim"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        3: {
            questions: [
                { question: "Hisoblang: 72 : 8 + 3 Г— (15 - 7)", options: ["33", "31", "40", "24"], correctAnswer: 0 },
                { question: "Eng kichik uch xonali sondan eng kichik ikki xonali sonni ayiring va natijani 2 ga bo'ling.", options: ["50", "45", "40", "90"], correctAnswer: 1 },
                { question: "To'g'ri to'rtburchakning eni 6 sm, bo'yi esa enidan 2 marta uzun. Uning perimetrini toping.", options: ["18 sm", "36 sm", "30 sm", "24 sm"], correctAnswer: 1 },
                { question: "Do'konda 5 ta daftar 15 000 so'm turadi. 9 ta shunday daftar necha pul bo'ladi?", options: ["25 000 so'm", "27 000 so'm", "20 000 so'm", "30 000 so'm"], correctAnswer: 1 },
                { question: "Noma'lum sonni toping: (X - 20) : 5 = 10", options: ["30", "70", "40", "50"], correctAnswer: 1 },
                { question: "Kvadratning perimetri 24 sm. Shu kvadratning yuzini toping.", options: ["24 smВІ", "36 smВІ", "48 smВІ", "16 smВІ"], correctAnswer: 1 },
                { question: "Agar soat millari 14:20 ni ko'rsatayotgan bo'lsa, 40 daqiqadan keyin soat necha bo'ladi?", options: ["14:60", "15:00", "14:40", "15:20"], correctAnswer: 1 },
                { question: "99 dan kichik, lekin 90 dan katta bo'lgan barcha juft sonlar yig'indisini toping.", options: ["186", "282", "276", "190"], correctAnswer: 1 },
                { question: "1/4 qismi 8 ga teng bo'lgan sonning yarmi nechaga teng?", options: ["32", "16", "4", "8"], correctAnswer: 1 },
                { question: "Qutida 24 ta qalam bor. Ularning yarmi qizil, qolganining yarmi ko'k. Qutida nechta ko'k qalam bor?", options: ["12 ta", "6 ta", "4 ta", "8 ta"], correctAnswer: 1 },
                { question: "3 kg olma 21 000 so'm bo'lsa, 1 kg olma 5 kg olmadan necha pulga arzon?", options: ["7000 so'm", "28 000 so'm", "14 000 so'm", "35 000 so'm"], correctAnswer: 1 },
                { question: "Uch xonali sonning yuzlar xonasi 4, birlar xonasi 2. O'nlar xonasi esa ularning yig'indisiga teng. Bu qaysi son?", options: ["426", "462", "642", "264"], correctAnswer: 1 },
                { question: "Lentani 4 joyidan kessak, necha bo'lak hosil bo'ladi?", options: ["4 ta", "5 ta", "6 ta", "3 ta"], correctAnswer: 1 },
                { question: "Savatda 7 ta olma bor. 7 ta bolaga bittadan olma berildi, lekin savatda bitta olma qoldi. Nega?", options: ["Bitta bola olma olmadi", "Oxirgi bolaga olma savat bilan berildi", "Savatda aslida 8 ta olma bor edi", "Olmalardan biri chirigan edi"], correctAnswer: 1 },
                { question: "Siz poygada ikkinchi o'rindagi yuguruvchini quvib o'tdingiz. Hozir nechanchi o'rindasiz?", options: ["Birinchi", "Ikkinchi", "Oxirgi", "Uchinchi"], correctAnswer: 1 },
                { question: "Bir kilogramm tosh og'irmi yoki bir kilogramm qog'ozmi?", options: ["Tosh og'ir", "Ikkalasi ham teng", "Bilmayman", "Qog'oz og'ir"], correctAnswer: 1 },
                { question: "Daraxtda 12 ta qush bor edi. Ovchi bittasini otib tushirdi. Daraxtda nechta qush qoldi?", options: ["11 ta", "0 ta", "12 ta", "1 ta"], correctAnswer: 1 },
                { question: "Agar 2 ta mushuk 2 ta sichqonni 2 daqiqada tutsa, 4 ta mushuk 4 ta sichqonni necha daqiqada tutadi?", options: ["4 daqiqada", "2 daqiqada", "8 daqiqada", "1 daqiqada"], correctAnswer: 1 },
                { question: "Mening 2 ta akam va 2 ta ukam bor. Biz oilada jami nechta o'g'il bolamiz?", options: ["4 ta", "5 ta", "2 ta", "3 ta"], correctAnswer: 1 },
                { question: "Tungi soat 12 da yomg'ir yog'ayotgan bo'lsa, 24 soatdan keyin quyosh charaqlab chiqishi mumkinmi?", options: ["Ha, albatta", "Yo'q, chunki yana yarim tun bo'ladi", "Ha, yoz bo'lsa", "Ob-havoga bog'liq"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        4: {
            questions: [
                { question: "Hisoblang: 350 Г— 2 - (800 + 200) : 100", options: ["690", "600", "500", "700"], correctAnswer: 0 },
                { question: "6, 0, 9, 1 raqamlaridan foydalanib tuzish mumkin bo'lgan eng katta va eng kichik to'rt xonali sonlar ayirmasini toping (raqamlar takrorlanmasin).", options: ["8541", "8595", "7000", "8532"], correctAnswer: 0 },
                { question: "Agar kitobning 1/4 qismi 30 bet bo'lsa, kitobning yarmi necha bet bo'ladi?", options: ["120 bet", "60 bet", "100 bet", "90 bet"], correctAnswer: 1 },
                { question: "Kvadratning yuzi 49 smВІ. Shu kvadratning perimetrini toping.", options: ["49 sm", "28 sm", "21 sm", "14 sm"], correctAnswer: 1 },
                { question: "Noma'lum sonni toping: (X - 400) : 3 = 200", options: ["200", "1000", "500", "600"], correctAnswer: 1 },
                { question: "Avtomobil 3 soatda 240 km yo'l yurdi. U xuddi shu tezlikda 5 soatda necha km yo'l yuradi?", options: ["300 km", "400 km", "450 km", "500 km"], correctAnswer: 1 },
                { question: "To'g'ri to'rtburchakning perimetri 40 sm. Agar uning eni 8 sm bo'lsa, bo'yi necha sm?", options: ["12 sm", "32 sm", "16 sm", "24 sm"], correctAnswer: 0 },
                { question: "Qaysi sonni 15 ga bo'lganda bo'linma 4 chiqib, 5 qoldiq qoladi?", options: ["60", "65", "55", "70"], correctAnswer: 1 },
                { question: "5 kg olma 40 000 so'm turadi. 100 000 so'mga necha kg olma olish mumkin?", options: ["10 kg", "12.5 kg", "8 kg", "15 kg"], correctAnswer: 1 },
                { question: "4 soat 20 daqiqa jami necha daqiqaga teng?", options: ["240 daqiqa", "260 daqiqa", "280 daqiqa", "220 daqiqa"], correctAnswer: 1 },
                { question: "Eng kichik to'rt xonali sondan eng katta uch xonali sonni ayiring.", options: ["10", "1", "0", "100"], correctAnswer: 1 },
                { question: "Uchburchakning birinchi tomoni 15 sm, ikkinchi tomoni 10 sm, uchinchi tomoni esa birinchi tomonidan 5 sm qisqa. Perimetrni toping.", options: ["30 sm", "35 sm", "25 sm", "40 sm"], correctAnswer: 1 },
                { question: "Do'konda 300 kg guruch bor edi. Birinchi kuni uning 1/3 qismi sotildi. Ikkinchi kuni qolgan guruchning yarmi sotildi. Do'konda necha kg guruch qoldi?", options: ["100 kg", "150 kg", "50 kg", "200 kg"], correctAnswer: 0 },
                { question: "Bir oilada 6 ta o'g'il bor va ularning har birining bittadan singlisi bor. Oilada jami nechta farzand bor?", options: ["12 ta", "7 ta", "13 ta", "6 ta"], correctAnswer: 1 },
                { question: "Agar 4 ta mushuk 4 ta sichqonni 4 daqiqada tutsa, 100 ta mushuk 100 ta sichqonni necha daqiqada tutadi?", options: ["100 daqiqada", "4 daqiqada", "400 daqiqada", "1 daqiqada"], correctAnswer: 1 },
                { question: "Stol ustida 3 ta sham yonib turibdi. Shamollatish uchun deraza ochilganda 2 tasi o'chib qoldi. Ertalab stol ustida nechta sham qoladi?", options: ["1 ta", "2 ta", "0 ta", "3 ta"], correctAnswer: 1 },
                { question: "Agar bitta tayoqning 2 ta uchi bo'lsa, ikki yarimta tayoqning nechta uchi bor?", options: ["5 ta", "6 ta", "2 ta", "4 ta"], correctAnswer: 1 },
                { question: "Siz poyga musobaqasida oxirgi o'rindagi yuguruvchini quvib o'tdingiz. Hozir nechanchi o'rindasiz?", options: ["Oxirgi", "Bunday bo'lishi mumkin emas", "Birinchi", "Oxiridan bitta oldingi"], correctAnswer: 1 },
                { question: "Ikki shahar orasidagi masofa 600 km. Bir-biriga qarab ikki poyezd yo'lga chiqdi. Birining tezligi 70 km/soat, ikkinchisiniki 80 km/soat. Ular necha soatdan keyin uchrashishadi?", options: ["5 soat", "4 soat", "3 soat", "6 soat"], correctAnswer: 1 },
                { question: "To'g'ri to'rtburchak shaklidagi maydonning bo'yi 30 metr, eni esa bo'yidan 3 marta qisqa. Shu maydon atrofini 5 marta aylanib chiqqan sportchi jami necha metr masofani bosib o'tadi?", options: ["500 metr", "400 metr", "600 metr", "300 metr"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        5: {
            questions: [
                { question: "Hisoblang: (4.5 : 0.5 + 11) Г— 0.1 + 2Ві", options: ["10", "12", "11", "9"], correctAnswer: 0 },
                { question: "Eng kichik besh xonali sondan eng katta to'rt xonali sonni ayirib, natijani 1000 ga ko'paytiring. Hosil bo'lgan sonni toping.", options: ["1", "1000", "0", "100"], correctAnswer: 1 },
                { question: "3/8 qismi 24 ga teng bo'lgan sonning 1/4 qismi nechaga teng?", options: ["64", "16", "12", "8"], correctAnswer: 1 },
                { question: "Kvadratning yuzi 81 smВІ. Agar uning tomoni 3 sm ga orttirilsa, yangi kvadratning perimetri necha sm bo'ladi?", options: ["48 sm", "36 sm", "44 sm", "12 sm"], correctAnswer: 0 },
                { question: "Agar 3x - 12 = 48 bo'lsa, x : 4 + 10 ifodaning qiymatini toping.", options: ["20", "15", "30", "25"], correctAnswer: 1 },
                { question: "Ikki shahar orasidagi masofa 300 km. Bir vaqtda bir-biriga qarab ikki mashina yo'lga chiqdi. Birining tezligi 70 km/soat, ikkinchisiniki 80 km/soat. Ular uchrashishidan 1 soat oldin ular orasidagi masofa necha km bo'ladi?", options: ["150 km", "15 km", "75 km", "1500 m"], correctAnswer: 0 },
                { question: "5 ta ishchi 5 kunda 5 ta uyni bo'yasa, 100 ta ishchi 100 ta uyni necha kunda bo'yaydi?", options: ["100 kunda", "5 kunda", "20 kunda", "1 kunda"], correctAnswer: 1 },
                { question: "Idishning 2/5 qismi suv bilan to'la. Agar unga yana 12 litr suv qo'shilsa, idishning yarmi to'ladi. Idish jami necha litr suv sig'diradi?", options: ["60 litr", "120 litr", "80 litr", "100 litr"], correctAnswer: 1 },
                { question: "Uzunligi 18 metr bo'lgan matoni 3 metrlik bo'laklarga bo'lish uchun necha marta kesish kerak?", options: ["6 marta", "5 marta", "3 marta", "4 marta"], correctAnswer: 1 },
                { question: "To'g'ri to'rtburchakning perimetri 40 sm. Uning bo'yi enidan 4 sm uzun. Shu to'rtburchakning yuzini toping.", options: ["96 smВІ", "84 smВІ", "80 smВІ", "100 smВІ"], correctAnswer: 0 },
                { question: "Sutkaning (24 soat) qolgan qismi o'tgan qismidan 2 marta kam bo'lsa, hozir soat necha?", options: ["08:00", "16:00", "18:00", "12:00"], correctAnswer: 1 },
                { question: "2, 5, 11, 23, 47, ... keyingi sonni toping.", options: ["94", "95", "96", "85"], correctAnswer: 1 },
                { question: "3 ta olma va 2 ta nok 700 gramm, 2 ta olma va 3 ta nok esa 800 gramm chiqdi. Bittadan olma va nok jami necha gramm?", options: ["350 gr", "300 gr", "500 gr", "400 gr"], correctAnswer: 1 },
                { question: "Kitobning narxi 20% ga oshirildi, so'ngra yangi narx 20% ga tushirildi. Kitobning dastlabki narxi qanday o'zgardi?", options: ["O'zgarmadi", "4% ga arzonlashdi", "2% ga arzonlashdi", "4% ga qimmatlashdi"], correctAnswer: 1 },
                { question: "Kater oqim bo'ylab 20 km/soat, oqimga qarshi 16 km/soat tezlik bilan yuradi. Oqimning tezligini toping.", options: ["4 km/soat", "2 km/soat", "3 km/soat", "18 km/soat"], correctAnswer: 1 },
                { question: "Siz yugurish musobaqasida oxirgi o'rindagi yuguruvchini quvib o'tdingiz. Hozir nechanchi o'rindasiz?", options: ["Oxiridan bitta oldingi", "Bunday bo'lishi mumkin emas", "Birinchi", "Oxirgi"], correctAnswer: 1 },
                { question: "4 ta tayoqning 8 ta uchi bor. 5 yarimta tayoqning nechta uchi bor?", options: ["10 ta", "12 ta", "9 ta", "11 ta"], correctAnswer: 1 },
                { question: "Ali aytdi: 'Mening akalarim nechta bo'lsa, singillarim ham shuncha'. Valeriyaning singlisi aytdi: 'Mening akalarim singillarimdan 2 marta ko'p'. Oilada nechta farzand bor?", options: ["5 ta", "7 ta", "9 ta", "4 ta"], correctAnswer: 1 },
                { question: "Xonada 10 ta sham yonib turibdi. Shamollatish uchun deraza ochilganda 3 ta sham o'chib qoldi, qolganlari yonib tugadi. Ertalab xonada nechta sham qoladi?", options: ["7 ta", "3 ta", "10 ta", "0 ta"], correctAnswer: 1 },
                { question: "Bir savat tuxumni har safar 2 tadan, 3 tadan, 4 tadan, 5 tadan va 6 tadan sanaganda har doim 1 ta tuxum ortib qoladi. 7 tadan sanaganda esa hech qancha tuxum qolmaydi. Savatda kamida nechta tuxum bo'lgan?", options: ["121 ta", "301 ta", "91 ta", "61 ta"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        6: {
            questions: [
                { question: "Hisoblang (ishoralarga e'tibor bering): 12 - 3 Г— (4 - 6) + 15 : (-3)", options: ["13", "1", "-11", "23"], correctAnswer: 0 },
                { question: "O'nli kasrlarni hisoblang: (0.25 Г— 8 + 1.5) / 0.5", options: ["7", "3.5", "7.5", "14"], correctAnswer: 0 },
                { question: "Tovarning narxi avval 20% ga oshirildi, so'ngra yangi narx 20% ga tushirildi. Tovarning dastlabki narxi qanday o'zgardi?", options: ["O'zgarmadi", "4% ga arzonlashdi", "2% ga arzonlashdi", "4% ga qimmatlashdi"], correctAnswer: 1 },
                { question: "6 ta ishchi bir ishni 10 kunda tugatadi. Shu ishni 4 ta ishchi necha kunda tugatadi?", options: ["15 kunda", "6.6 kunda", "20 kunda", "12 kunda"], correctAnswer: 0 },
                { question: "Chiziqli tenglama: 2(x - 3) = 4x + 10 tenglamani yeching.", options: ["-8", "8", "2", "-2"], correctAnswer: 0 },
                { question: "Ikki sonning nisbati 3:5 ga, yig'indisi esa 64 ga teng. Shu sonlarning ayirmasini toping.", options: ["16", "8", "32", "24"], correctAnswer: 0 },
                { question: "EKUB(24, 36) + EKUK(24, 36) yig'indisini toping.", options: ["84", "72", "96", "60"], correctAnswer: 0 },
                { question: "Modul: |x - 5| = 3 tenglamaning ildizlari yig'indisini toping.", options: ["10", "6", "0", "8"], correctAnswer: 0 },
                { question: "2В№вЃ° Г— 5В№вЃ° ko'paytmaning natijasi necha xonali son bo'ladi?", options: ["11 xonali", "10 xonali", "9 xonali", "12 xonali"], correctAnswer: 0 },
                { question: "Burchakning bissektrisasi uni 2 ta burchakka ajratdi. Agar asl burchak 120В° bo'lsa, hosil bo'lgan 2 ta burchakning yig'indisi necha gradus bo'ladi?", options: ["120В°", "60В°", "90В°", "180В°"], correctAnswer: 0 },
                { question: "Uzunligi 200 metr bo'lgan poyezd 72 km/soat tezlik bilan harakatlanmoqda. U yo'l chetidagi ustun yonidan necha sekundda o'tib ketadi?", options: ["10 sekund", "20 sekund", "15 sekund", "5 sekund"], correctAnswer: 0 },
                { question: "20% li 40 kg sho'r suvga qancha toza suv qo'shilsa, uning sho'rligi 10% bo'lib qoladi?", options: ["40 kg", "20 kg", "80 kg", "60 kg"], correctAnswer: 0 },
                { question: "Ota 40 yoshda, o'g'il esa 12 yoshda. Necha yildan keyin ota o'g'lidan roppa-rosa 2 marta katta bo'ladi?", options: ["16 yil", "14 yil", "20 yil", "12 yil"], correctAnswer: 0 },
                { question: "Sayyoh jami yo'lning 1/3 qismini yurdi. Yana 20 km yurgach, yo'lning yarmiga yetib keldi. Butun yo'lning uzunligi qancha?", options: ["120 km", "60 km", "80 km", "100 km"], correctAnswer: 0 },
                { question: "Sinfda 25 ta o'quvchi bor. Ulardan 15 tasi ingliz tilini, 12 tasi rus tilini biladi. Hech bo'lmasa nechta o'quvchi ikkala tilni ham biladi?", options: ["2 ta", "3 ta", "5 ta", "0 ta"], correctAnswer: 0 },
                { question: "Bir hovuzni 1-quvur 2 soatda, 2-quvur 3 soatda to'ldiradi. Hovuz tagidagi teshik esa to'la hovuzni 6 soatda bo'shatadi. Uchalasi ham birdaniga ochilsa, bo'sh hovuz qancha vaqtda to'ladi?", options: ["1.5 soatda", "1 soatda", "To'lmaydi", "2 soatda"], correctAnswer: 0 },
                { question: "Yog'ochni 5 ta teng bo'lakka bo'lish uchun uni bir necha marta arralash kerak. Agar har bir arralash 3 minut vaqt olsa, butun yog'ochni kesishga jami necha minut ketadi?", options: ["12 minut", "15 minut", "9 minut", "20 minut"], correctAnswer: 0 },
                { question: "Siz avtobus haydovchisisiz. Dastlab avtobusda 10 kishi bor edi. 1-bekatda 3 kishi tushib, 5 kishi chiqdi. 2-bekatda 2 kishi tushib, 1 kishi chiqdi. Haydovchining ko'zlari qanday rangda?", options: ["O'zingizning ko'zingiz rangi", "Moviy", "Jigarrang", "Qora"], correctAnswer: 0 },
                { question: "Agar 5 ta tuxum qozonda 5 daqiqada qaynab pishsa, xuddi shunday qozonda 100 ta tuxum qaynatish uchun necha daqiqa kerak bo'ladi?", options: ["5 daqiqa", "100 daqiqa", "20 daqiqa", "1 daqiqa"], correctAnswer: 0 },
                { question: "10 metrli ustunga shilliqqurt kunduzi 3 metr tepaga chiqadi, kechasi esa uxlab yotganida 2 metr pastga sirg'alib tushib ketadi. U nechanchi kuni ustunning eng uchiga yetib boradi?", options: ["8-kuni", "10-kuni", "7-kuni", "9-kuni"], correctAnswer: 0 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        7: {
            questions: [
                { question: "Hisoblang: (2В№вЃ° В· 3В№вЃ°) / 6вЃ№ - 5В№вЃµ / (5В№Ві В· 5)", options: ["1", "5", "11", "6"], correctAnswer: 0 },
                { question: "Agar a + b = 5 va ab = 6 bo'lsa, aВІ + bВІ ning qiymatini toping.", options: ["25", "13", "19", "12"], correctAnswer: 1 },
                { question: "3В№вЃ°вЃ° sonining oxirgi raqami nechaga teng?", options: ["3", "9", "1", "7"], correctAnswer: 2 },
                { question: "Soddalashtiring: (x-1)(x+1)(xВІ+1)(xвЃґ+1) + 1", options: ["xвЃґ", "xвЃё", "xВ№вЃ¶", "xвЃ¶"], correctAnswer: 1 },
                { question: "Agar x + 1/x = 3 bo'lsa, xВІ + 1/xВІ nechaga teng?", options: ["9", "7", "6", "11"], correctAnswer: 1 },
                { question: "Tenglamani yeching: |2x - 5| = 11. Ildizlari ko'paytmasini toping.", options: ["-24", "-21", "15", "24"], correctAnswer: 0 },
                { question: "Qaysi son katta? A = 2ВівЃ°вЃ° yoki B = 3ВІвЃ°вЃ°", options: ["A > B", "B > A", "Taqqoslab bo'lmaydi", "A = B"], correctAnswer: 1 },
                { question: "Uchburchakning burchaklari 2:3:5 nisbatda. Bu qanday uchburchak?", options: ["O'tkir burchakli", "To'g'ri burchakli", "Teng yonli", "O'tmas burchakli"], correctAnswer: 1 },
                { question: "Agar 2ЛЈ = 32 va 3Кё = 81 bo'lsa, xВІ - yВІ ni toping.", options: ["1", "9", "25", "16"], correctAnswer: 1 },
                { question: "7-sinf o'quvchisi 10 ta testdan 70 ball oldi. Har bir to'g'ri javob uchun 10 ball, xato uchun -5 ball berilsa, u nechta savolga to'g'ri javob bergan?", options: ["7 ta", "8 ta", "10 ta", "9 ta"], correctAnswer: 1 },
                { question: "Hisoblang: в€љ144 - в€љ81 + в€љ121", options: ["14", "12", "10", "15"], correctAnswer: 0 },
                { question: "Ifodani hisoblang: в€љ(2ВІ В· 3вЃґ В· 5ВІ)", options: ["30", "90", "450", "60"], correctAnswer: 1 },
                { question: "Amallarni bajaring: (в€љ5)ВІ + (в€љ7)ВІ - в€љ16", options: ["8", "12", "4", "16"], correctAnswer: 0 },
                { question: "Qaysi son butun chiqadi?", options: ["в€љ150", "в€љ256", "в€љ125", "в€љ200"], correctAnswer: 1 },
                { question: "Soddalashtiring: в€љ((в€љ5 - 3)ВІ)", options: ["в€љ5 - 3", "3 - в€љ5", "-1", "3 + в€љ5"], correctAnswer: 1 },
                { question: "To'g'ri to'rtburchakning bo'yi 20% ga oshirildi, eni esa 20% ga kamaytirildi. Yuzi qanday o'zgardi?", options: ["O'zgarmadi", "4% ga kamaydi", "2% ga kamaydi", "4% ga ortdi"], correctAnswer: 1 },
                { question: "Ota 35 yoshda, o'g'il 5 yoshda. Necha yildan keyin ota o'g'lidan 3 marta katta bo'ladi?", options: ["5 yil", "10 yil", "7 yil", "15 yil"], correctAnswer: 1 },
                { question: "Qutida 5 ta oq, 7 ta qora va 8 ta qizil shar bor. Ichiga qaramasdan, kamida nechta shar olinsa, ularning ichida albatta bir xil rangdagi 3 ta shar bo'ladi?", options: ["3 ta", "7 ta", "9 ta", "8 ta"], correctAnswer: 1 },
                { question: "1 dan 100 gacha bo'lgan sonlar ichida 7 raqami necha marta qatnashadi?", options: ["10 marta", "20 marta", "19 marta", "11 marta"], correctAnswer: 1 },
                { question: "Soat 15:15 da soat va daqiqa millari orasidagi burchak necha gradusga teng?", options: ["0В°", "7,5В°", "5В°", "15В°"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        8: {
            questions: [
                { question: "Hisoblang: в€љ(11 + 6в€љ2) + в€љ(11 - 6в€љ2)", options: ["6", "2в€љ11", "6в€љ2", "3в€љ2"], correctAnswer: 0 },
                { question: "Agar xВІ + 1/xВІ = 7 bo'lsa, xВі + 1/xВі ning musbat qiymatini toping.", options: ["14", "18", "10", "21"], correctAnswer: 1 },
                { question: "Soddalashtiring: (aВі + bВі + cВі - 3abc) / (a + b + c)", options: ["aВІ + bВІ + cВІ", "aВІ + bВІ + cВІ - ab - bc - ca", "ab + bc + ca", "(a+b+c)ВІ"], correctAnswer: 1 },
                { question: "Tenglamaning ildizlari ko'paytmasini toping: xВІ - |x| - 6 = 0", options: ["-6", "-9", "6", "36"], correctAnswer: 1 },
                { question: "Agar x + y + z = 0 bo'lsa, xВІ/yz + yВІ/xz + zВІ/xy ifoda nechaga teng?", options: ["0", "1", "-3", "3"], correctAnswer: 3 },
                { question: "To'g'ri burchakli uchburchakning gipotenuzasi 10 sm. Unga tushirilgan balandlik 6 sm bo'lishi mumkinmi?", options: ["Ha", "Yo'q, balandlik ko'pi bilan 5 sm bo'lishi mumkin", "Ha, yuzi 30 bo'ladi", "Faqat teng yonli bo'lsa"], correctAnswer: 1 },
                { question: "Kvadratning tomoni 10% ga orttirildi. Uning yuzi necha foizga ortadi?", options: ["10%", "20%", "100%", "21%"], correctAnswer: 3 },
                { question: "xВІ + px + q = 0 tenglamaning ildizlari xв‚Ѓ va xв‚‚. Agar xв‚Ѓ + xв‚‚ = -5 va xв‚Ѓ В· xв‚‚ = 6 bo'lsa, p va q ni toping.", options: ["p=5, q=6", "p=-5, q=6", "p=5, q=-6", "p=6, q=5"], correctAnswer: 0 },
                { question: "Trapetsiyaning o'rta chizig'i 10 sm. Agar katta asosi kichigidan 4 sm uzun bo'lsa, asoslari uzunliklarini toping.", options: ["6 va 10", "8 va 12", "5 va 9", "7 va 11"], correctAnswer: 1 },
                { question: "f(x) = kx + b funksiya (1; 3) va (2; 5) nuqtalardan o'tadi. k + b yig'indisini toping.", options: ["2", "3", "1", "4"], correctAnswer: 1 },
                { question: "Ikki o'xshash uchburchakning yuzlari nisbati 9:16. Ularning perimetrlari nisbatini toping.", options: ["9:16", "3:4", "4:3", "81:256"], correctAnswer: 1 },
                { question: "Musbat sonlar uchun a + b = 10 bo'lsa, ab ko'paytmaning eng katta qiymati nechaga teng?", options: ["24", "25", "20", "100"], correctAnswer: 1 },
                { question: "Rombning diagonallari 12 va 16 sm. Rombning tomonini toping.", options: ["10 sm", "14 sm", "8 sm", "20 sm"], correctAnswer: 0 },
                { question: "Nechta butun n qiymatida (n+3)/(n-1) kasr butun son bo'ladi?", options: ["2 ta", "4 ta", "8 ta", "6 ta"], correctAnswer: 3 },
                { question: "Soddalashtiring: в€љ(x-5)ВІ + в€љ(x-2)ВІ agar 2 < x < 5 bo'lsa.", options: ["2x - 7", "3", "-3", "7"], correctAnswer: 1 },
                { question: "100 qavatli binodan tuxum yordamida qaysi qavatda sinishini aniqlash uchun eng kam urunishlar sonini toping (optimal usulda).", options: ["1 ta", "2 ta", "14 ta", "10 ta"], correctAnswer: 2 },
                { question: "Sinfda 30 ta o'quvchi bor. 20 tasi matematikaga, 15 tasi fizikaga qatnashadi. 5 tasi hech qaysiga qatnashmasa, nechta o'quvchi ikkalasiga ham qatnashadi?", options: ["5 ta", "10 ta", "0 ta", "15 ta"], correctAnswer: 1 },
                { question: "Agar A+B=C, B+C=D, A+C+D=E bo'lsa, E nechta A ga teng (agar B=2A bo'lsa)?", options: ["5 ta", "10 ta", "9 ta", "8 ta"], correctAnswer: 2 },
                { question: "3 va 5 litrli idishlar yordamida 4 litr suv olish uchun kamida necha marta suv quyish/to'kish amali bajariladi?", options: ["4 marta", "6 marta", "8 marta", "7 marta"], correctAnswer: 1 },
                { question: "Soat 12:15 da soat va daqiqa millari orasidagi burchak necha gradus?", options: ["90В°", "82,5В°", "97,5В°", "85В°"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        9: {
            questions: [
                { question: "Ifodani soddalashtiring: sinвЃґО± + cosвЃґО±", options: ["1 - 0.5sinВІ2О±", "1 - sinВІ2О±", "0.5sinВІ2О±", "1"], correctAnswer: 0 },
                { question: "Agar xВІ + x + 1 = 0 bo'lsa, xВ№вЃ°вЃ° + 1/xВ№вЃ°вЃ° ifodaning qiymatini toping.", options: ["1", "-1", "2", "0"], correctAnswer: 1 },
                { question: "a(3; -4) va b(12; 5) vektorlar orasidagi burchak kosinusini toping.", options: ["16/65", "13/65", "1/5", "3/13"], correctAnswer: 0 },
                { question: "y = xВІ - 6x + 13 funksiyaning qiymatlar sohasini toping.", options: ["[0; в€ћ)", "[4; в€ћ)", "R", "[-4; в€ћ)"], correctAnswer: 1 },
                { question: "Tomonlari 13, 14 va 15 sm bo'lgan uchburchakning eng kichik balandligini toping.", options: ["10", "11.2", "12", "9.6"], correctAnswer: 1 },
                { question: "Agar x + y = 5 va xВІ + yВІ = 13 bo'lsa, xвЃґ + yвЃґ ni toping.", options: ["97", "169", "81", "121"], correctAnswer: 0 },
                { question: "nВІ - n < 100 tengsizlikni qanoatlantiruvchi nechta natural n soni mavjud?", options: ["9", "10", "11", "12"], correctAnswer: 1 },
                { question: "xВІ - ax + 9 = 0 tenglama bitta yechimga ega bo'ladigan a ning musbat qiymatini toping.", options: ["3", "9", "0", "6"], correctAnswer: 3 },
                { question: "Agar 2ЛЈ = 3 va 3Кё = 16 bo'lsa, xy ko'paytmani toping.", options: ["3", "4", "5", "2"], correctAnswer: 1 },
                { question: "Muntazam oltiburchakning yuzi 24в€љ3 bo'lsa, unga tashqi chizilgan doira yuzini toping.", options: ["16ПЂ", "12ПЂ", "24ПЂ", "32ПЂ"], correctAnswer: 0 },
                { question: "Yilning nechta oyida 28 kun bor?", options: ["1 ta", "2 ta", "6 ta", "12 ta"], correctAnswer: 3 },
                { question: "15 metrli arqonni 1 metrlik bo'laklarga ajratish uchun eng kamida necha marta (taxlab) kesish kerak?", options: ["3", "4", "14", "15"], correctAnswer: 1 },
                { question: "Ushbu gap: 'Men hozir yolg'on gapiryapman' - bu nima?", options: ["Rost", "Yolg'on", "Xato", "Paradoks"], correctAnswer: 3 },
                { question: "5 ta mashina 5 daqiqada 5 ta detal yasasa, 100 ta mashina 100 ta detalni necha daqiqada yasaydi?", options: ["100", "5", "1", "20"], correctAnswer: 1 },
                { question: "9 ta tangadan biri qalbaki (yengilroq). Pallali tarozi yordamida uni kamida necha marta o'lchashda aniq topish mumkin?", options: ["1", "2", "3", "4"], correctAnswer: 1 },
                { question: "Jarroh: 'Bu bola mening o'g'lim' dedi, bola esa: 'Bu mening dadam emas' dedi. Jarroh kim?", options: ["Xolasi", "Onasi", "Buvisi", "Amakisi"], correctAnswer: 1 },
                { question: "1 dan 100 gacha bo'lgan sonlar ichida 9 raqami necha marta qatnashadi?", options: ["10", "20", "19", "11"], correctAnswer: 1 },
                { question: "Suv to'la stakanda muz bo'lagi suzib yuribdi. Muz erigandan keyin suv sathi qanday o'zgaradi?", options: ["Ko'tariladi", "O'zgarmaydi", "Pasayadi", "Toshadi"], correctAnswer: 1 },
                { question: "Qaysi biri ko'proq: 100 ning 1 foizimi yoki 1 ning 100 foizimi?", options: ["100 ning 1%", "1 ning 100%", "Vaziyatga bog'liq", "Ikkalasi teng"], correctAnswer: 3 },
                { question: "Siz qorong'u xonaga kirdingiz. Cho'ntagingizda bitta gugurt bor. Xonada kerosin lampa, sham va gaz plitasi bor. Birinchi bo'lib nimani yoqasiz?", options: ["Shamni", "Gugurtni", "Lampani", "Plitani"], correctAnswer: 1 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        10: {
            questions: [
                { question: "Absolyut noelastik urilishda kinetik energiyaning necha foizi ichki energiyaga (issiqlikka) aylanishi mumkin (mв‚Ѓ = 3mв‚‚, vв‚‚ = 0)?", options: ["25%", "50%", "100%", "75%"], correctAnswer: 3 },
                { question: "Karno sikli bo'yicha ishlaydigan issiqlik mashinasining FIKini oshirish uchun qaysi amal eng samarali?", options: ["Tв‚‚ ni oshirish", "Tв‚Ѓ ni kamaytirish", "Ishchi jismni almashtirish", "Tв‚Ѓ ni oshirish"], correctAnswer: 3 },
                { question: "Jism gorizontga О± burchak ostida otildi. Maksimal ko'tarilish balandligi uchish masofasining choragiga teng bo'lsa (H = L/4), burchakni toping.", options: ["30В°", "45В°", "60В°", "tg О± = 0.5"], correctAnswer: 1 },
                { question: "Zaryadlangan va manbadan uzilgan yassi kondensator plastinalari oralariga dielektrik kiritilsa, uning energiyasi qanday o'zgaradi?", options: ["Ortadi", "Kamayadi", "O'zgarmaydi", "0 ga tushadi"], correctAnswer: 1 },
                { question: "Uzunligi L bo'lgan matematika mayatnik uchdan bir qismi massasiga ega yuk bilan 90В° burchakdan qo'yib yuborildi...", options: ["v = gL", "v = 2gL", "v = gL/3", "v = в€љ(8gL/9)"], correctAnswer: 3 },
                { question: "Hisoblang: cos(2ПЂ/7) В· cos(4ПЂ/7) В· cos(6ПЂ/7)", options: ["1/8", "-1/8", "1/4", "-1/4"], correctAnswer: 1 },
                { question: "logв‚“ 2 + logв‚‚ x = -2.5 tenglamaning ildizlaridan birini toping.", options: ["2", "1", "в€љ2", "1/в€љ2"], correctAnswer: 3 },
                { question: "y = xЛЈ funksiyaning x = e nuqtadagi hosilasini toping.", options: ["eбµ‰", "2eбµ‰", "e", "1"], correctAnswer: 1 },
                { question: "Muntazam tetraedrga ichki chizilgan shar radiusi uning balandligining qancha qismini tashkil etadi?", options: ["1/4", "1/3", "1/6", "1/8"], correctAnswer: 0 },
                { question: "'MATEMATIKA' so'zidagi harflar o'rnini almashtirib nechta turli so'z yasash mumkin?", options: ["40320", "151200", "3628800", "45360"], correctAnswer: 1 },
                { question: "3 ta o'chirgich va 3 ta chiroq bor. Qaysi biri qaysiniki ekanini bir marta kirib aniqlash usuli nima?", options: ["Vaqtni o'lchash", "Issiq-sovuq usuli", "Tasodif", "Iloji yo'q"], correctAnswer: 1 },
                { question: "Agar 1=5, 2=25, 3=125, 4=625 bo'lsa, 5 nimaga teng?", options: ["3125", "1", "5", "0"], correctAnswer: 1 },
                { question: "2 xil rangli paypoqlar aralash yotibdi. Kamida nechta olinsa, albatta bir juft bir xil rang chiqadi?", options: ["2 ta", "3 ta", "4 ta", "5 ta"], correctAnswer: 1 },
                { question: "Samolyot ichida birdaniga barcha qushlar uchib ketsa, samolyot og'irligi qanday o'zgaradi?", options: ["Kamayadi", "Ortadi", "O'zgarmaydi", "Vaziyatga bog'liq"], correctAnswer: 2 },
                { question: "Qaysi soat kuniga ikki marta to'g'ri vaqtni ko'rsatadi?", options: ["Sekin yuradigan", "Tez yuradigan", "Ishlamaydigan", "Elektron"], correctAnswer: 2 },
                { question: "Insonga tegishli, lekin undan ko'ra boshqalar ko'proq foydalanadigan narsa nima?", options: ["Oyoq kiyimi", "Ismi", "Uyi", "Pullari"], correctAnswer: 1 },
                { question: "Kishi yomg'ir ostida qoldi, lekin uning birorta ham sochi ho'l bo'lmadi. Nega?", options: ["Soyaboni bor edi", "U kal edi", "Suv o'tkazmaydigan kiyimda edi", "Tez yugurdi"], correctAnswer: 1 },
                { question: "Qaysi savolga hech qachon 'Ha' deb rost javob berib bo'lmaydi?", options: ["O'lyapsizmi?", "Uxlayapsizmi?", "Gapiryapsizmi?", "Eshityapsizmi?"], correctAnswer: 1 },
                { question: "Xonaning 4 burchagida bittadan mushuk bor. Har biri qarshisida 3 ta mushuk ko'rsa, jami nechta mushuk bor?", options: ["12 ta", "3 ta", "4 ta", "16 ta"], correctAnswer: 2 },
                { question: "Siz poygada oxirgi odamni quvib o'tdingiz. Hozir qaysi o'rindasiz?", options: ["Oxirgidan bitta oldingi", "Oxirgi", "Bunday bo'lishi mumkin emas", "Birinchi"], correctAnswer: 2 }
            ],
            questionCount: 20,
            timeLimit: 20
        },
        11: {
            questions: [
                { question: "Vodorod atomining elektroni 1-energetik sathdan 3-sathga o'tganda qancha energiya (eV) yutiladi (Eв‚Ѓ = -13.6 eV)?", options: ["10.2 eV", "12.09 eV", "13.6 eV", "1.51 eV"], correctAnswer: 1 },
                { question: "Radioaktiv elementning miqdori 3 ta yarim yemirilish davridan keyin dastlabki miqdorining necha foizini tashkil etadi?", options: ["12.5%", "25%", "37.5%", "50%"], correctAnswer: 0 },
                { question: "G'altakdan o'tayotgan tok I = Iв‚Ђ sin(П‰t) qonuniyat bilan o'zgarmoqda. G'altakda hosil bo'lgan o'zinduksiya EYKning maksimal qiymatini toping.", options: ["LIв‚ЂП‰", "LIв‚ЂП‰ВІ", "L Iв‚Ђ / П‰", "L / Iв‚ЂП‰"], correctAnswer: 0 },
                { question: "Matematik mayatnikning ipi uzunligi 4 marta oshirilib, Oyga (g_oy = g/6) olib borilsa, uning tebranish davri qanday o'zgaradi?", options: ["в€љ24 marta ortadi", "в€љ24 marta kamayadi", "24 marta ortadi", "в€љ6 marta ortadi"], correctAnswer: 0 },
                { question: "Nur shishadan havoga o'tmoqda (n = 1.5). To'la ichki qaytishning chegaraviy burchagi sinГјsini toping.", options: ["2/3", "1/2", "3/4", "1/1.5"], correctAnswer: 0 },
                { question: "Hisoblang: cos 20В° + cos 100В° + cos 140В°", options: ["0", "1", "в€љ3/2", "-1/2"], correctAnswer: 0 },
                { question: "Berilgan hajmdagi silindrning to'la sirti eng kichik bo'lishi uchun uning balandligi va radiusi orasidagi nisbat (h/r) qanday bo'lishi kerak?", options: ["1", "2", "4", "0.5"], correctAnswer: 1 },
                { question: "a, b, c birlik vektorlar va a + b + c = 0 bo'lsa, aВ·b + bВ·c + cВ·a skalyar ko'paytmalar yig'indisini toping.", options: ["-3", "-1.5", "0", "1.5"], correctAnswer: 1 },
                { question: "Piramidaning to'la sirti asosining yuzidan 3 marta katta bo'lsa, yon yoqi va asos tekisligi orasidagi burchak kosinusini toping.", options: ["1/2", "1/3", "2/3", "1/4"], correctAnswer: 1 },
                { question: "y = в€љx va y = xВІ chiziqlari bilan chegaralangan shaklning yuzini hisoblang.", options: ["1/2", "1/3", "2/3", "1"], correctAnswer: 1 },
                { question: "Ikki eshik (erkinlik va o'lim) va ikki soqchi (rostgo'y va yolg'onchi) bor. Bir savol bilan erkinlik eshigini qanday topish mumkin?", options: ["Sen kimsan?", "Sherigingdan so'rasam nima deydi?", "Qaysi eshik ochiq?", "Bu yer qayer?"], correctAnswer: 1 },
                { question: "Hozirgi yoshim 3 yil oldingi yoshimdan 3 marta katta. Men necha yoshdaman?", options: ["6", "4.5", "9", "12"], correctAnswer: 1 },
                { question: "Nima butun dunyoni ko'ra oladi, lekin o'zini hech qachon ko'ra olmaydi?", options: ["Oyna", "Ko'z", "Quyosh", "Fotoapparat"], correctAnswer: 1 },
                { question: "Qanday soat sutkada faqat ikki marta to'g'ri vaqtni ko'rsatadi?", options: ["Elektron", "Ishlamaydigan (to'xtab qolgan)", "Tezroq yuradigan", "Quyosh soati"], correctAnswer: 1 },
                { question: "Siz qorong'u xonada Brayl alifbosida o'qiyapsiz. Kitob o'qish uchun chiroq kerakmi?", options: ["Ha", "Faqat tunda", "Yo'q", "Kitobga bog'liq"], correctAnswer: 2 },
                { question: "Qayerda hamma narsani (daryo, shahar, o'rmon) topish mumkin, lekin ularning birortasi ham haqiqiy emas?", options: ["Tushda", "Kino", "Xarita", "Kitob"], correctAnswer: 2 },
                { question: "Nima ichida barcha harflar bor?", options: ["Lug'at", "Alifbo", "Pochta", "Gazeta"], correctAnswer: 1 },
                { question: "Qaysi savolga o'lgan kishi hech qachon javob bera olmaydi?", options: ["Ismingiz nima?", "Siz vafot etdingizmi?", "Qayerdan keldingiz?", "Hammasi joyidami?"], correctAnswer: 1 },
                { question: "O'zidan oldingi son bilan o'zidan keyingi sonning ko'paytmasi noldan bitta kichik bo'lgan sonni toping.", options: ["1", "0", "-1", "2"], correctAnswer: 1 },
                { question: "Siz poyga musobaqasida birinchi o'rindagi yuguruvchini quvib o'tdingiz. Bu bo'lishi mumkinmi?", options: ["Ikkinchi", "Oxirgi", "Bunday bo'lishi mumkin emas", "Birinchi"], correctAnswer: 2 }
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
