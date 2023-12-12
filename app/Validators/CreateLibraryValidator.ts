import { schema,rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateLibraryValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string([ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string([
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    name: schema.string({}, [rules.minLength(3), rules.maxLength(35)]),
    releace_date: schema.date(),
    pages: schema.number(),
    autor: schema.string({}, [rules.minLength(3), rules.maxLength(35)]),
    categoriId: schema.number(),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    'name.required': 'El campo de nombre es obligatorio',
    'name.minLength': 'el campo nombre {{ options.minLength }} ',
    'name.maxLength': 'el campo nombre {{ options.minLength }} ',
    'releaceDate.required': 'El campo de fecha de creacion es obligatorio',
    'autor.required': 'El campo de fecha de creacion es obligatorio',
    'categoriId.required': 'El campo de rol es obligatorio',
    'categoriId.number': 'El campo de rol debe ser un número existente en la base de datos { field }',
    
  }
}
