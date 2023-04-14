let varName 
varName = 'Value'
varName = 12
varName = true
varName = null
varName = undefined

varName = {
    message: 'Hello',
    status: 200
}
console.log(varName.message);
let user1 = {
    name: 'Jo',
    email: 'test.jjhhk@bk.ru',
    age: 33

} //ObJect
varName =[1,2,3,4,5] //value type =  Array
console.log(varName [2]);
//Variables
let username
username = 'Jo'
let email = 'test.jjhhk@bk.ru'

//Old 
var old = 'Hello'

//Const
const options = {
    port: 3000,
    host: 'http://localhost',
    login:  'name'
}

//wrong!!!!
options = 'new value'

//Variables visibiliry:
let age4 = 35
if (age4 > 17) {
    let message = 'Abult'
    console.log (age4);
}else{
    let message = 'Child'
    console.log(message)
}
// wrong!!!!
console.log(message) 