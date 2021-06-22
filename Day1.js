/// x = 10, y = 3, what is x + y
// 1) Variable - (String)
var name = "Dayana";
console.log(name);
//String Operation
var message = "Hello " + name;
console.log(message);

// 2) Variable number
var a = 10;
var b = 3;
// Number Operations
var sum = a + b;
var minus = a - b;
var product = a*b;
var div = a/b;
var modulo = a % b;
console.log(sum);
console.log(minus);
console.log(product);
console.log(div);
console.log(modulo);

// 3) Boolean
var hungry = true;
var tired = false;
// OR and AND
console.log(hungry && tired); //both need to be true for it to be true
console.log(hungry || tired); // one of it need to be true for it to be true
console.log(!hungry) // the reverse of the condition

// Condition (if else)

var age = 12;
if (age < 18){
  console.log("You cannot watch the movie");
}
else{
  console.log("You may watch the movie");
}

if (age < 13){
  console.log("You cannot watch the movie");
}
else if (age < 18){
  console.log("You can watch the movie with you parents");
}
else {
  console.log("You can watch the movie");
}

var number = 11;

if (number % 2 == 0){
  console.log( number + " is an even number");
}
else{
  console.log(number + " is an odd number");
}

var passengerAge = 43;
var oriPrice = 100;

if (passengerAge < 19, passengerAge > 65){
  console.log("The ticket price is RM" + oriPrice/2);
}
else if(passengerAge < 40){
  console.log("The ticket price is RM" + oriPrice);
}
else {
  console.log("The ticket price is RM" + oriPrice/4);
}


//For loop = Repeat 10 times...
//from... 0 until 10; each iteration add by one
for (var i = 0; i<10; i++){
  console.log(i);
}

//from 10... until 0... each iteration I will minus by one
for (var i = 10; i > 0; i --){
  console.log(i);
}

for (var i =0; i < 10; i+=2){
  console.log(i);
}

//Multiplication table challenge
var multiplier = 4;
var lines = 12

for (var i = 1; i <= lines ; i++){
  console.log(i + " x " + multiplier + " = " + (i*multiplier));
}

for (var i = 1; i<=100 ; i++){
  if (i % 5 == 0 && i % 3 == 0){
      console.log("FizzBuzz");
}
  else if (i % 5 == 0){
      console.log("Buzz");
}
  else if (i % 3 == 0){
     console.log("Fizz");
}
  else{
     console.log(i);
}
}
