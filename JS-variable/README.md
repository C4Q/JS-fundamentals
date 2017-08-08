# JavaScript Variables

---

### Objectives
- Define a variable.
- Assign appropriate names to variables.
- Differentiate global and local variables.

### Readings
1. There are a number of reserved JavaScript keywords that cannot be used as a variable name. You can find them [here](https://docs.microsoft.com/en-us/scripting/javascript/reference/javascript-reserved-words) and [here](https://docs.microsoft.com/en-us/scripting/javascript/reference/javascript-future-reserved-words).

2. [JavaScript Scope](http://www.w3schools.com/js/js_scope.asp)
3.

#### Further Readings
1.
2.

#### Vocabulary
- **vocab word**: definition

---

### 1. Declaring Variables
Try as best as possible to indicate what the variable is storing within its name.
#### Subtopic
#### Subtopic
#### Subtopic


### 2. Variable Naming Conventions
Below are a few conventions or rules you should follow when naming variables.
#### Never start off the variable name with a number.
- Good
  ```js
    var $money = 1000000000
    var pokemon = "pikachu"
  ```
- Bad
  ```js
    var 9five = 95 // very not good
  ```
#### Variable names cannot have any math symbols.
- Good
  ```js
    var hello_world = "greeting"
    var pokemon = "pikachu"
  ```
- Bad
  ```js
    var five = 95 // very not good
  ```
#### Camel Casing
Camel casing is used when you are declaring a variable composed of two words or more.
- Good
Notice how the first letter of the first word(`single`)is lower-cased and the first letter of the second word(`Player`) is upper-cased.
```js
  var singlePlayer = "Oscar"
```
- Bad
```js
  var singleplayer = "Bob"
```


### 3. Pass by Value vs. Pass by Reference
#### Subtopic
#### Subtopic
#### Subtopic

### 4. Scope
##Global vs local
JavaScript variables can either be global or local. It is generally bad practice to create global variables. There is typically a single global variable that holds all other variables (e.g. `window`).

##Intro to scope

And try to answer these questions:
- What is 'scope?'
- What's the difference between global and local variables?
- How do we create local variables?
- What's the importance of using the `var` keyword?
- How do we create new scope in JavaScript?

### 5. Exercises
Instructions:
