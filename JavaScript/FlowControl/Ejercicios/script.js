//EJERCICIOS
//Author: FS

//Triángulos de #
let char = "";
const number = parseInt(
  prompt("Por favor introduzca un numero de repeticiones")
);
const number2 = parseInt(
  prompt("Por favor introduzca un segundo número de repeticiones")
);

for (let i = 1; i < number; i++) {
  for (let j = 1; j < number2; j++) {
    if (i <= j) {
      char = char.concat("#");
    } else {
      char = char.concat(" ");
    }
  }
  char = char.concat("\n");
}

console.log(char);

//Numeros pares e impares
let number3 = parseInt(prompt("Ingrese un numero"));

for (let i = 0; i <= number3; i++) {
  if (i % 2 == 0) {
    console.log(`El ${i} es par`);
  } else {
    console.log(`El ${i} es impar`);
  }
}

//Fizzbuzz
// Iteracion desde  1 hasta el número ingresado
let number4 = parseInt(prompt("Ingrese un nnúmero"));
let i = 0;
while (i <= number4) {
  if (i % 3 == 0) {
    console.log(`El numero ${i} es múltiplo de 3. Fizz`);
  } else if (i % 5 == 0) {
    console.log(`El número ${i} es múltiplo de si. Buzz`);
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log("Fizz Buzz");
  } else {
    console.log([`${i}`]);
  }
  i++;
}
