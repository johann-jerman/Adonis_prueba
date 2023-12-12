import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Rol from 'App/Models/Rol'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Rol.createMany([
      {
        rol: "user"
      },
      {
        rol: "admin"
      },
    ])
  }
}
