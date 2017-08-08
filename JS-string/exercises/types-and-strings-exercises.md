### Q1. concat-strings
Write a function called `concatStrings` that takes in two strings as arguments and returns the two strings joined together with a space between.

```js
concatStrings("hello", "goodbye"); //returns "hello goodbye"
concatStrings("this is the beginning", "of a sentence"); //returns "this is the beginning of a sentence"
```

### Q2. string-first-letter
Write a function called `firstLetter` that takes in a string as an argument and returns the first letter of the string.

```js
firstLetter("is it tomorrow or just the end of time?"); //returns "i"
firstLetter("gotta catch 'em all"); //returns "g"
```

### Q3. string-last-letter
Write a function called `lastLetter` that takes in a string as an argument and returns the last letter of the string.

```js
lastLetter("is it tomorrow or just the end of time?"); //returns "?"
lastLetter("gotta catch 'em all"); //returns "l"
```

### Q4. word-to-array
Write a function called `wordToArray` that takes in a string as an argument and returns an array that contains all of the letters of that word without using the built-in string method `.split()`.

```js
wordToArray("dog"); //returns ["d", "o", "g"];
wordToArray("pikachu"); //returns ["p", "i", "k", "a", "c", "h", "u"];
```

### Q5. sentence-to-array
Write a function called `sentenceToArray` that takes in a string as an argument and returns an array that contains all of the words in that string. **challenge: do not use string.split()**

```js
sentenceToArray("castles made of sand melt into the sea eventually"); //returns ["castles", "made", "of", "sand", "melt", "into", "the", "sea", "eventually"];
sentenceToArray("they tumble blindly as they make their way across the universe"); //returns ["they", "tumble", "blindly", "as", "they", "make", "their", "way", "across", "the", "universe"];
```

### Q6. is-empty-string
Write a function to check if an input is an empty string. If the input is an empty string it should return true, otherwise it should return false. However if the input is NOT a string (in other words, if the input is a number, or an array, etc.), the function should also return false.

```javascript
isEmptyString('') // returns true
isEmptyString('this is a string') // returns false
isEmptyString(99) // returns false
```

### Q7. count-the-vowels
Write a function that accepts a string as a parameter and counts the number of vowels within the string (vowels include a, e, i, o , u - don't count 'y'). The function should return the number of vowels in the string.

```javascript
vowelCount('test string'); // returns 2
vowelCount('longer string with more vowels'); // returns 8
```

### Q8. capitalize-first-letters-of-string
Write a function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
```js
capFirstLetter('hello world') // returns 'Hello World'
capFirstLetter('the quick brown fox') // returns 'The Quick Brown Fox'
```

### Q9. cut-a-string-at-character

Write a function to return a part of string after a specified character. The function should take two arguments, the first being the string, and the second being the character. The function should return only the part of the string that comes AFTER the specified character. In other words, the function should chop the string into two parts and return only the part that comes after the specified character.

Examples:
```javascript
subStrAfterChars('this is a test string', 'a') // returns " test string"
subStrAfterChars('this is another test', 'o') // returns "ther test"
```

### Q10. upper-lower-string

Write a function that takes a string and capitalizes every even indexed letter. Similarly, every off indexed letter should be lower case.

Examples:
```javascript
upperLower('elephant');  // returns 'ElEpHaNt'
upperLower('BANANA');    // returns 'BaNaNa'
```

### Q11. truncate-a-string

Write a function to truncate a string if it is longer than the specified number of characters. The function should take two arguments, the first argument being the string and the second argument being the number of characters to truncate the string by. Truncated strings should end with an ellipsis sequence ("…"). If the specified number is large than the length of the string, the entire string should be returned.

Example outputs:
```javascript
text_truncate('We are doing JS string exercises', 19)); // returns "We are doing JS ..."
text_truncate('This is a short sentence', 100)); // returns "This is a short sentence"
```

### Q12. xo's

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

Example outputs:
```javascript
XO("ooxx")    // returns true
XO("xooxx")   // returns false
XO("ooxXm")   // returns true
XO("zpzpzpp") // returns true because zero 'x's and 'o's are present
XO("zzoo")    // returns false
```

### Q13. unique-characters-in-string

Write a function called `checkUnique` that takes in a string as an argument and checks if the string has all unique characters. In other words, the function should check to make sure there are no duplicate characters in the string. If the string's characters are all unique, the function should return `true`. Otherwise it should return `false`.

Examples:
```js
checkUnique("fireman"); //returns true
checkUnique("hello"); //returns false
checkUnique("abcdefgh"); //returns true
checkUnique("aabbccdd"); //returns false
```

### Q14. string-rotation

Assume you have a function called `isSubstring` which checks if one word is a substring
of another. Given two strings, s1 and s2, write a function called `isRotated` to check if s2 is a rotation of s1 using only one call to `isSubstring` (e.g., "waterbottle" is a rotation of "erbottlewat").

Examples:
```js
isRotated("waterbottle","erbottlewat" ); //returns true
isRotated("waterbottle","bottlerewat" ); //returns false
isRotated("dragon","agondr" ); //returns true
isRotated("dragon","dog" ); //returns false
```
