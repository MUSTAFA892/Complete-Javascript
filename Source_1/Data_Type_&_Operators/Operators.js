// There are several types of operators in JavaScript

// 1. Arithmetic Operators
let a = 10
let b = 5

console.log("Addition:", a + b)      // 15
console.log("Subtraction:", a - b)   // 5
console.log("Multiplication:", a * b) // 50
console.log("Division:", a / b)      // 2
console.log("Modulus:", a % b)       // 0

// 2. Assignment Operators
let x = 20
x += 5   // same as x = x + 5
console.log("x after += 5:", x) // 25

x *= 2   // same as x = x * 2
console.log("x after *= 2:", x) // 50

// 3. Comparison Operators
let isEqual = (a == b)       // false
let isStrictEqual = (a === b) // false
let isNotEqual = (a != b)     // true

console.log("a == b:", isEqual)
console.log("a === b:", isStrictEqual)
console.log("a != b:", isNotEqual)

// 4. Logical Operators
let loggedIn = true
let hasPermission = false

console.log("AND:", loggedIn && hasPermission)  // false
console.log("OR:", loggedIn || hasPermission)   // true
console.log("NOT:", !loggedIn)                  // false

// 5. Type Operators
console.log("Type of a:", typeof a)           // number
console.log("Is person an object:", person instanceof Object) // true

// 6. Bitwise Operators (rarely used in basic JS, but included for completeness)
let bitwiseAnd = a & b
let bitwiseOr = a | b

console.log("Bitwise AND:", bitwiseAnd) // 0
console.log("Bitwise OR:", bitwiseOr)   // 15
