var readlineSync = require('readline-sync');
var n= readlineSync.question('Enter the number : ');
var count=0;

for(var i=1;i<=n;i++) {
    if(n%i==0) {
        count++;
    }
}

if(count > 2)
 console.log(n+" is not prime.");
else
 console.log(n+" is prime.");