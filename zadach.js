//const numsArray = [1, 2, 3, 4, 5]
//let t = 1
//for (let i = 0; i < numsArray.length; i++) {
//   t = numsArray[i] * 2 * t
// }
//console.log(t);

const numsArray1 = [1, 2, 3, 4, 5]
let d = 0
let t1 = 1
while (d < numsArray1.length) {
    t1 = numsArray1[d] * 2 * t1
    d++
}
console.log(t1);

const numsArray2 = [1, 2, 3, 4, 5]
let t2 = 1
for (let index in numsArray2) {
    t2 = numsArray1[index] * 2 * t2
}
console.log(t2);


const numsArray3 = [1, 2, 3, 4, 5]
let t3 = 1
for (let el of numsArray3) {
    t3 = el * 2 * t3
}
console.log(t3);


const numsArray4 = [1, 2, 3, 4, 5]
t4 = 1
numsArray4.forEach(function (git, index) {
    t4 = git * 2 * t4
})
console.log(t4);

const people = [5, 15, 24, 12, 70, 54, 18]

let aduLtsIndex = 0
let chiLdrenIndex = 0
const aduLts = []
const chiLdren = []
for (let index = 0; index < people.length; index++) {
    if (people[index] > 18) {
    aduLts[aduLtsIndex] = people[index] 
        aduLtsIndex++
    } else {
        chiLdren[chiLdrenIndex] = people[index] 
        chiLdrenIndex++
    }   
}
console.log(aduLts);
console.log(chiLdren);


const people1 = [5, 15, 24, 12, 70, 54, 18]
const aduLts1 = []
const  chiLdren1 = []
for (let el of people1) {
    if (el > 18) {
    aduLts1.push(el) 
    } else {
        chiLdren1.push(el)
    }   
}
console.log(aduLts1);
console.log(chiLdren1);