const num = 123;
let sum = 0;
// your code goes here
let hundreds = (num-num%100)/100
let tens = (num%100-num%10)/10
let ones = num%10
sum = hundreds+tens+ones
console.log(sum)