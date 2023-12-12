import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Library from 'App/Models/Library'
import CreateLibraryValidator from 'App/Validators/CreateLibraryValidator'

export default class LibrariesController {
    //faltan las query builders para armar paginacion y buscadas abanzadas
    public async index({response}: HttpContextContract){
        
        return response.ok({
            data: await Library.all()
        })
    }
    public async show({params, response}: HttpContextContract){
        let book = await Library.findBy("id", params.id)
        if (!book) 
            return response.notFound();
        
        return response.ok({
            data: book
        })
    }
    public async store({request, response}: HttpContextContract){
        try {
            await request.validate(CreateLibraryValidator)
            let {name, releace_date, pages,autor,categoriId } = request.all()
            
            let newBook = await Library.create({
                name , releace_date, pages, autor, categoriId
            })

            return response.ok({
                data: newBook,
            })
        } catch (error) {
            if(error.name === "ValidationException"){
                return response.send({error: error.messages})
            }
            // console.log(error);
            
            return response.send("Internal Server Error")
        }
    }
    //falta el update
    public update({request, params}: HttpContextContract){
        return {
            data:request,
            id: params
        }
    }
    public async destroy({params, response}: HttpContextContract){
        
        
        let bookToDelete = await Library.findOrFail(params.id)
        
        await bookToDelete.delete()
        return response.ok({deleted: true})
    }

}
