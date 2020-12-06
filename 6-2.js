let fs = require('fs');
const data = fs.readFileSync('input', 'UTF-8');
const lines = data.split(/\r?\n/);

let groups = [];
let answers = 0;

let tempResponse = '';
let tempAnswerCount = 0;

lines.forEach((line) => {
    if (line.length) {
        tempResponse += ' ' + line;
        tempAnswerCount++;
    } else {
        groups.push({
            answers: tempResponse,
            count: tempAnswerCount
        });
        tempResponse = '';
        tempAnswerCount = 0;
    }
});

groups.forEach(g => {
    let letters = g.answers.replace(/ /g,"").split('');
    let letterCounts = {};

    letters.forEach(letter => {
        letterCounts[letter] = ~~letterCounts[letter] + 1;
    });

    Object.keys(letterCounts).forEach(l => {
        if(letterCounts[l] == g.count) answers++;
    });
});

console.log(answers);
