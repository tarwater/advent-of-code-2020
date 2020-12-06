let fs = require('fs');
const data = fs.readFileSync('input', 'UTF-8');
const lines = data.split(/\r?\n/);

let groups = [];
let group = '';
let answers = 0;

lines.forEach((line) => {
    if (line.length) {
        group += ' ' + line;
    } else {
        groups.push(group);
        group = '';
    }
});

groups.forEach(g => {
    let letters = g.replace(/ /g,"").split('');
    let set = new Set(letters);
    answers += set.size;
});

console.log(answers);
