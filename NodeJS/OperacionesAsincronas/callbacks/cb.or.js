/*Callback: Funcion que recibe una funcion para que luego se ejecute, luego de haber ejecutado otro codigo que consideremos.
Se recomienda usar lo menos posible las callbacks
*/
const sayHello = () => console.log("Hello world");

//setTimeout(sayHello, 2000);

const calculate  = (arg1, arg2, operation)=>{
    console.log("Calculando....")
    //Retornamos la ejecucion
    return console.log(operation(arg1, arg2));
}

const sum = (num1, num2) => {
    return num1 + num2;
}
const mult = (num1, num2) => num1 * num2;

calculate(5, 2, mult);