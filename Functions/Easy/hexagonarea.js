var readlineSync = require('readline-sync');

function hexagonArea(s) {
return parseFloat((3*(Math.sqrt(3))/2)*(Math.pow(s,2))).toFixed(2);

}

var side = readlineSync.question("Enter the side length of the hexagon : ");

console.log("The area is : "+hexagonArea(side)+" sq. units");