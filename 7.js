let fs = require('fs');
const data = fs.readFileSync('input', 'UTF-8');
const lines = data.split(/\r?\n/);

let rules = {};

lines.forEach(line => {
    if(!line.length) return;
    line = line.replace(/bags/g, "")
        .replace(/bag/g, "")
        .replace(/\d/g, "")
        .replace('.', "");
    line = line.split('contain');
    let container = line[0].trim();
    rules[container] = line[1].split(',').map(i => i.trim());
});

let list = [];

function getContainer(target){
    Object.keys(rules).forEach(container => {
        let contents = rules[container];

        contents.forEach(inner => {
            if(inner.indexOf(target) !== -1){
                console.log(container + " holds " + inner);
                list.push(container);
                getContainer(container);
            }
        })
    });
}

getContainer("shiny gold");
console.log(new Set(list).size);
