## caesar-cipher
```js
function caesarCipher(str, shift) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let encodedStr = '';

  str.split('')
     .forEach(letter => {
       if (letter === ' ') {
         encodedStr += ' ';
       } else {
         var oldIdx = alphabet.indexOf(letter);
         var newIdx = (oldIdx + shift) % 26;

         encodedStr += alphabet[newIdx];
       }
     });
  return encodedStr;
}
```
## contiguous-sum
```js
function largestSum(arr) {
    var maxSum = 0,
        currentSum = 0

    for (var i = 0; i < arr.length; i++) {
        currentSum = Math.max((currentSum + arr[i]), arr[i]);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum
}
```
## count-elements
```js
function elementCount(arr) {
  let output = [[1, arr[0]]]
  for(let i = 1; i < arr.length; i++) {
    let el = arr[i]
    if (el == output[output.length - 1][1]) {
      output[output.length - 1][0] += 1
    }
    else {
      output.push([1, el])
    }
  }
  return output
}
elementCount([2, 1])
```

## digital-root
```js
function digitalRoot(n) {
  if (parseInt(n) < 10) {
    return n
  }

  var digits = (n).toString().split('')
  var next = digits.reduce(function(a, b){
    return a + parseInt(b)
  }, 0)
  return digitalRoot(next)

}
```

## fold-cipher
```js
function foldCipher(str) {
  var output = ""
  var alphabet = "abcdefghijklmnopqrstuvwxyz"
  str.split("").forEach(function(letter) {
    output += alphabet[25 - alphabet.indexOf(letter)]
  })

  return output
}
```

## high-prod-three
```js
function highThree(arr) {
  if (arr.length <= 2) {
    throw new Error("array needs to have at least three elements")
  }
  let [first, second, third] = [0, 0, 0];
  for(let i = 0; i < arr.length; i++){
    if (arr[i] > first) {
      third = second
      second = first
      first = arr[i]
    } else if (arr[i] < first && arr[i] > second) {
      third = second
      second = arr[i]
    } else if (arr[i] < second && arr[i] > third) {
      third = arr[i]
    }
  }

  return first * second * third
}
```

## ipv4
```js
function isIPValid(str) {
  let nums = str.split('.');

  if (nums.length !== 4) {
    return false;
  }

  for (let i = 0; i < nums.length; i++) {
    let num = Number(nums[i]);
    if (num !== num || (num > 255 || num < 0)) {
      return false;
    }
  }
  return true;
}
```
[Bonus Answer](http://whatismyipaddress.com/ip-address)

## hundred-lockers
```js
function toggleLockers(n) {
  var lockers = []
  for (var x = 0; x < n; x ++) {
    lockers.push(true)
  }

  for (var y = 2; y < n; y++) {
    for(var z = y; z < n; z += y ) {
      if (lockers[z - 1]){
        lockers[z - 1] = false
      } else {
        lockers[z - 1] = true
      }
    }
  }

  var output = []

  lockers.forEach(function(locker, idx) {
    if (locker) {
      output.push(idx + 1)
    }
  })

  return output
}
```

## make-money
```js
function makeMonies(stocks) {

  var minPrice = stocks[0];
  var maxProfit = 0;

  for (var i = 0; i < stocks.length; i++) {
      var currentPrice = stocks[i];
      minPrice = Math.min(minPrice, currentPrice);
      var profit = currentPrice - minPrice;
      maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
}
```
## pair-sum
