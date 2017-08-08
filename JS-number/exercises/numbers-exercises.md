### Q1. sum-four
Write a function called `sumFour` that takes in an three numbers and returns a sum of those three numbers.
```js
sumFour(2, 5, 6, 7); //returns 14
sumFour(1, 10, 100, 1000); //returns 1111
```
**Challenge: have the function work even when only two or three arguments are passed to it.**
```js
sumFour(3, 8) // returns 11
sumFour(4, 9, 11) //returns 24
```

### Q2. divide
Write a function called `divide` that takes in two numbers as arguments and returns the first number divided by the second number.
```js
divide(10, 2); //returns 5
divide(100, 10); //returns 10
```

### Q3. add-two
Write a function called `addTwo` that takes in one number as an argument and returns that number plus two.
```js
addTwo(5); //returns 7
addTwo(22); //returns 24
addTwo(3); //returns 5
```

### Q4. remainder
Write a function called `getRemainder` that takes in two numbers as arguments and returns the remainder of the first number divided by the second number.
```js
getRemainder(11, 2); //returns 1
getRemainder(105, 10); //returns 5
getRemainder(35, 11); //returns 2
```
**Challenge: Write this function using a loop without the modulo function!!!**

### Q5. string-to-int
Write a function called `stringToInteger` that takes in a string and converts it to a number.
```js
stringToNum("9"); //returns 9
stringToNum("101"); //returns 101
stringToNum("64"); //returns 64
```

### Q6. javascript-math-1
Write a function that returns true if the absolute value of the two arguments are equal and false if they are not. Use the `Math` library.

```javascript
isAbsEqual(4,-4) // returns true
isAbsEqual(-4, 4) // returns true
isAbsEqual(4, 4) // returns trie
```

### Q7. parseInt-sum
Write a function called `numStringAdder` that takes in two arguments. The arguments can be either numbers or a string of a number (in other words, the arguments can be either `2` or `"2"`, `3` or `"3"`, etc.). The function should add the two numbers together and return a NUMBER. Make sure you are returning a number, and not a string.

Examples:
```javascript
numStringAdder(2, "4"); // returns 6
numStringAdder("3", 5); // returns 8
numStringAdder("6", "1"); // returns 7
numStringAdder(1, 1); // returns 2
```

### Q8. javascript-math-2
Write a function `sumOfAbs(arr)` that receives an array of numbers and returns the sum of the absolute values of the elements within the array. Use the `Math` library.
```javascript
sumOfAbs([ 1, 1, -1, -1])  // returns 4
sumOfAbs([ 1, -2, -8, 7])  // returns 18
```

### Q9. javascript-math-3
Write a function `maxOfFour(num1, num2, num3, num4)` that takes in four numbers as input and returns the largest of these numbers. Use the `Math` library.
```js
maxOfFour(1, 2, 3, 4) // returns 4
maxOfFour(3, 24, 11, 7) // returns 24
maxOfFour(8, 39, 27, 16) // returns 39
```

### Q10. random-number-generator
Write a function that takes in a number as an argument and returns a random number between 0 and the argument number. 
```javascript
randNum(100); // 77
randNum(100); // 32
randNum(100); // 81
randNum(5); // 4
randNum(5); // 2
randNum(5); // 3
```

### Q11. javascript-math-7
Write a function `randomNumber(max)` that returns a random number in the range between 0 and the **max**. Use the `Math` library.

### Q12. javascript-math-8
You are given a function that returns a random number between **min** and **max**:

```javascript
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
```

Write a function `randomArray(size, min, max)` that returns an array of size **size** where each element is a **whole** number between **min** and **max**.

### Q13. challenge-in-rectangle
Suppose we represent a rectangle in Cartesian coordinates by an object with four properties: left and right _x_ coordinates, and the top and bottom _y_ coordinates.  Assume the left coordinate is less than the right, and the bottom coordinate less than the bottom.

For example,
```javascript
rectangle = {
  left: 4,
  right: 10,
  bottom: -2,
  top: 2
};
```

Write a function `inRectangle(x, y, rect)` that takes the _x_ and _y_ coordinates of a point, and a rectangle object as above, and returns true if the point is inside the rectangle.  If the point falls exactly on the edge of the rectangle, the function should return true.
