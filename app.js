//constantes globales

const express = require("express");
const app = express();
const ejs = require("ejs");
const port = 7777;

//variables globales
var globalVariable = "Esta es una variable global";

// crear view engine

app.set("view engine", "ejs");

//function

function myfunction() {
  //var local
  var localVariable = "Esta es una variable local";

  console.log(localVariable);
  console.log(globalVariable);

  return globalVariable;
}

function sumar() {
  var x = 99;
  var y = 2345;

  var z = (x * y) / 25;

  return z;
}

function random() {
  var ran = Math.floor(Math.random() * 4);
  console.log(ran);
  var result3;
  switch (ran) {
    case 0:
      result3 = "Fresa";
      break;
    case 1:
      result3 = "Papaya";
      break;
    case 2:
      result3 = "Banano";
      break;
    case 3:
      result3 = "Pera";
      break;
    default:
      console.log("Wrong answer");
      break;
  }
  // termina switch

  return result3;
}

function multiply() {
  let a = 23;
  let b = 32;

  let r = a * b;

  return r;
}

function frases() {
  let j = "Hola";
  let k = " Mundo!!";

  let concat = j + k;

  return concat;
}

//erutamiento donde se ejecuta el codigo

app.get("/", (req, res) => {
  const result = myfunction(); //return
  const result2 = sumar();
  const result3 = random();
  const result4 = multiply();
  const result5 = frases();
  res.render("index", { result, result2, result3, result4, result5 });
});

app.listen(port, () => {
  console.log("Servidor escuchando en el puerto http://localhost:" + port);
});
