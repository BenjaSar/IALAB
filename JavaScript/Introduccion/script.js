// alert("hello world"); ctrl+ k +c

//Number
console.log(typeof 3);
console.log(3.9);
console.log(typeof Infinity);
console.log(typeof NaN);

//Strings
console.log("Hola mi Benja");
console.log(typeof "Bienvenidos");

//Booleans
console.log(true);
console.log(typeof false);

//Null and Undefined
console.log(undefined);
console.log(typeof null);

//Expresiones: tienen algun valor de retorno
let mVariable = 4;

console.log(mVariable);

console.log(2 + 4);

function saludar() {
  return "Hola";
}

console.log(saludar());

//Declaraciones: no retornan ningun valor. Ejecutan una acción dependiendo de las declaraciones.

let variable = true;

if (variable === false) {
  console.log("Verdarero");
} else {
  console.log("Falso");
}

//Metodos del navegador
//Alert
alert("Hello world");
//Prompt
let nombre = prompt("Ingresa tu nombre");
console.log(nombre);
//Confirm
confirm("Estas seguro que deseas continuar?");

//Concatenacion
let uName = "Benjamin";

console.log("Hola" + " " + uName);

//Operadores
//Unarios (- + typeof)

console.log(typeof "Hola mundo");
console.log(+"123");
console.log(-"123");

//Binarios

console.log(2 + 3);
console.log(3 - 3);
console.log(2 * 3);
console.log(6 / 3);
console.log(7 % 3);

//Logicos
//Binarios

//Mayor y menor
console.log(2 > 3);
console.log(2 < 3);
console.log(2 >= 3);
console.log(2 <= 3);

// === y ==

console.log(2 === 2);
console.log(2 == 2);

//!== comparacion estricta: tipo y valor
console.log(2 !== 3);

//Ternary

let edad = 18;

console.log(edad >= 18 ? "Puedes manejar" : "No tienes edad para manejar");

//Operator precedence
console.log((30 + 20) / 2);

//Variables
//Palabras reservadas para declarar una variable
// var, let y const

var myVariable = 3;
let otraVariable = 3;
const otraVariableMas = 5;

console.log(myVariable);
console.log(otraVariable);
console.log(otraVariableMas);

//Template literals

const firstName = "Benjamin";
const job = "Developer";
const favouriteName = 7;

console.log(
  "Hola, soy" +
    " " +
    firstName +
    ", soy" +
    " " +
    job +
    " " +
    "y mi numero favorito es el" +
    " " +
    favouriteName
);

console.log(
  `Hola, soy ${firstName}, soy ${job} y mi numero favorito es el ${favouriteName}`
);

console.log("I'm");
