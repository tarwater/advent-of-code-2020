let fs = require('fs');
const data = fs.readFileSync('input', 'UTF-8');
let lines = data.split(/\r?\n/).filter(i => i.length).map(n => Number(n));

let preamble = lines.slice(0, 25);
let index = 25;

for(; index < lines.length; index++){

    let num = lines[index];
    if(isValidSum(num)){
        shiftPreamble();

    } else {
        console.log(`invalid num ${num} at index ${index}`);
        break;
    }
}

function shiftPreamble(){
    preamble.shift();
    preamble.push(lines[index]);
    // console.log("pushing " + lines[index]);
}

function isValidSum(num){

    // console.log(preamble.join(','));
    for(let i = 0; i < preamble.length; i++){
        for(let j = i + 1; j < preamble.length; j++) {
            // console.log("testing " + num + " with " + preamble[i] + " " + preamble[j])
            if(preamble[i] + preamble[j] === num){
                return true;
            }
        }
    }

    return false;
}
