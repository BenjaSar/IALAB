/*Async => Devuelve un objeto Promise. Cuando la función asyn devuelve un valor, Promise se resolverá con el valor devuelto.
Si la función async genera una excepción o algún valor, Promise rechazará el valor generado.

Await: Pausa la ejecución de la función asíncrona y espera la resolución de la Promise pasada, y a continuación reanuda la ejecución
de la función async y devuelve el valor resuelto después del término.

Manejo de excepciones: El método async/await no tiene método catch(), por lo que siempre tendremos que utilizar el método try/catch para el manejo de las excepciones*/


const moviesDB = [{
    id: 1,
    title: "Nueve reinas",
    mainActor: 2,
},

{
    id: 2,
    title: "El secreto de sus ojos",
    mainActor: 1,
},

{
    id: 3,
    title: "Salvando al soldado Ryan",
    mainActor: 3,
},
];

const actorsDB = [
    {
        id: 1,
        name: "Guillermo Franchella"
    },

    {
        id: 2,
        name: "Ricardo Darin",
    },

    {
        id: 3,
        name: "Tom Hanks",
    },
];

//Consulta sincrona a una base de datos
async function getMoviesbyId(id) {
    //Se escribe la lógica del programa
    //movies.find => hace asincrona la función
    try {
        const movie = await moviesDB.find(movie => movie.id === id);
        if (!movie) throw (new Error("La película no existe"));
        return movie
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getActorId(id) {
    try {
        const actor = await actorsDB.find(actor => actor.id === id);
        if (!actor) throw (new Error("El actor no está en la base de datos"));
        return actor;
    } catch {
        throw new Error(error.message)
    }
};

//getMoviesbyId(1). then (movie => console.log(movie));

async function getCompleteByMovie(movieId) {

    try {
        const movie = await getMoviesbyId(movieId);
        const actor = await getActorId(movie.mainActor);
        console.log(`La pelicula seleccionada es ${movie.title} y su actor principal es ${actor.name}`)
    } catch (error) {
        throw new Error(error.message);
    }

};

getCompleteByMovie(3);