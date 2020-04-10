"use strict";

//that's it. That's the commit.

// so. Strings are strings are strings, but some strings are better than others.
let string1 = "string";
let string2 = "string";

// simple enough right?
// but! We can be fancy about it. For example

let num1 = 32,
  num2 = 10;

string2 = `the meaning of the universe is ${num1 + num2}`;

console.log(string2);

// surrounding a string in backticks allows us to use a $ to
// execute statements or access variables (and I'm sure many
// other things) inside the string assignment. VV helpful.

// question (q1): Can you chain console.logs within special strings?
// also (q2): what's the actual name for that?
//   answer 2: These are template strings, and the thing we embed
//           within them is an expression
// ALSO!!! THEY CAN RUN OVER MULTIPLE LINES

string2 = `thing ${console.log("another thing")}`;
let string3 = `THIS IS A THING THAT 
IS STILL A THING IF WE PUT IT HERE`;

// answer 1: yes
// OOOOOOOH
// okay, so in this case string 3 actually retains the white space formatting,
// that to say it has line breaks when interpreted. Das hot.

// in js, null is "literally nothing" while undefined is only "not assigned"

// [one] convention suggests to use null for values which are initialized but
// have nothing in them yet.

// Question 3: does the concat operator do the silly string thing when
// one operand is a template?

let string4 = `this is a template string = ` + 3.14;

console.log(string4);

// Answer 3: yes!

// Unary plus (+"2" = 2, etc.) and negation (not sure yet) go first where
// operators are concerned

// JS newly has an exponentiation operator **
// ex:

let exp1 = 2 ** 3;

// exp1 = 8 (2^3)

// I can't see the advantage of doing this, but the comma operator evaluates
// everything from left to right then returns the last value

/*
JS has 3 types of notifications that can pop up over the page naturally:
    Alert - says a thing and makes user click okay
    Prompt - says a thing and requires user to give a value (must give a second 
    argument to act as a default if targetting ie)
    Confirm - an alert that returns a yes/no value depending on what the user 
    selected

These windows are modal (hog all interaction until dismissed), and we can't 
change their appearance.
*/

if (true) {
  /*dothing*/
}

/* Ternary operator - OKAY IT'S TIME FOR THIS H*CKER
SO: You know how it would be convenient sometimes to decide inline
which of two variable assignments we want to choose from? That's this

Syntax:
        varname = (condition) ? thisiftrue : this iffalse
    
That's it. Really not that bad.

we can also chain them like this

let varname = (condition1) ? thisifcon1 :
        (condition2) ? thisifcon2 : 
        (condition3) ? thisifcon3 :
        default;

ternary can also be used in place of normal if statements,
but this is kind of bad from a readability standpoint.
*/

// loops work as expected, for loops use let. If I don't write it I'll forget

// SCOPE FUCKERY TIME!!

let funcyvar = 15;

function funcy(x, y) {
  let funcyvar = 17;
  funcyvar = 16;
  console.log(funcyvar);
  return x + y;
}

funcy();
console.log(funcyvar);
// The declaration inside the function shadows the outer one, and any references
// to it in the function refer to that one. Thus, the outer is unchanged. Science.

/*
multi-line return statements should use the following format to avoid js' semicolon-assumption shenanigans:

return (
    thing + thing2 + ...etc...
);
*/

/*
Anonymous Functions

So this is a big one. This is a tough and slightly unusual cookie.
So. Previously we created functions using the function keyword or by doing let 
name = function() etc. 

BUT
NOW
NOW NOW NOW
THE SILLY THING: Anonymous functions

functions created without a name are called anonymous functions
They can be assigned to variables or kept in place. We can use them directly in 
place of function objects.

function() {functionbody};

that's the whole thing, but it's REALLY IMPORTANT

AND if we surround an anonymous function with parens, then add parens at the 
end, it's automatically instantiated and run. This evidently happens a lot.

This distinction is actually fairly complicated..

Function declaration: function name(params){body}

function expression: Any time a function is used like an object (including for 
purposes of assignment) 
    ex: let funcy = function(params){body};

Declarations are available immediately and everywhere in the application,
expressions functionally (...I'm sorry) don't exist until the expression
is executed. 

Declarations are available everywhere within the block they're created in 
(including before the actual declaration.)

Expressions can be assigned to global variables to make their functions available outside of that scope.
*/

