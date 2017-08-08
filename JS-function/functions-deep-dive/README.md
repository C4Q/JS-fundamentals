


# Resources


#Lecture
##Functions are everywhere
Functions are the fundamental building blocks of JavaScript programs. Functions allow us to easily reuse pieces of code in different contexts, reduce repitition, and keep our programs modular.

Functions are everywhere in JavaScript, including things like `console.log`, `prompt`, and array methods.



##Function declaration vs function expression
There are two ways od defining functions: function expressions, and function declarations. Function declarations are completely hoisted; with function expressions, only the variable gets hoisted.



##Exercises
[Scope Exercises](scope-exercises.md)

##First-class functions
Read the following: [Functions as First Class Citizens](http://ryanchristiani.com/functions-as-first-class-citizens-in-javascript/)

Then try to answer these questions:

- What does it mean for a function to be a 'first class citizen?'
- What are some other examples of first class citizens in JavaScript?

##Anonymous functions
Read the first two sections of the following: [Anonymous JS Functions](http://thoughtsonscripts.blogspot.com/2012/01/javascript-anonymous-functions.html)

And then answer the following questions:
- What's an anonymous function?
- Why would we need anonymous functions?
- What are some advantages and disadvantages of anonymity?

##The `arguments` object
Read the 'Arguments Object' section in the following article: [The Arguments Object](http://www.w3schools.com/js/js_function_parameters.asp)

- What is the `arguments` object?
- What is it generally used for?

##Exercises
[Function exercises](functions-exercises.md)

##The call stack
Functions are called in a certain order, depending on where they;re invoked. This order (known as 'the call stack') effects how our program runs, and can be traced using Chrome dev tools.

###Demo: The call stack
Enter the following in Chrome console and open dev tools:
```javascript
function one() {
	debugger;
	console.log('one');
	two();
}

function two() {
	debugger;
	console.log('two');
	three();
}

function three() {
	debugger;
	console.log('three')
	four();
}

function four() {
	debugger;		
	console.log('four')
}
```
