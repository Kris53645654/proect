let conditions = true
//Simple if
if (conditions) {
   console.log ("That's ok");
}

//if...else...
if (conditions) {
    console.log ("That's ok");
 }else{
    console.log ("No good,man");
 }

 //if...else if...else
 if (age < 14) {
    console.log ('Baby');
 }else if (age < 18){
    console.log ('Teenager');
 }else {
    console.log ('Abult')
 }

 let gender = 'Famale'
 //Nester conditions:
if(age > 17) {
    if (gender=='Famale') {
        console.log('Mrs. ');
    }else {
        console.log ('Mister');
    }
}else{
    if (gender=='Man') {
        console.log( 'girl. ');
    }else {
        console.log ('boy');
    }
}

//Thernar operator
const greeting = (age>17 &&gender=='Famele')? 'Mrs.' : 'goodbye '
const message = (gender=='alian' || gender=='marsian') ? 'Zak-zak' : 'Hello'

const greeting1 = (age>17 &&gender=='Famele')? 'Mrs.' : 'girl.  '
const greeting2 = (age>17 &&gender=='Man')? 'Mister.' : 'boy. '

if(age>17 &&gender=='Famele') {
    console.log ('Mrs');
}
if(age<17 &&gender=='Famele') {
    console.log ('girl');
}
if(age>17 &&gender=='Man') {
    console.log ('Mister');
}
if(age<17 &&gender=='Man') {
    console.log ('boy');
}