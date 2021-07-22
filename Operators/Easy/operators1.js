var readlineSync = require('readline-sync');
var num1 = parseInt(readlineSync.question("Enter the first number : \n"));
var num2 = parseInt(readlineSync.question("Enter the second number : \n"));
var num3 = parseInt(readlineSync.question("Enter the third number : \n"));
var num4 = parseInt(readlineSync.question("Enter the fourth number : \n"));
var num5 = parseInt(readlineSync.question("Enter the fifth number : \n"));

var sum = num1+num2+num3+num4+num5;
console.log("The sum of the numbers is : "+sum);