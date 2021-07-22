var myArray = new Array(100);
for(var i=0;i<myArray.length;i++)
{
    if((i+1)%5 === 0 && (i+1)%3 === 0 )
     myArray[i] = 'FizzBuzz'
    else if((i+1)%3 === 0)
     myArray[i] = 'Fizz';

    else if((i+1)%5 === 0) 
     myArray[i] = 'Buzz';

    
    else
     myArray[i] = i+1;

}
for(var i=0;i<myArray.length;i++) {
console.log(myArray[i]);
}