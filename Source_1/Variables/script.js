console.log("let");

let a = "Piyush";
console.log(a); // Outputs: Piyush

a = 12;
console.log(a); // Outputs: 12

if (true) {
    let b = "Mustafa";
    console.log(b); // Outputs: Mustafa (inside the block)
}

console.log(b); // Error: ReferenceError: b is not defined

console.log('-----------');

console.log("var");

var c = "Mustafa";
console.log(c); // Outputs: Mustafa

if (true) {
    console.log(c); // Outputs: Mustafa (var is function or global scoped, so accessible here)
}

c = 13;
console.log(c); // Outputs: 13


console.log('-----------')

console.log("const");

const x = "Piyush";
console.log(x); // Outputs: Piyush

// Trying to reassign a const variable
// This will throw an error:
try {
    x = 12;
} catch (e) {
    console.log(e.message); // Outputs: Assignment to constant variable.
}

if (true) {
    const y = "Mustafa";
    console.log(y); // Outputs: Mustafa (inside the block)
}

console.log(y); // Error: ReferenceError: y is not defined

console.log('-----------');
