let fs = require('fs');
const data = fs.readFileSync('input', 'UTF-8');
const lines = data.split(/\r?\n/);

let rules = {};

lines.forEach(line => {
    if(!line.length) return;
    line = line.replace(/bags/g, "")
        .replace(/bag/g, "")
        .replace('.', "");
    line = line.split('contain');
    let container = line[0].trim();
    rules[container] = line[1].split(',').map(i => i.trim());
});

let list = [];

let bags = 0;

function getInnerBags(bag){
    Object.keys(rules).forEach(container => {
        if(bag === container){
            let contents = rules[container];

            console.log(container + " holds ");
            contents.forEach(innerBag => {
                if(innerBag === "no other") return;
                let count = Number(innerBag.charAt(0));
                bags += count;
                innerBag = innerBag.replace(/\d/,"").trim();
                for(let i = 0; i < count; i++){
                    getInnerBags(innerBag)
                }
            })
        }
    });
}

getInnerBags("shiny gold");
console.log(bags);
