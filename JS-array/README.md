# Lesson Name

---

### Objectives
- Access elements within an array.
- Iterate through an array.
- Manipulate arrays using built-in methods.

### Readings
1. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
2.
3.

#### Further Readings


#### Vocabulary
- **vocab word**: definition

---

### 1. Introduction to Arrays
Arrays are an extremely useful tool in storing multiple values. You can access elements within an array by bracketing their index. The first element is considered to be at the zero index. If you try to access an element at an index that is greater than the length of the array, it'll return undefined.
```js
var arr = [1, 2, 3]
arr[0] // returns 1
arr[1] // returns 2
arr[2] // returns 3
arr[3] // returns undefined
```

### 2. Array Methods
#### `.pop()`
simultaneously removes and returns the last element of an array
#### `.shift()`
simultaneously removes and returns the first element of an array
#### `.unshift()`
inserts the argument passed into the first position or front of the array
#### `.push()`
inserts the argument passed into the last position or end of the array

### 3. Looping through Arrays
The code below illustrates how to iterate through an array and print out each element using a while loop. There are three important parts to looping through an array - i like to call them the counter, test expression, and increment/decrement.
* counter - keeps track of what position we're at
* test expression - so long as the condition or test expression wrapped in parentheses is true, the code block will be executed or run
* increment/decreases - increases or decreases the value of the counter

```js
var arr = [0, 2, 4, 6, 8, 10, 12]
var i = 0 // counter
while (i < arr.length) { // test expression
  console.log(arr[i])
  i++ // increment or decrement
}
```

The code below illustrates how to iterate through an array using a for loop. You'll noticed that the same parts of a while loop will also be in a for loop.
```js
var arr = [0, 2, 4, 6, 8, 10, 12]
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
```
You'll notice that the only real difference is that the counter, test expression, and increment are all on the same line now.

### 3. Demo
- `concat`
- `find`
- `findIndex`
- `indexOf`
- `join`
- `length`
- `pop`
- `push`
- `reverse`
- `shift`
- `slice`
- `sort`
- `splice`
