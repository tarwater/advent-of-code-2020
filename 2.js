let fs = require('fs');
const data = fs.readFileSync('input', 'UTF-8');
const lines = data.split(/\r?\n/);

let valid = 0;

for (let i = 0; i < lines.length; i++) {
    if (!lines[i]) continue;

    let split = lines[i].split(" ");
    let p1 = Number(split[0].split("-")[0]) - 1;
    let p2 = Number(split[0].split("-")[1]) - 1;

    let password = split[2];
    let letter = split[1].charAt(0);

    let match = false;

    if(password.charAt(p1) == letter) match = !match;
    if(password.charAt(p2) == letter) match = !match;

    if(match) valid++;
    //
    // let counts = charCount(password);
    //
    // if(counts[letter] >= min && counts[letter] <= max){
    //     valid++;
    // }
}

console.log(valid);

function charCount(pswd) {

    let map = {};

    pswd.split('').forEach(c => {
        map[c] = ~~map[c] + 1;
    });

    return map;
}
