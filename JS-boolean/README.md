# JavaScript Booleans

---

### Objectives
- Students will be able to understand what values produce a truthy or falsy value.
- Students will be able to use comparison and logical operators.

### Readings
1. [Booleans](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
2.[Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
3.[Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators)

#### Further Readings
1. [Good Blog Post](https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/)
2.

#### Vocabulary
- **vocab word**: definition

---

### 1. Introduction to Booleans
Booleans are a pretty straightforward data type and are pretty consistent throughout most languages. Think of booleans (true or false) as yes or no. Whenever using booleans, you're asking a computer a yes or no question. Depending on what the answer is, the computer will perform different actions.

#### Falsy Values
Certain values in JavaScript evaluate to `false`:
`false`, `null`, `undefined`, `0`, `NaN`, `""`

#### Subtopic


### 2. Comparison Operators
* `==`
* `===`
* `!=`
* `!==`
* `>`
* `<`
* `>=`
* `<=`


#### Subtopic
#### Subtopic
#### Subtopic


### 3. Logical Operators
There are two important logical operators.
* AND represented by &&
* OR represented by ||
* NOT represent by !
```js
(true && false) // false
(true && true) // true
(true || false) // true
(false || false) // false
(!true) // false
(!false) // true
```
#### AND operator - &&

|value A|value B|A AND B |
|:-----:|:-----:|:-----:|
| true  | true  | true  |
| true  | false | false |
| false | true  | false |
| false | false | false |

#### OR operator - ||

|value A|value B|A OR B |
|:-----:|:-----:|:-----:|
| true  | true  | true  |
| true  | false | true  |
| false | true  | true  |
| false | false | false |

#### NOT operator !
Whenever you precede any value with an exclamation, it will negate its boolean value.
```js
var hello = "hi there"
!hello // returns a falsy value b/c a string is truthy
```

### 4. Demo
- `==`
- `===`
- `>`
- `<`
- `&&`
- `||`
- `!`
