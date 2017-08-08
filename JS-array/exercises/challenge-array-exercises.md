## caesar-cipher
Write a function that performs the [Caesar Cipher](https://learncryptography.com/classical-encryption/caesar-cipher). The function caesarCipher should receive two arguments: a string and a number. The number specifies how many letters to shift the string by.

```js
caesarCipher("hello", 1) // returns "ifmmp"
caesarCipher("dog", 3) // returns "grj"
```

## contiguous-sum
Given an array of integers, find the largest sum of a contiguous subarray.
```js
largestSum([6, 4, -8, 7]) // returns 10 b/c the [6, 4] summed is the largest
largestSum([6, 4, -8, 7, 5]) // returns 14 b/c adding all the elements produces the largest sum
```

## count-elements
Write a function that reads an array and outputs an array of arrays describing the number of each element in the array.

```js
elementCount([2, 1]) == [[1, 2], [1, 1]]
elementCount([1, 2, 1, 1]) == [[1, 1], [1, 2], [2, 1]]
elementCount(['a', 'a', 'c', 'd', 'e']) == [[2, 'a'], [1, 'c'], [1, 'd'], [1, 'e']]
```

## digital-root
Write a function `digitalRoot` that receives a number and sums each digit until the sum is less than 10.
```js
digitalRoot(121) // returns 4
digitalRoot(746) // returns 17
digitalRoot(6598) // returns 1
```

## fold-cipher
Implement the Folding Cipher. It folds the alphabet in half and uses the adjacent letter. Ie. a <=> z, b <=> y, c <=> x, m <=> n.

```js
foldCipher("abc") // returns "zyx"
```

## high-prod-three
Write a function `highThree` that receives an array of positive numbers and returns the product of the largest three numbers in the array.
```js
highThree([4, 1, 6, 2, 3, 5]) // returns 120
highThree([11, 3, 20, 1]) // returns 660
```

## ipv4
Write a function that receives a string and outputs whether the string is a valid IPv4 address. Anything between 0.0.0.0 and 255.255.255.255 would return true. **Bonus: What is an IPv4 address?**
```js
isIPValid("195.2.43.5") // returns true
isIPValid("0.4.521.3") // returns false
```

## hundred-lockers
There are 100 open lockers. You close every 2nd locker (so the 2nd, 4th, 6th, ... 100th are all closed). Then, you go to every third locker and open it if it is closed and close it if it is open. You proceed to toggle every nth locker on pass number n. So, for example, on pass number 16 – you will toggle every 16th locker. After your hundredth pass of the hallway, in which you toggle only locker number 100, what lockers are open?

## make-money
Write a function `makeMonies` that receives an array of stock prices throughout the course of the day and returns the maximum profit that could have been made. The indices of the array correspond to different times of the day. Shorting is not an option. The index or time that you buy into the stock has to be smaller or earlier than the index or time you sell the stock. What is the time complexity of your solution?
```js
makeMonies([20, 14, 10, 16, 22, 18]) // returns 12 b/c buy @ 10 & sell @ 22
makeMonies([19, 24, 18, 12, 15, 30]) // returns 18 b/c buy @ 12 & sell @ 30
```

## pair-sum
Given an array of integers and a value k, return all pairs that sum up to a specified value k. List the pairs in [min, max] order.

```js
pairSum([1, 1, 2, 3, 0], 3) // returns [[1, 2], [1, 2], [3, 0]]
pairSum([2, 4, 3, 5, 1, 9, 7, 6], 7) // returns [[2, 5], [4, 3], [1, 6]]
```
