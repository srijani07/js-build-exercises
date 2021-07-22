var readlineSync = require('readline-sync');
var userMonth = readlineSync.question("Enter the month (in full): \n");

if(userMonth.toUpperCase() === 'JANUARY' || userMonth.toUpperCase() === 'MARCH' || userMonth.toUpperCase() === 'MAY' || userMonth.toUpperCase() === 'JULY' || userMonth.toUpperCase() === 'AUGUST' || userMonth.toUpperCase() === 'OCTOBER' || userMonth.toUpperCase() === 'DECEMBER')
 console.log(userMonth+" has 31 days.");

else if(userMonth.toUpperCase() === 'FEBRUARY' || userMonth.toUpperCase() === 'APRIL' || userMonth.toUpperCase() === 'JUNE' || userMonth.toUpperCase() === 'SEPTEMBER' || userMonth.toUpperCase() === 'NOVEMBER')
 console.log(userMonth+" does not have 31 days.");

else
 console.log('Invalid input.')
