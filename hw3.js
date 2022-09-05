`use strict`;

let a = +prompt(`Enter 1st number`);
let b = +prompt(`Enter 2nd number`);

function sum() {
    const result = a + b;
    console.log(`${a} + ${b} = ${result}`);
}
sum();

function sub() {
    const result = a - b;
    console.log(`${a} - ${b} = ${result}`);
}
sub();

function mult() {
    const result = a * b;
    console.log(`${a} * ${b} = ${result}`);
}
mult();

function div() {
    const result = a / b;
    console.log(`${a} / ${b} = ${result}`);
}
div();