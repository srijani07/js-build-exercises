var readlineSync = require('readline-sync');

function power(a,b) {
    // var temp=1;
    // if(b==0) 
    //  return 1;
    // else {
    // for(var i =1;i<=b;i++) {
    //     temp*=a;

    // }
    // return temp;
    return (Math.pow(a,b)) //using library function directly)
}
var a = readlineSync.question("Enter the base : ");
var b = readlineSync.question("Enter the power : ");
console.log(power(a,b));