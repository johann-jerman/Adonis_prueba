import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Rol extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public rol: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=> User)
  public user: HasMany<typeof User>
}
