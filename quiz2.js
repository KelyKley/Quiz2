
//Ejercicio 2
function espacios(n){
  var s = "";
  return s;
}

function quiz2(n){
  for (var i = 0; i<n; i++){
  var s ="";
    var e = espacios(n);

  for(var j = 1; j <= n-i; j++){
    s+=j;
  }
  console.log(e+s);
}

}

quiz2(5);
