var readlineSync = require('readline-sync');
var n= readlineSync.question('Enter the number of elements : ');
var a=0,b=1,temp;
for(var i=1;i<=n;i++) {
    if(i==1)
    {
        console.log(a);
    }
    else if(i==2) {
        console.log(b);
    }
    else {
        temp=a+b;
        a=b;
        b=temp;
        console.log(temp);
    }
}