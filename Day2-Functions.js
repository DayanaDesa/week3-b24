// Declare a function

function sayHello(){
  console.log("Hello");
}
// Call or invoke a function

sayHello();
sayHello();
sayHello();

//Declaring a function with variable

function sayGoodbye(name){
  console.log("Goodbye " + name);
}

sayGoodbye("Dayana");
sayGoodbye("Ash");
sayGoodbye("Raj");

// Function with 2 parameters with result
function sum(a,b){
  return a+b;
}
console.log(sum(2,3));
console.log(sum(4,8));

//Function with result
function checkEven(number){
  if(number % 2 == 0){
    return true;
  }
  else{
    return false;
  }
}

console.log(checkEven(4));
console.log(checkEven(3));

// Function with multiple result

function areaVolume(width, length, height){
  return [width * length, width*length*height];
}

console.log(areaVolume(3,4,5));
