let fs = require('fs');
const data = fs.readFileSync('input', 'UTF-8');
let lines = data.split(/\r?\n/).filter(i => i.length).map(n => Number(n));
let target = 776203571;

lines = lines.filter(n => n < target);

let front = 0;
let back = 1;

while(front < back){

    let sum = sumArray();

    if(sum === target){
        console.log('FOUND');
        let finalArr = lines.slice(front, back + 1).sort((n1, n2) => n1 - n2);
        console.log(finalArr.shift() + finalArr.pop());
        break;
    } else if(sum < target){
        back++;
    } else {
        front++;
    }
}

function sumArray(){
    let arr = lines.slice(front, back + 1);
    return arr.reduce((acc, c) => acc + c);
}
