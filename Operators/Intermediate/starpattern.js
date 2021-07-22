var readlineSync = require('readline-sync');
var n = readlineSync.question('Enter the number of rows : ');

var str=''
for(var i=0;i<n;i++)
{
    for(var j=0;j<=i;j++)
     str+='*'
str+='\n';
}
console.log(str);