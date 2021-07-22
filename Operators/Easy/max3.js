var readlineSync = require('readline-sync');
var num1 = readlineSync.question("Enter the first number : ");
var num2 = readlineSync.question("Enter the second number (different from the first number) : ");
var num3 = readlineSync.question("Enter the third number (different from the first two numbers): ");

if(num1 > num2 && num1 > num3)
 console.log(num1+" is the greatest.");
else if(num2 > num1 && num2 > num3)
 console.log(num2+" is the greatest.");
else 
 console.log(num3+" is the greatest.");