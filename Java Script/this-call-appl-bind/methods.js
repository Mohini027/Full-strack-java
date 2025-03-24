// this
const person = {
    firstName: "John",
    lastName: "Doe",
    details: function () {
        console.log(`Person's first name is ${this.firstName} and last name is ${this.lastName}`);
    }
};
person.details()

// call()
const user = {
    name: "Alex",
    age: 25
};
var info = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
info.call(user)

// with a parameter
const student = {
    name: "Ava",
    subjects: ["Math", "Science", "English"]
};
var fun = function (x) {
    console.log(`My name is ${this.name}. ${x}`);
}
fun.call(student, "My fav subject is Math")

// with 2 parameters
const product = {
    price: 100
};
var deal = function (a,b) {
    console.log(`${a} Product price is only RS ${this.price} ${b}`);
}
deal.call(product,"Exclusive offer!!!!!!!","till 10th")

// apply
const employee={
    id:123,
    role:"manager"
}
var emp=function(){
    console.log(`The ${this.role} id number is ${this.id}`);
}
emp.apply(employee)

// with a parameter
const playlist = {
    title: "twisted love",
    song1: "aaaaaaaaa",
    song2: "bbbbbbbbbb"
}
var song = function(z){
    console.log(`wanna know my playlist????????? ${z} ${this.title}` );
}
song.apply(playlist,["its from"])

// with 2 parameters
const birthday={
    day:25,
    month:"septemper"
}
var born=function(s,r){
    console.log(`She was born on ${this.day} ${this.month} ${s} ${r}`);
}
born.apply(birthday,["in the year",2002]) 

// bind
const car = {
    brand: "Tesla",
    model: "Model S"
}
var features= function(){
    console.log(`Did u check the new car ${this.brand} ${this.model}`);
}
const xyz=features.bind(car)
xyz()

// with a parameter
const dog={
    name:"rocky",
    breed:"poodle"
}
var type=function(d){
    console.log(`we have a ${this.breed} which is so ${d}`);
}
const abc=type.bind(dog,"cute")
abc()

// with 2 parameters
const man={
    name:"ishan",
    hobby:"cricket"
}
var intrest= function(a,b){
    console.log(`${this.name} loves to ${a} ${this.hobby} in his ${b}`);
}
const klm=intrest.bind(man,"play","free time")
klm()