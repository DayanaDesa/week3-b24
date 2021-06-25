function checkPrime(num){
  for (var i = 3; i < num; i++){
    if (num % i == 0){
      return false;
    }
  }
  return true;
}

for (var i = 1; i<=1000; i++){
  if(checkPrime(i)){
    console.log(i);
  }
  
}

console.log(checkPrime(11));
