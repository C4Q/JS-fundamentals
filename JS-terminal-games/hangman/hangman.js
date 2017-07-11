var fs = require('fs')
var bodyParts = ["O", "|", "/", "\\", "/", "\\"]
var [head, body, leftArm, rightArm, leftLeg, rightLeg] = [" ", " ", " ", " " , " ", " "]
var words = fs.readFileSync("./dictionary.txt", "utf8").split("\n")
var randomWord = words[Math.floor(Math.random() * words.length)]

var [input, output] = [process.stdin, process.stdout];
var guesses = 6
input.setRawMode(1);
input.setEncoding('utf8');


function updateBody() {
  switch(guesses) {
    case 5:
      head = bodyParts[0]
      break;
    case 4:
      body = bodyParts[1]
      break;
    case 3:
      leftArm = bodyParts[2]
      break;
    case 2:
      rightArm = bodyParts[3]
      break;
    case 1:
      leftLeg = bodyParts[4]
      break;
    case 0:
      rightLeg = bodyParts[5]
      break;
  }
}

function displayWord() {

}

function render() {
  var empty = '\033c'
  output.write(`   ____
  |    |
  |    ${head}
  |   ${leftArm}${body}${rightArm}
  |   ${leftLeg} ${rightLeg}
__|__` + '\n');
}

function processGuess() {

}

input.on('data', function (k) {
  if (k == 0) {
    process.exit()
  };
  console.log(typeof(k))
  guesses--
  updateBody()
  render()
  if (guesses === 0) {
    output.write("you lost :(" + "\n")
    process.exit()
  }
});

render();


// console.log(
// "   ____ "   + "\n" +
// "  |    |"    + "\n" +
// "  |    O"    + "\n" +
// "  |   /|\\"   + "\n" +
// "  |   / \\"     + "\n" +
// "__|__"
// )
