//Arrays
//Author: FS
/*
Array: Coleccion ordenada de datos
*/

//1- Formas de declaras un array

const miArray = [];
const otroArray = new Array();

console.log(miArray, otroArray);

const market = [
  "Mochila de Benjamin",
  "Cartera de Milena",
  "Bolsa de Maria",
  "Libro de Karina",
];
console.log(market);

//Accediendo a un array
console.log(market[0]);

//Array de un array
const miMarket = [
  ["Welcome", "Benvenuti", "Bienvenue"],
  "Kafka",
  true,
  8,
  "Artificial Intelligence",
];

//Longitud de un array
console.log(miMarket.length);

const e = miMarket[0];
console.log(`En ${e} encontramos otro array`);

//Acceder al primer elemento de un array
const firstElement = market[0];
console.log(firstElement);

//Acceder al último elemento
const lastElement = market[market.length - 1];
console.log(lastElement);

//Buscar el índice de un elemento
const element = "Libro de Karina";

const index = market.indexOf(element); //IndexOf method
console.log(index);

/**
 *@brief Lookig for an element in the array
 */
const el = "Tomás";
const ind = miArray.indexOf(el);
console.log(ind);
console.log(miArray[ind]);

/**
 * @brief Iteration over array with FOR
 */
const myArray = ["Amir", "Juan", "Isabella", "Manuel", "Dayra", "Juliana"];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

/**
 *@brief Iteration over array with forEach
 * index is optional
 */
myArray.forEach((item, index) => {
  console.log(item);
  console.log(index);
});

/**
 * @brief ArrayManipulation
 * Sort and reduce methods
 */
const numbers = [10, 60, 70, 50, 40, 30, 20];
//Sort
const ordenedArray = myArray.sort();
console.log(ordenedArray);
//with reverse
console.log(ordenedArray.reverse());

const orderedNumbers = numbers.sort();
console.log(orderedNumbers);
//With reverse
console.log(orderedNumbers.reverse());
//Withou reduces => The reassignation of variables aren't a good practice. Try maintaining
//the values constans
let total = 0;
numbers.forEach((number) => {
  total += number;
});
console.log(total);

//With reduces
// x = initial value
const tot = numbers.reduce((accumulator, actualValue) => {
  console.log("Accumulator", accumulator);
  console.log("Actual value", actualValue);
  console.log("Here the iteration is finished");
  return accumulator + actualValue;
}, (x = 0));

console.log(tot);

//Other way to write the last codec
const t = numbers.reduce(
  (accumulator, actualValue) => accumulator + actualValue,
  0
);
console.log(t);
