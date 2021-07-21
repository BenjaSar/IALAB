//Functions

//Declaracion de la funcion
function sum(num1, num2) {
  //Cuerpo de la función
  console.log((sum = num1 + num2));
}

//Invocar la función (llamada de la función). Se pasan los argumentos en la llamada de la funcion
sum(4, 5);

//Functions structure
//Function + nombre + parameters + curlybraces

//Function declaration
function sayHello(name) {
  return console.log(`Hola ${name}`);
}

sayHello("Benjamin");

//Function expression => Declaracion de función anónima: La función no tiene nombre, se le asigna una variable.
const sayHello = function (name) {
  return console.log(`Hola ${name}`);
};

//Arrow function
const sayHello = (name) => {
  return console.log(`Hola ${name}`);
};

//Arrow function con return implicito. Se utiliza con una sola línea de código para ejecutar
const sayHeloo = (name) => console.log(`Hola ${name}`);

//Return
function sayHello() {
  return "Hola mundo";
}

console.log(sayHello());

//Return
//Declaracion función anónima
const result = (num1, num2) => {
  return num1 + num2;
};

//Invocación de la funcion
console.log(result(4, 5) + 10);
