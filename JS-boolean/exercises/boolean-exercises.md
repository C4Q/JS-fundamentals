### Q1. Truthy or Falsy
Write a function `evaluator` that receives one argument and returns `it is truthy` if it is a truthy value and `it is falsy` if it is a falsy value.

```js
evaluator(8) // returns "it is truthy"
evaluator(NaN) // returns "it is falsy"
evaluator("string") // returns "it is truthy"
evaluator(false)// returns "it is falsy"
evaluator(null) // returns "it is falsy"
evaluator(true) // returns "it is truthy"
evaluator(undefined)// returns "it is falsy"
```

### Q2. Comparing values that are not numbers
What do the statements below return? Explain why.
```js
"hello" > "world"
undefined < null
```

### Q3. == vs === DUN DUN DUN
What the statements below return? Which ones were most surprising?
1.
```js
"9" == 9
"9" === 9
```
2.
```js
NaN === NaN
NaN == NaN
```
3.
```js
undefined == undefined
undefined === undefined
```
4.
```js
null == null
null === null
```
5.
```js
var a = "string"
var b = "string"
a == b
a === b
```
6.
```js
var arr1 = ['a', 'b']
var arr2 = ['a', 'b']
arr1 == arr2
arr1 === arr2
```

### Q4. AND Operator Return Value
Evaluate the following statements in a console:
```js
"hello" && false
NaN && "world"
undefined && true
8 && "meow"
5 && 9

```
Judging from the results of the statements, what is the behavior of the && operator? When does it return the left side? When does it return the right side?

### Q5. OR Operator Return Value
Evaluate the following statements in a console:
```js
"hello" || false
NaN || "world"
undefined || true
8 || "meow"
5 || 9

```
Judging from the results of the statements, what is the behavior of the || operator? When does it return the left side? When does it return the right side?
