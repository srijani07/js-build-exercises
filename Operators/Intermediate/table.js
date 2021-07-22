var readlineSync = require('readline-sync');
var n= readlineSync.question('Enter the number: ');

for(var i=1;i<=12;i++) {
    console.log(n+" * "+(i)+" = "+(n*i));
}