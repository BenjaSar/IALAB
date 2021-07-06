import { createConnection} from 'typeorm';
import path from 'path';
import {enviroment} from './enviroment';

console.log(enviroment)

export async function connect() {
    await createConnection({
        type: 'postgres',
        port:Number(enviroment.DB_PORT),
        username: enviroment.DB_USERNAME,
        password: enviroment.DB_PASSWORD,
        database: enviroment.DB_DATABASE,
        //entities: listado de las rutas locales donde van a estar las entidades locales
        entities: [
            path.join(__dirname, '../entity/**/**.ts')
        ],
        synchronize: true, 
    })
    console.log("Database running"); 
}