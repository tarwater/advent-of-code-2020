let fs = require('fs');
const data = fs.readFileSync('input', 'UTF-8');
const lines = data.split(/\r?\n/);

let seats = [];

lines.forEach(line => {
    if(line.length === 0) return;
    let id = getID(line);
    seats.push(id);
});

seats = seats.sort((a, b) => a - b);

for(let i = 0; i < seats.length - 1; i++){
    let nextSeat = seats[i + 1];
    if(nextSeat - seats[i] === 2){
        console.log('my seat is: ' + (seats[i] + 1));
    }
}

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
