var input = process.stdin;
var output = process.stdout;
input.setRawMode(1);
input.setEncoding('utf8');

input.on('data', function (key) {
  console.log(key)
  if (key == 'q') {
    process.exit()
  };
});

// Instructions
// 1. comment out line 3 `input.setRawMode(1)`
// 2. comment out line 4 `input.setEncoding('utf8')`
// 3. comment out line 9 `process.exit()`
