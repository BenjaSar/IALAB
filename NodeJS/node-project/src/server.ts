import express from 'express';
import 'reflect-metadata'
import {ApolloServer} from 'apollo-server-express'
import {BookResolver} from './resolvers/book.resolver'
import {buildSchema} from 'type-graphql'
import { AuthorResolver } from './resolvers/author.resolver'

//Inicializacion del servidor http y manejo de rutas
export async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        schema: await buildSchema({resolvers: [BookResolver, AuthorResolver]})
    })
    //Middleware
    apolloServer.applyMiddleware({app, path:'/graphql'})
    return app;
};



