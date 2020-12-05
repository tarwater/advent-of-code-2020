let fs = require('fs');
const data = fs.readFileSync('input', 'UTF-8');
const lines = data.split(/\r?\n/);

let maxID = 0;

lines.forEach(line => {
    if(line.length === 0) return;
    let id = getID(line);
    maxID = Math.max(id, maxID);
});

console.log(maxID);

function getID(key) {
    let row = getRow(key);
    let col = getCol(key);
    return row * 8 + col;
}

function getRow(str){
    let rowString = str.slice(0, 7);
    rowString = rowString.replace(/F/g, '0');
    rowString = rowString.replace(/B/g, '1');
    return parseInt(rowString, 2);
}

function getCol(str) {
    let colString = str.slice(7);
    colString = colString.replace(/L/g, '0');
    colString = colString.replace(/R/g, '1');
    return parseInt(colString, 2);
}
