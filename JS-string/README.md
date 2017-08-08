# Lesson Name

---

### Objectives
-
-
-

### Readings
1.
2.
3.

#### Further Readings
1.
2.

#### Vocabulary
- **vocab word**: definition

---

### 1. Overview of Strings
Strings are a JavaScript datatype. The characters in a string can be accessed in a very similar fashion as elements in an array. By bracketing in the string itself or the string variable name, you can access specific characters.
```js
var str = "string"
"string"[0] // returns "s"
str[1] // returns "t"
str[20] // returns undefined
```

#### Subtopic
#### Subtopic
#### Subtopic


### 2. Noteworthy String Methods
#### splitting

```js
var str = "string"
var splitAtI = str.split("i")
splitAtI // returns ["str", "ng"]
var strArr = str.split("")
strArr // returns ["s", "t", "r", "i", "n", "g"]
```
#### slicing and splicing
The `.slice()` and `.splice()` are similar except for one important feature. The `.splice()`
The code below lets you explore the behavior of `.slice()`
```js
var greeting = "hello world"
greeting.slice(0, 5) // returns "hello"
greeting.slice(3, 7) // returns "lo w"
greeting.slice(6, 11) // returns "world"
greeting.slice(10, 20) // returns "d"
greeting // returns "hello world"
```
The code below lets you explore the behavior of `.slice()`
```js
```

### 4. Demo
- `indexOf`
- `substring`
- `toUpperCase` / `toLowerCase`
- `charAt` / `charCodeAt`
- `split`
- `length`
