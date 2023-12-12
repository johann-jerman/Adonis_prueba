import User from 'App/Models/User'
import RegisterValidator from 'App/Validators/RegisterValidator'
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";


export default class AuthController {
  public async register({ request, auth, response }: HttpContextContract) {
    try {
      const isValidated = await request.validate(RegisterValidator)
      
      const newUser = await User.create({
        name: isValidated.name,
        email: isValidated.email,
        password: isValidated.password,
        rolId: isValidated.rol_id
      })
      const token = await auth.login(newUser)
      //return 200 status code response ok
      return response.ok({ 
        data: newUser,
        token
      })
    } catch (error) {
      if (error.name === 'ValidationException') {
        return response.status(400).send({ errors: error.messages })
      }
      console.log(error);
      
      return response.status(500).send({ error: 'Internal Server Error' })
    }
  }
  /**
   * faltan: validacion de request, falta comprobar que el usuario exista pero
   * parece que el metodo attemp tiene una validacion de que exista ese usuario 
   * ya creado en la database
   */
  public async login({ request, auth, response }: HttpContextContract) {
    try {
      let {email, password} = request.all()
      
      let token = await auth.use('api').attempt(email, password, {
        expiresIn : '7 days'
      })

      return response.ok({
        data: token
      })
    } catch (error){
      console.log(error);
      
      return response.unauthorized("Invalid credentials")
    }
  }
}
