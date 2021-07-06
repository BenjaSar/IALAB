import {Mutation, Resolver, Arg, InputType, Field} from 'type-graphql'
import { Author } from '../entity/author.entity';
import {getRepository, Repository} from "typeorm";

@InputType()
class AuthorInput{
    @Field()
    fullName!: string
}

@Resolver()

export class AuthorResolver{  
    
    authorRepository: Repository<Author>
    
    constructor(){
        //Se tienen habilitados los metodos para consulta a la base de datos
        this.authorRepository = getRepository(Author)
    }

    @Mutation(()=> Author)
    async createAuthor(
        @Arg("input", ()=> AuthorInput) input: AuthorInput

    ): Promise<Author | undefined>{
        try{
             //Mutation se encarga de generar o cargar datos en una base de datos
        const createAuthor = await this.authorRepository.insert({fullName: input.fullName})
        const result = await this.authorRepository.findOne(createAuthor.identifiers[0].id)
        return result
        } catch{
            console.error
        }
    }
}
