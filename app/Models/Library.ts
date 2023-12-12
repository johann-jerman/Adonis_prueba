import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category'

export default class Library extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public releace_date: DateTime
  // @column()
  // public releaceDate: DateTime

  @column()
  public pages: number

  @column()
  public autor: string
  
  @column()
  public categoriId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=> Category)
  public categori_id: BelongsTo<typeof Category>
}
