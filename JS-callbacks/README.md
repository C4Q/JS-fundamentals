# Lesson Name

---

### Objectives
- Understand callbacks in the context of advanced array methods
- Understand callbacks in the context of `setTimeOut` and `setInterval`
- Understand the importance of callbacks and when to use them

### Readings
1. - [Five Array Methods You Should Use Today (indexOf, forEach, map, filter, reduce)](http://colintoh.com/blog/5-array-methods-that-you-should-use-today)


#### Further Readings
1.
2.

#### Vocabulary
- **vocab word**: definition

---

### 1. Callbacks
Callbacks are essentially functions that are passed to another function as a parameter or argument and called or invoked within the other function.
```js
function callback() {
  console.log("im a callback")
}

function someFunction(callback) {
  callback() // the callback function gets invoked at some point in the code block
}
```

### 2. `setTimeout, setInterval`
#### `setTimeout`
The `setTimeout` function receives two arguments. The first is a callback function and the second is a number, which indicates when to invoke the callback function.
```js
setTimeout(callback, time)
setTimeout(function() {
  console.log("hello world")
}, 3000)
```
In the above example, 3 seconds after `setTimeout()` is called, `hello world` will be logged in the console.

#### `setInterval`
```js
setInterval(callback, time)
setInterval(function() {
  console.log("hello world")
}, 2000)
```
In the above example, every 2 seconds after `setInterval()` is called, `hello world` will be logged in the console.


### 3. Advanced Array Methods
#### Subtopic
#### Subtopic
#### Subtopic

### 4. Demo
- `sort`
- `reverse`
- `every`
- `some
