var readlineSync = require('readline-sync');
var n= readlineSync.question('Enter the number : ');
var fact=1;
if(n==0) {
    fact=1;
}
else {
    for(var i=1;i<=n;i++) {
        fact*=i;
    }
}
console.log("The factorial of "+n+" is : "+fact);