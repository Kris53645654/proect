const numsArray = [1, 2, 3, 4, 5]
//Write a sum of array 
let t = 0
for (let n = 0; n < numsArray.length; n++) {
    t = t + numsArray[n]
}
console.log(t);

let sum = 0
for (let el of element) {
    sum = sum + el
}
console.log(sum);

// let n = 30
// let primal = []
// if (n > 0) {
//     let number = 1
//     while (primal.length < n) {
//         //loop
//         let isPrimal = true
//         for (let i = 2; i < number - 1; i++) {
//             if (number % i == 0) isPrimal = false
//         }
//         if (isPrimal) primal.push(number)
//         number++
//     }
// }
// console.log(primal)

let filbo = [0, 1]
let n = 10
let lastElem = filbo[filbo.length - 1]
if (n > 2) {
    while (filbo.length < n) {
        filbo.push(filbo[filbo.length - 1] + filbo[filbo.length - 2])
    }
}
console.log(filbo)

//factorial => n!
//8! = 1*2*3*4*5*6*7*8
let n1 = 5
let c = n1
if (n1 > 0)
    for (let i = 1; i < c; i++) {
        n1 = n1 * i
    }
console.log(n1)

let n3 = 5
if (n3 > 0) {
    let mult = 1
    for (let i = 1; i <= n3; i++) {
        mult = mult * i
    }
}
console.log(mult)

