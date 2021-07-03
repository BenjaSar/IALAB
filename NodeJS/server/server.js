const http = require('http');
const host ="localhost";
const port = 3000; //Puerta de entrada o endpoint al host
// url base :http://localhost/:3000

//Funcion que escucha y responde
const requestListener = function(req, res){
    //404, 403(forbidden), 401(unauthorized)
    //500 -> Errores que no se pueden predecir
    //Se puede escribir la logica de nuestra aplicacion
    res.writeHead(200);
    res.end("Hola mi Benja y Mile")
};

//Creacion del servidor
const server =  http.createServer(requestListener);

//Escucha del server
server.listen(port,host, ()=> console.log("Api running on port", port));
