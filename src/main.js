"use strict";


function f(x, y) {
  return Math.pow(2,x) + Math.pow(3,y);
}

var resultadoConcreto = 1;
var step = 0.001;

var x_min = -10;
var x_max = 0;
var y_min = -10;
var y_max = 0;

var mejor_x = 0;
var mejor_y = 0;
var mejor_error = Infinity;

for (var x = x_min; x <= x_max; x += step) {
  for (var y = y_min; y <= y_max; y += step) {
    //Math.abs devuelve el valor absoluto
    var error = Math.abs(f(x, y) - resultadoConcreto);

    if (error < mejor_error) {
      mejor_x = x;
      mejor_y = y;
      mejor_error = error;
    }
  }
}

console.log("La mejor aproximación es x = " + mejor_x + ", y = " + mejor_y + ", con un error de " + mejor_error);

document.getElementById(
  "app"
).innerHTML = `
                <h2>2^x + 3^y = 1</h2>
                <h4>La mejor aproximación es: </h4>
                <h4>x =  ${mejor_x.toFixed(3)}</h4>
                <h4>y =  ${mejor_y.toFixed(3)}</h4>
                <h4>con un error de ${mejor_error}</h4>`;
