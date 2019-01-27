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
// .keys tells the key part of key/value pairs
console.log( '.keys returns all keys in an object: ' + Object.keys(personTemplate) );

let val1 = 15,
    val2 = 22;
// x += y is shorthand for x = x + y.
console.log(val1 += val2);

// destructuring is a JS expression to unpack values from arrays into distinct variables
let a, b, c;
[a,b,c] = [20,100,60];
console.log(a,b,c);

function parseProtocol(url) { 
    var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
    if (!parsedURL) {
      return false;
    }
    console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]
  
    var [, protocol, fullhost, fullpath] = parsedURL;
    return protocol;
  }
  console.log(parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript')); // "https"

// shorthand ternary expression
let value = 6;
value == 5 ? console.log('yes it is true') : console.log('no, it is false');

// set array
let friends = ['first','second','third','fourth','fifth'];
// WHILE LOOP: keep looping while the count variable is less that the length of friends array
let count = 0;
while( count < friends.length ){
    console.log('friends array: #'+friends[count]);
    count++;
}