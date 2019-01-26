// variables
let firstName = "Bobby",
    lastName = "Brown";
// const, modern var, unchanging
const fullName = "Bobby Brown";
// let, modern var. var is function scoped, and let is block scoped
let person = {
    age: "29",
    dob: "01/01/01"
};
// array
let listStuff = [ 'yes', 'no', 'maybe'];

let personTemplate = {
    firstName: "Bobby",
    lastName: "Brown",
    age: 20
};

let val1 = 15,
    val2 = 22;

// x += y is shorthand for x = x + y.
console.log(val1 += val2);

// .keys tells the key part of key/value pairs
console.log( Object.keys(personTemplate) );