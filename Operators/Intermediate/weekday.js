var readlineSync = require('readline-sync');
var day= readlineSync.question('Enter the day of the week : ');

if(day.toUpperCase === 'MONDAY' || day.toUpperCase() === 'TUESDAY'|| day.toUpperCase() === 'WEDNESDAY'|| day.toUpperCase() === 'THURSDAY' || day.toUpperCase() === 'FRIDAY') {
    console.log(day+' is weekday.');
} 

else if(day.toUpperCase() === 'SUNDAY' || day.toUpperCase() === 'SATURDAY') {
    console.log(day+' is weekend.');
} 

else {
    console.log('Invalid input.')
}