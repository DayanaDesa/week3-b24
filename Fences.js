
var lines = 10;

for (var j=0; j< lines; j++){
for (var i=0; i< lines; i++){
  if ( (i + j) % 2 == 0 ){
  document.write("#");
}
  else{
    document.write("0");
}
  
}
  document.write("<br/>");
}
