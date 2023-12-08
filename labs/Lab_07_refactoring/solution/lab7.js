//задание 1
console.log("задание 1");

let fst = prompt('var one');
let snd = prompt('var two');

fst === snd ? console.log('equally') : console.log('different');

let thrd = 'world';
let sum = fst + snd;

console.log(sum);

//задание 2
var f = new Array('apple', 'strawberry', 'blueberry', 'raspberry', 'lemon');

for(let i = 0; i < f.size(); i++)
{
    if(f[i] === 'apple') console.log(f[i]) + ' green';
    else if(f[i] === 'strawberry') console.log(f[i]) + ' red';
    else if(f[i] === 'blueberry') console.log(f[i]) + ' blue';
    else if(f[i] === 'raspberry') console.log(f[i]) + 'light red';
    else console.log(f[i]) + 'yellow';
}

//задание 3
