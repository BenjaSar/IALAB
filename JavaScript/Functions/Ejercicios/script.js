//Functions
// Programa que devuelve un numero indicando si es positivo, negativo o cero

function typeofNumber(num) {
  if (num > 0) {
    console.log(`El número ${num} ingresado es positivo`);
    return alert(`El número ${num} ingresado es positivo`);
  } else if (num < 0) {
    console.log(`El número ${num} ingresado es negativo`);
    return alert(`El número ${num} ingresado es negativo`);
  } else {
    console.log(`El número ingresado es ${num} `);
    return alert(`El número ingresado es ${num}`);
  }
}

typeofNumber(parseFloat(prompt("Ingrese un número")));

//Número primo

let isPrime = true;

function primeNumber(nPrime) {
  // Check if the number is 1

  if (nPrime === 1) {
    console.log(`El numero ${nPrime} no es un número primo ni compuesto`);
  } else if (nPrime > 2) {
    for (let i = 2; i <= nPrime; i++) {
      if (nPrime % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`El número ${nPrime} es un número primo`);
    } else {
      console.log(`El número ${nPrime} no es un número primo`);
    }
  } else {
    console.log(`El número ${nPrime} no es un número primo`);
  }
}

primeNumber(parseFloat(prompt("Ingrese un número")));

//Conversion de temperatura de grados C a grados F y viceversa.

function convertTemperature(value, unit) {
  if (unit === "C") {
    alert(
      "Vas a convertir de Fahrenheit a Celsius. Presiona S para continuar o N para salir "
    );
    let temperature = (value - 32) / 1.8;
    console.log(`El valor de temperatura en Celsius es ${temperature}`);
  } else if (unit === "F") {
    alert("Vas a convertir de Celsius a Fahrenheit");
    let temperature = value * 1.8 + 32;
    console.log(`El valor de temperatura en Fahrenheit es ${temperature}`);
  }
  return temperature;
}

convertTemperature(
  parseFloat(prompt("Ingrese un valor a convertir")),
  prompt(
    "Ingrese C si quiere convertir a Celsius o F si quiere convertir a Fahrenheit"
  )
);
