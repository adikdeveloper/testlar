const fs = require('fs');

const file = 'c:/Users/Администратор/Downloads/testlar-main/questions.js';
let content = fs.readFileSync(file, 'utf8');

const mathIndex = content.indexOf('math: {');
if (mathIndex !== -1) {
    const before = content.slice(0, mathIndex);
    let after = content.slice(mathIndex);

    // Replace logic for mojibake superscripts and subscripts
    after = after
        .replace(/В№вЃ°вЃ°/g, "^100")
        .replace(/ВівЃ°вЃ°/g, "^200")
        .replace(/ВІвЃ°вЃ°/g, "^200")
        .replace(/В№вЃ°/g, "^10")
        .replace(/В№вЃµ/g, "^15")
        .replace(/В№Ві/g, "^13")
        .replace(/В№вЃ¶/g, "^16")
        .replace(/вЃ№/g, "^9")
        .replace(/вЃё/g, "^8")
        .replace(/вЃ¶/g, "^6")
        .replace(/вЃµ/g, "^5")
        .replace(/вЃґ/g, "^4")
        .replace(/Ві/g, "^3")
        .replace(/ВІ/g, "^2")
        .replace(/В№/g, "^1")
        .replace(/вЃ°/g, "^0")
        // letters
        .replace(/ЛЈ/g, "^x")
        .replace(/Кё/g, "^y")
        .replace(/бµ‰/g, "^e")
        // subscripts
        .replace(/в‚Ѓ/g, "_1")
        .replace(/в‚‚/g, "_2")
        .replace(/в‚Ђ/g, "_0")
        .replace(/в‚“/g, "_x")
        // greek/symbols
        .replace(/О±/g, "\\alpha ")
        .replace(/ПЂ/g, "\\pi")
        .replace(/П‰/g, "\\omega")
        .replace(/В°/g, "°")
        .replace(/В·/g, "*");

    fs.writeFileSync(file, before + after);
    console.log('Fixed additional math characters.');
} else {
    console.log('Math section not found');
}