/*
Arrow Functions

also highly important. Arrow functions are function expressions but shorter and 
very readable. Any time (I think) we can use a function expression we can 
instead write an arrow function like so:

    let varname = (vars) => body;

If there is only one var then we can omit the parentheses

Question: Can arrow function bodies have braces and multiple lines?
*/

let funcy4 = () => {
  console.log("line 1");
  console.log("line 2");
};

/*
Answer: Yes! But apparently we should tend to use a return statement in such 
cases. Also, arrow functions are best used for single line operations in 
general.
*/

funcy4();

// we can set a break point in the code itself using
//      debugger;

// can't nest comments so this is gonna get messy, but here's an example of
// a very usable function comment

/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */

/*
 function pow(x, n) {
  ...
}
*/

/*
Added a test script to tests/test.js which uses mocha. Seems like a cool 
utility, need to play around with it a little more and see how to make
running it a little more elegant. Otherwise, for the moment, it serves
its purpose.

*/

/*
Square brackets in object properties allow the key for the property to be 
computed outside of the object itself. For example:
*/

let boxguy = {};
let boxkey = "the key to a box";
boxguy = {
  name: "boxy",
  [boxkey]: "The box key value",
};

/*
Now we can access the boxkey property by referencing using either the boxkey
string itself, or the boxkey variable. Kinda neat.

Using square brackets in this way also allows us to do operation evaluations to
determine the key that the value should be assigned to, or references. Imagining
what this can do when des- wait does it actually run a function if we feed it
one?
*/

let return4 = () => 2 + 2;

let box2 = {
  [return4()]: "A thing that returns",
};

/*
answer is no, it doesn't actually evaluate functions
*/
/*
AH But it will if we run them ourselves... which isn't the same thing but
accomplishes the same result. So be it.
Admittedly, if the set of things inside the brackets evaluates to a string
then that string becomes the key for the property, which is neat
*/

/*
Property value shorthand
Evidently using existing variables as property names is common, so if you
provide an existing variable and no property name then the name will be 
automatically assumed to be the variable name.
eg:
*/

let boxname = "A box from a distinct part of town";
let namedbox = {
  boxname,
  value: "more than another box, probably",
};

/*
namedbox automatically has property boxname with the value supplied previously.
Clean as h*ck.
*/

/*
js *objects* are stored based on memory location, meaning that copying an 
object to another variable creates another pointer (bear with me) to that
object's location, rather than creating a new object

When an object is instantiated as a const
eg:
const user = {
    prop1,
    prop2,
    name
}

The *object being referenced* is constant, but the object's *properties* can
be changed. That is, the variable user itself cannot be changed to something 
else or pointed at a different object, but the object it's pointing to
is not constant and can be changed.

to actually copy the values of the origin object's properties, we have to loop
through them or find some other work around to skip the assignment

for one way:
let obj1 = {somestuff}
let obj2 = Object.assign({}, obj1)


Very important bit, at least for me:
Whereas python allows iterating over a collection with the following syntax
    for item in collection:
        dostuff;
    
JS requires the following:
    for(let item in collection){
        dostuff;
    }

    
*/

// I completely forgot what chapter I was on, so I'm picking up from
// javascript.info/object

let ace = {
  age: 21,
  music: true,
  good: "guy",
  yee: "haw",
  // we can start a property with multiple words, but if we do this we can only
  // access the property using square bracket notation, not with dot notation
  "music genre": "wubwubs",
};

// except eric isn't that western, so let's delete that

delete ace.yee;

console.log(ace.yee);

// it's worth noting that Eric makes a specific type of music

console.log(ace["music genre"]);

// the "in" operator tests if a property is in an object by accessing it and
// checking if the result exists by comparing to === undefined. This works,
// but it's worth noting that if we manually assign undefined to a property
// then that value will technically exist and return true for in

// HEY LOOK AT THIS ONE
// YES
// THIS LOOK AT IT LOOK AT THIS ONE IT'S IMPORTANT

// !!!!!!!!!!!!!
// OBJECTS ARE COPIED BY REFERENCE NOT VALUE
// !!!!!!!!!!!!!

// THERE IS ONLY EVER ONE INSTANCE OF AN OBJECT UNLESS YOU MANUALLY COPY IT
// not this look at the thing above it
// too far, go back
// no seriously you silly butt look uo
