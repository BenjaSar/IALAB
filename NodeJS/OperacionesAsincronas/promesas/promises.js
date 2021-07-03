/*Promesa: Objeto que representa la terminación o el fracaso eventual de una operación asíncrona. Recibe un objeto que tiene funciones callback
Sintaxix:
const promise = new Promise(callback)

function(resolve, reject){
    si se cumple: resolve();
    sino se cumple: reject();
}

Metodos disponibles:
* then() => Devuelve la data consultada. Se ejecutada cuando función callback entra en el método resolve
* catch() => captura el error
* finally() => Siempres se ejecuta

No se debe utilizar el try() catch()
*/

const moviesDB = [{
    id:1,
    title: "Nueve reinas",
    mainActor : 2,
},

{
    id:2,
    title: "El secreto de sus ojos",
    mainActor : 1,
},

{
    id:3,
    title: "Salvando al soldado Ryan",
    mainActor : 3,
},
];

const actorsDB = [
    {
        id:1,
        name: "Guillermo Franchella"
    },

    {
        id:2,
        name: "Ricardo Darin",
    },

    {
        id:3,
        name: "Tom Hanks",
    },
];

//Consulta sincrona a una base de datos
function getMoviesbyId(id){
    return new Promise((resolve, reject) => {
        //Se escribe la lógica del programa
        const movie = moviesDB.find(movie => movie.id === id);
        if(!movie) reject (new Error("La película no existe"));
        resolve(movie);
    });
}

function getActorId(id){
    return new Promise((resolve, reject)=> {
        const actor = actorsDB.find(actor => actor.id === id);
        if(!actor) reject(new Error ("El actor no está en la base de datos"));
        resolve (actor);

    });   
};

//getMoviesbyId(1). then (movie => console.log(movie));

function getCompleteByMovie(movieId){
    getMoviesbyId(movieId)
    .then(movie => {
        getActorId(movie.mainActor)
        .then(actor => {
            console.log(`La pelicula elegida es ${movie.title} y su actor principal es ${actor.name}`)
        })
    })
    .catch(error=> console.log(error))
    .finally(()=> console.log("Operation finalized"));

}

getCompleteByMovie(3);