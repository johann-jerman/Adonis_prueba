 import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    name: schema.string.optional({}, [rules.minLength(3), rules.maxLength(35)]),
    email: schema.string({}, [rules.email(),]),
    password: schema.string(),
    rol_id: schema.number([rules.exists({ table: 'rols', column: 'id' })])
  })

  
  public messages: CustomMessages = {
    // '*': (field, rule) => {
    //   console.log( field, rule, "validacion");
      
    //   return `${rule} validation error on ${field}`
    // },
    'email.required': 'El campo de correo electrónico es obligatorio',
    'email.email': 'Por favor, proporciona una dirección de correo electrónico válida',
    'password.required': 'El campo de contraseña es obligatorio',
    'rol_id.required': 'El campo de rol es obligatorio',
    'rol_id.number': 'El campo de rol debe ser un número existente en la base de datos { field }',
  }
  
}
