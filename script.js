"use strict";

//that's it. That's the commit.

// so. Strings are strings are strings, but some strings are better than others.
let string1 = 'string';
let string2 = 'string';

// simple enough right?
// but! We can be fancy about it. For example

let num1 = 32, num2 = 10;

string2 = `the meaning of the universe is ${num1 + num2}`

console.log(string2)

// surrounding a string in backticks allows us to use a $ to
// execute statements or access variables (and I'm sure many
// other things) inside the string assignment. VV helpful.

// question (q1): Can you chain console.logs within special strings?
// also (q2): what's the actual name for that?
//   answer 2: These are template strings, and the thing we embed
//           within them is an expression
// ALSO!!! THEY CAN RUN OVER MULTIPLE LINES

string2 = `thing ${console.log('another thing')}`;
let string3 = 
`THIS IS A THING THAT 
IS STILL A THING IF WE PUT IT HERE`


console.log(string3);
// answer 1: yes
// OOOOOOOH
// okay, so in this case string 3 actually retains the white space formatting,
// that to say it has line breaks when interpreted. Das hot.

// in js, null is "literally nothing" while undefined is only "not assigned"

// [one] convention suggests to use null for values which are initialized but 
// have nothing in them yet.
