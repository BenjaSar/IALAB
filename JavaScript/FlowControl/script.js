//Flow control
//If --  else
const uName = prompt("Por favor ingresa tu nombre");
const age = parseInt(prompt("Por favor ingresa tu edad"));

if (age >= 18) {
  console.log(`${uName}, tu edad te permite manejar`);
  alert(`${uName}, tu edad te permite manejar`);
} else {
  alert(`${uName}, tú edad no te permite manejar`);
  console.log(`${uName}, tú edad no te permite manejar`);
}

//Else -- if
const number = parseInt(prompt("Por favor ingresa un número entero"));
const number2 = parseInt(prompt("Por favor ingresa un segundo entero"));

if (number < number2) {
  console.log(`El numero ${number} es menor a ${number2}`);
} else if (number > 10) {
  console.log(`El numero ${number} ingresado es mayor a ${number2}`);
} else {
  `El numero ${number} ingresado es igual a ${number2}`;
}

//Tareas repetitivas: bucles de iteracion: for, while

//FOR
for (let i = 0; i <= 5; i++) {
  console.log("El valor de i es", i);
}

//Do-while
let number = 0;

do {
  console.log("con do while", number);
  number++;
} while (number < 1);

//While
number = 0;

while (number < 1) {
  console.log("con while", number);
  number++;
}
