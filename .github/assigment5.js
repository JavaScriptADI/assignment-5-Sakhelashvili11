//1.Function - code for performing a specific task
//2.Functional call- perform function for a code inside it
//3.code block- a single unit of code to performe some functions
//4. 
function greet (name){
  console.log('Hello,' + name);
 }       
 greet('John!');

 //5.
 function reverseString(input){
  let reverse = "";
  for (let i = input.length -1; i>=0; i--){
    reverse+=input[i];
  }
  return reverse;
 }
 console.log(reverseString("hello"));

 //6.default argument - automatically assigned to a function parameter if no argument is given
 function greet (name ="zura"){
  return `Hello, ${name}!`;
 }
 console.log(greet());
 //if an argument is not provided, parameter will be the default value
  
 //7. scope is a region where the code can be used it could be global and local.global will work untill the program exsit,local scope will work untill the execution of the function
 //8.he return statement is used to provide a value back to the function's caller
 //9.undefine
 //10.
 function foo(Z) {
 return x * 2;
}

let Z = 7;
x = foo(Z);
console.log(Z);//code was missing the return function which can be used by the rest of the program

//11.in order to change the local scope we don't need defult  bc then bar won't be affected


  //12. return value will be 20 bc 2 is less than 5 so it will make  return y + foo(y + 1) function
  function foo(y =2) {
    if (y > 5) {
      return y;
  } else {
      return y + foo(y + 1);
  }
}
console.log(foo(2));
//13.
function sumEvenNumbers(numbers) {
  let sum = 0; // Initialize the sum

  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) { 
          sum += numbers[i]; 
      }
  }

  return sum;
}

let numbers=[1,2,3,4,5,6];
let summ= sumEvenNumbers(numbers);
console.log(summ);

//14. 
function palinDrome(string){
return string === string.split('').reverse().join('');
}
console.log(palinDrome("hello"));
console.log(palinDrome("elle"));
