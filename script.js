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


if (num > 20) {
    console.log('The num is more than 20')
} else if (num > 10) {
    console.log('The num is more than 10')
} else {
    console.log
}

let age = 35
if (age <= 18) {
    console.log('boy')
} else if (age >= 18) {
    console.log('mr')
}

let ages = 18
let gender = 'Female'
if ((ages <= 18) && (gender == 'Male')) {
    console.log('boy')
} else if ((ages >= 18) && (gender == 'Male')) {
    console.log('mr')
} else if ((ages <= 18) && (gender == 'Female')) {
    console.log('girl')
} else if ((ages >= 18) && (gender == 'Male')) {
    console.log('mrs')
}

let age2 = 15
let prefix
let gender2 = 'Female'
if (age2 > 18) {
    if (gender2 == 'Male') {
        prefix = 'Mr'
    } else {
        prefix = 'Mrs'
    }
} else {
    if (gender == 'Famale') {
        prefix = 'boy'
    } else {
        prefix = 'girl'
    }
}
console.log(prefix);


//prefix = (age > 18)
//   ? gender == 'Male' ? 'Mr.' : 'Mrs.' :
//   gender == 'Male' ? 'boy.' : 'girl.';
//console.log(prefix);

//let price
//let city = 'Moscow'

//switch (city) {
// case 'Moscow' :
//price = 10
//break;
//case 'Paris' :
//price = 8
//break;
//case 'berlin' :
//price = 9
//break;
// default:
//price = 15
//break;
//}

//console.log(`Price (${city}): $ ${price}`);

//let counter = 0
//while(counter < 11) {
//  console.log(counter);
//  counter++
//}

//for(let i = 0; i < 11; i++) {
//console.log(i)
//}

//let numOfPersons = 26 // 1 2 3...26
//let NumofChild = 0
//let NumofAdult = 0
//let agess = 1
//while( agess < numOfPersons) {
//if (agess>18) {
// NumofAdult++
// }else{
// NumofChild++
//}
//agess++
//}

//console.log('Num of Child: '+ NumofChild);
//console.log('Num of Adult: ' + NumofAdult);

// 1 2 3...26

//for( let numOfPersons = 26; agess < 26; agess++) {
//if (agess< 18) {
//NumofAdult++
//}else{
// NumofChild++
//}

//}

//let NumofChild = 0
//let NumofAdult = 0
//let arrayOfAge = [13, 12, 7, 28, 45, 63, 2]
//for (let i = 0; i < arrayOfAge.length; i++) {
//   if (arrayOfAge[i] > 18) {
//NumofAdult++
//}else{
// NumofChild++
//}

//console.log(arrayOfAge[i])
//}

//console.log('Num of Child: '+ NumofChild);
//console.log('Num of Adult: ' + NumofAdult);


//let array =(6)
//array.push(7)
//console.log(array);
//for(let index = 0; index < array.length; index++){
//array[index] =  array[index] *2
//}
//console.log(array);

// arrayOfAge = []
//for(let i = 0; i < 10; i++){
//let random = Math.floor(Math.random() *29 + 1)
//arrayOfAge.push(random)

//}
//console.log(arrayOfAge);

//let filteredArr = []
//for (let i = 0; i < arrayOfAge.length; i++) {
//let age = arrayOfAge [i]
//if (age > 17) {
//  filteredArr.push(age)
//}
//}
//console.log(filteredArr);

//let arr = [1, 2, 3, 4, 5]
//arr.forEach(function(value,index) {
//console.log(index +':' + value);
// arr[index] = value *5
//})
//console.log(arr);

let newArr = arr.map(function (value, index) {
    return value * 5
})
console.log(arr);
console.log(newArr);

let p = 1
for (let i = 8; i < 16; i++) {
    p = p * i
}
console.log('Сумма произведений равна: ' + p)

let arr6 = []
for (let d = 0; d < 12; d++) {
    arr6[d] = d + 1
}
for (let d = 0; d < 12; d++) {
    console.log(arr6[d])
}

let arr8 = [2, 5, 7, 2, 1]
let t1 = arr8[0]
for (let p = 0; p < 5; p++) {
    arr8[p] = arr8[p] / t1
    console.log(arr8[p])
}

let t = 1
let count = 0
for (let i = 1; i < 1000; i++) {
    count++
    t = t + i

}
console.log('Среднее арифметическое равно: ' + (t / count))


let arr7 = []
for (let v = 0; v < 20; v++) {
    arr7[v] = 20 - v
    console.log(arr7[v])
}

let y = [1, 4, 6, 3]
let sum2 = 0
for (let i = 0; i < 4; i++) {
    sum2 = sum2 + y[i]
}
console.log(sum2)


let u = [1, 4, 6, 3]
let mult3 = 1
for (let i = 1; i < 4; i++) {
    mult3 = mult3 * u[i]
}
console.log(mult3)





