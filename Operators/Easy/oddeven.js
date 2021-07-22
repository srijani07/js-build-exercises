var readlineSync = require('readline-sync');
var num = readlineSync.question("Enter a number : \n");

if(num%2 == 0)
 console.log("It is an even number. ");

else
 console.log("It is an odd number. ");
