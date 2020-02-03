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

console.log(string4)

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

if (true) {/*dothing*/}

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

function funcy() {
    let funcyvar = 17;
    funcyvar = 16;
    console.log(funcyvar);
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
    console.log('line 1');
    console.log('line 2');
};

/*
Answer: Yes! But apparently we should tend to use a return statement in such 
cases. Also, arrow functions are best used for single line operations in 
general.
*/

funcy4();

// we can set a break point in the code itself using 
//      debugger;

