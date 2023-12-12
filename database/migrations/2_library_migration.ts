import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'libraries'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("name", 35).notNullable()
      table.datetime("releace_date")
      table.integer("pages").unsigned()
      table.string("autor", 35)
      table.integer("categori_id").unsigned().references("id").inTable("categories")

      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
