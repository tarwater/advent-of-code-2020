let fs = require('fs');
const data = fs.readFileSync('input', 'UTF-8');
let lines = data.split(/\r?\n/).filter(i => i.length);

let acc = 0;
let instructionsDone = [];
let index = 0;

lines.forEach((line, i) => {
    if(!line.length) return;
    lines[i] = line.split(" ");
});

let fullyExecuted = false;
let swappedOn = null;

while (!fullyExecuted) {

    while (!instructionsDone.includes(index)) {

        if(index >= lines.length){
            console.log("END REACHED");
            fullyExecuted = true;
            break;
        }

        instructionsDone.push(index);
        let instruction = lines[index][0];

        if (instruction.indexOf("acc") !== -1) {
            acc += Number(lines[index][1]);
        } else if (instruction.indexOf("jmp") !== -1) {
            index += Number(lines[index][1]);
            continue;
        }
        index++;
    }

    console.log('program ended on line ' + index + " with acc at " + acc);
    swapNextInstruction();

    acc = 0;
    instructionsDone = [];
    index = 0;


}

function swapNextInstruction(){

    for(let i = 0; i < lines.length; i++){
        if(swappedOn === null || i > swappedOn){
            if(lines[i][0].indexOf("nop") !== -1 || lines[i][0].indexOf("jmp") !== -1 ){
                swapLine(swappedOn, i);
                swappedOn = i;
                break;
            }
        }
    }
}

function swapLine(idx1, idx2){

    if(idx1 !== null){

        let l1 = lines[idx1];

        if(l1[0].indexOf("nop") !== -1){
            l1[0] = l1[0].replace("nop", "jmp");
        } else {
            l1[0] = l1[0].replace("jmp", "nop");
        }
    }

    let l2 = lines[idx2];

    if(l2[0].indexOf("nop") !== -1){
        l2[0] = l2[0].replace("nop", "jmp");
    } else {
        l2[0] = l2[0].replace("jmp", "nop");
    }

}

