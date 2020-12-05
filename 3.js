let fs = require('fs');
const data = fs.readFileSync('input', 'UTF-8');
const lines = data.split(/\r?\n/);

let map = [];

lines.forEach(line => {
   map.push(line.split(''));
});

let trees = [];
let position = {x: 0, y: 0};

traverse({x: 1, y: 1});
traverse({x: 3, y: 1});
traverse({x: 5, y: 1});
traverse({x: 7, y: 1});
traverse({x: 1, y: 2});

console.log(trees.reduce((acc, curr) => acc * curr));
console.log(trees);

function traverse(slope) {
    let treeCount = 0;
    while(position.y < map.length){

        position.x += slope.x;
        position.y += slope.y;

        if(position.x >= map[0].length){
            increaseMap();
        }

        if(position.y >= map.length){
            break;
        }

        if(map[position.y][position.x] === '#'){
            treeCount++;
        }
    }

    trees.push(treeCount);
    position = {x: 0, y: 0};
}

function increaseMap(){
    for(let i = 0; i < map.length; i++){
        map[i] = [...map[i], ...map[i]]
    }
}

