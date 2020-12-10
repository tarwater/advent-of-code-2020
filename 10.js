let fs = require('fs');
const data = fs.readFileSync('input', 'UTF-8');
let lines = data.split(/\r?\n/).filter(i => i.length).map(n => Number(n)).sort((a, b) => a - b);

lines.unshift(0);

let memo = {};

function recurse(position) {
    if(position === lines.length - 1 ){
        return 1;
    }

    if(memo[position] !== undefined){
        return memo[position];
    }

    let validOptions = findCandidates(position);
    let totals = 0;

    validOptions.forEach(pos => {
        totals += recurse(pos);
    });

    memo[position] = totals;

    return totals;
}

let ways = recurse(0);
console.log(ways);

// find all possibilites 1 - 3 higher
function findCandidates(index) {

    let arr = [];
    let val = lines[index];

    lines.forEach((item, i) => {

        if(i <= index) return;

        let diff = item - val;
        if (diff <= 3 && diff > 0) {
            arr.push(i);
        }
    });

    return arr;
}
