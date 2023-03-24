//@ts-check
//console.log('Hello word');
//const h1 = document.querySelector('h1')
//console.log(h1)
let user = 'John'
let user2
//...
user2 = 'John'
const user3 = 'Bob'

let num = 34.34567
let string = 'Hello world'
let boolean = true //false
let Null = null
let Undefined = undefined
let symbol = Symbol('First symbol')


if (num>20) {
    console.log('The num is more than 20')
} else if (num>10) {
    console.log('The num is more than 10')
} else {
    console.log
}

let age = 35
if (age <=18) {
    console.log('boy')
} else if (age >=18) {
    console.log('mr')
}

let ages = 18
let gender = 'Female'
if ((ages <=18) && (gender=='Male')) {
    console.log('boy')
} else if ((ages >=18) && (gender=='Male')) {
    console.log('mr')
} else if ((ages <=18) && (gender=='Female')) {
    console.log('girl')
} else if ((ages >=18) && (gender=='Male')) {
    console.log('mrs')
}

let age2 = 35
let prefix
let gender2 = 'Female'
if (age2 > 18) {
    if (gender2=='Male') {
        prefix = 'Mr'
    } else {
        prefix = 'Mrs'
    }
} else {
    if (gender=='Male') {
        prefix = 'boy'
    } else {
        prefix = 'girl'
    }
}
console.log(prefix);

