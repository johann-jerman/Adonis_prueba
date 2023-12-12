import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, beforeSave, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Rol from './Rol'
import Hash from "@ioc:Adonis/Core/Hash";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  //dont return password serializeAs null
  @column({ serializeAs: null })
  public password: string

  @column()
  public rolId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User){
    if (user.$dirty.password) {
      console.log(user.password);
      user.password = await Hash.make(user.password)
      console.log(user.password);
    }
  }

  @belongsTo(()=> Rol)
  public rol_id: BelongsTo<typeof Rol>
}
