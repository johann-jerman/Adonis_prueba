import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 35)
      table.string('email').notNullable()
      table.string('password').notNullable()
      table.integer('rol_id').unsigned().references('id').inTable('rols')
      /**
      * Creates timestamp column
      * Set the default value to "CURRENT_TIMESTAMP"
      */
      table.timestamps(true, true)

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      // table.timestamp('created_at', { useTz: true })
      // table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
