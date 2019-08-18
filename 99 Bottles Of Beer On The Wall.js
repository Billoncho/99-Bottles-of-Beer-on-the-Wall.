// A function that uses while loops to recreate the song 99 Bottles of Beer on the Wall.

var bottleCount = 100;
var bottleCountLessOne = (bottleCount - 1);

function beer() {

while (bottleCount >= 3) {

console.log(bottleCount + " bottles of beer on the wall, " + bottleCount + " bottles of beer.") 
console.log("Take one down and pass it around, " + bottleCountLessOne + " bottles of beer on the wall.")
bottleCount--;
bottleCountLessOne--;
console.log("");

}

while (bottleCount >= 2) {

console.log(bottleCount + " bottles of beer on the wall, " + bottleCount + " bottles of beer.") 
console.log("Take one down and pass it around, " + bottleCountLessOne + " bottle of beer on the wall.")
bottleCount--;
bottleCountLessOne--;
console.log("");

}

while (bottleCount >= 1) {

console.log(bottleCount + " bottle of beer on the wall, " + bottleCount + " bottle of beer.") 
console.log("Take one down and pass it around, no bottles of beer on the wall.")
bottleCount--;
bottleCountLessOne--;
console.log("");

}

while (bottleCount >= 0) {

console.log("No more bottle of beer on the wall, no more bottles of beer.") 
console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
bottleCount--;
bottleCountLessOne--;
console.log("");

}
}