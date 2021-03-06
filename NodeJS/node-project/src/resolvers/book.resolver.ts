import {Mutation, Resolver, Arg, InputType, Field, Query} from 'type-graphql'
import {getRepository, Repository} from "typeorm";
import { Author } from '../entity/author.entity';
import { Book } from '../entity/book.entity'


@InputType()
class BookInput{
    @Field()
    title!: string

    @Field()
    author!: number;
}


@InputType()
class BookUpdateInput{
    @Field(()=> String, {nullable:true})
    title?: string

    @Field(()=> Number, {nullable:true})
    author?: number;
}

@InputType()
class BookUpdateParsedInput{
    @Field(()=> String, {nullable:true})
    title?: string

    @Field(()=> Author, {nullable:true})
    author?: Author;
}

@InputType()
class BookIdInput{
    @Field(()=> Number)
    id!: number
}

@Resolver()
export class BookResolver{
    bookRepository: Repository<Book>;
    authorRepository: Repository<Author>;
    constructor() {
        this.bookRepository = getRepository(Book);
        this.authorRepository = getRepository(Author);
    }

    @Mutation(()=>Book)
    async createBook(@Arg("input", ()=> BookInput) input: BookInput){
        try{
            const author: Author | undefined = await this.authorRepository.findOne(input.author)
            if(!author){
                const error = new Error();
                error.message = "The author for this book does not exists, please doucble check";
                throw error;
            }
            const book = await this.bookRepository.insert({
                title: input.title,
                author: author

            });

            return await this.bookRepository.findOne(book.identifiers[0].id, {relations:['author']})
        
        } catch (e){
            throw new Error(e.message)

        }
    }

    @Query(() => [Book])
    async getAllBooks(): Promise<Book[]>{
        try{
            return await this.bookRepository.find({relations:['author']});
        } catch(e){

            throw new  Error(e)
        }
    }

    @Query(() => Book)
    async getBooksById(
        @Arg("input", () =>BookIdInput) input: BookIdInput
    ): Promise<Book|undefined>{
       try{
           const book = await this.bookRepository.findOne(input.id, {relations: ['author']});
           if(!book){
               const error = new Error();
               error.message = "Book does not found";
               throw error;
           }
           return book;

       } catch(e){
           throw new Error(e)
       }
    }

    @Mutation(()=> Boolean)
    async updateBookbyId(
        @Arg('bookId', ()=> BookIdInput) bookId: BookIdInput,
        @Arg('input', () => BookUpdateInput) input: BookUpdateInput,
    ): Promise<Boolean>{
        try{
            await this.bookRepository.update(bookId.id, await this.parseInput(input))
            return true
        } catch(e){
            throw new Error(e)
        }
    }

    @Mutation(()=>Boolean)
    async deleteBook(@Arg("bookId", ()=> BookIdInput) bookId: BookIdInput
    
    ): Promise<Boolean> {
        try{
            await this.bookRepository.delete(bookId.id)
            return true
        } catch(e){
            throw new Error(e)
        }
        
    }



    private async parseInput(input:BookUpdateInput){

        try{
            const _input: BookUpdateParsedInput = {}
        if(input.title){
            _input["title"] = input.title
        }
        if(input.author){
            const author = await this.authorRepository.findOne(input.author)
            if(!author){
                 throw new Error ('This author does not exist')
            }

            _input["author"] = await this.authorRepository.findOne(input.author)
        }
        return _input;

        }catch(e){
            throw Error(e)
            
        }   
    }
}
