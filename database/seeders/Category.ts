import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Category.createMany([
      {
        category: "filosofía"
      },
      {
        category: "religión"
      },
      {
        category: "ciencias sociales"
      },
      {
        category: "filología"
      },
      {
        category: "ciencias naturales"
      },
      {
        category: "técnica"
      },
      {
        category: "ciencias prácticas"
      },
      {
        category: "arte"
      },
      {
        category: "historia"
      },
    ])
  }
}
