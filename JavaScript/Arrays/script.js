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
