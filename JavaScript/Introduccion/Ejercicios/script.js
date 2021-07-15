//1.Pedir al usuario que ingrese un nombre

const firstName = prompt("Por favor ingresa tu nombre");
const lastName = prompt("Por favor ingresa tu apellido");
const age = prompt("Por favor ingresa tu edad");
console.log(`Tu nombre es ${firstName}`);
console.log(`Tu apellido es ${lastName}`);
console.log(`Tu edad es ${age} años`);

alert(`Tus datos completos son:
Nombre: ${firstName}
Apellido: ${lastName}
Edad: ${age}
`);
//Ingreso de dos numeros y su devolucion
const number1 = parseInt(prompt("Por favor ingresa un numero entero"));
const number2 = parseInt(prompt("Por favor ingresa un segundo numero entero"));
const resultado = number1 + number2;
console.log(
  `El resultado de la suma de los números ingresados es ${resultado}`
);

//2. Ingreso de numero y devolucion del doble dfe la suma de dichos numeros

const multiplication = (number1 + number2) * 2;
console.log(
  `El resultado del doble de la suma de los numeros ingresados es ${multiplication}`
);

//3. Nombre, apellido y edad de usuario y mostar mensaje
