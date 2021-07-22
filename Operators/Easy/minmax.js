var readlineSync = require('readline-sync');
var num1 = readlineSync.question("Enter the first number : ");
var num2 = readlineSync.question("Enter the second number : ");

if(num1 > num2)
 console.log(num1+" is greater than "+num2);
else if(num1 < num2)
 console.log(num2+" is greater than "+num1);
else 
 console.log('The two numbers are equal.');