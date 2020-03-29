const generateUniqueId = require('../utils/generateUniqued')
const connection = require('../database/connection')

module.exports = {
  async index(req, res)  {
    const ongs = await connection('ongs').select('*')
  
    return res.json(ongs)
  },
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body

    const id =  generateUniqueId() 

    await connection('ongs').insert({ // Espera finalizar a inserção dos dados para depois continuar
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })

    return res.json({ id })
  }
}