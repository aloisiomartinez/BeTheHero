const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

/*
 Para utilizar JSON. O Express antes de todas as requisições (Precisa ser antes das rotas)
converte o JSON no corpo da requisição em um objeto JavaScript, para ser entendido pela aplicação.
*/
app.use(cors())
app.use(express.json()) 
app.use(routes)
app.use(errors())

module.exports = app