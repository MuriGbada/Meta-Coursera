// some string functions

var greet = "Hello, ";
var place = "World";

// length
var a = greet.length; // 7
console.log(a);

greet.charAt(0); //'H'

// concat
"Wo".concat("rl").concat("d"); // 'World'

// indexOf will return the index of the first position match
"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2
// lastIndexOf will return the last match

//split
"ho-ho-ho".split("-");

// upper and lower case
greet.toUpperCase(); // "HELLO "
greet.toLowerCase(); // "hello "