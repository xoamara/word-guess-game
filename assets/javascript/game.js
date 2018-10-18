// need array of words

var lotr = ["gollum", "elrond", "frodo", "legolas", "boromir", "galadriel", "saruman", "mithrandir", "gandalf", "arwen", "stryder", "treebeard", "pippin", "eowyn", "faramir", "wormtongue"];

var wins = 0;
var remaining = 12;
var alreadyGuessed = [];
var arrayLength = lotr.length;


document.onkeyup = function(event) {
  var letter = event.key.toLowerCase();
  console.log(letter);
} 

for (var i = 0; i < arrayLength; i++) {
  (Array.from(lotr[i]));
  console.log(Array.from(lotr[i]));
} 

// if (condition) {
  
// } else {
  
// }


remaining.textContent = "You have " + remaining + " guesses left."





// for (var i = 0; i < arrayLength; i++) {
//   console.log(Array.from(lotr[i]));
// } if (letter.indexOf(lotr).pushTo(alreadyGuessed));
// console.log(alreadyGuessed)
