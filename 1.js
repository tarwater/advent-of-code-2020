let fs = require('fs');
const data = fs.readFileSync('input', 'UTF-8');
const lines = data.split(/\r?\n/);

for(let i = 0; i < lines.length; i++){
    for(let j = 1; j < lines.length; j++) {
        if(i === j) continue;
        for(let k = 2; k < lines.length; k++){
            if(i === k) continue;
            if(j === k) continue;

            let val1 = Number(lines[i]);
            let val2 = Number(lines[j]);
            let val3 = Number(lines[k]);

            if(val1 + val2 + val3 === 2020){
                console.log(val1 * val2 * val3);
                return;
            }
        }

    }
}
