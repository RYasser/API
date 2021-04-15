const express = require('express')
const app = express()
const cors = require('cors')

const pessoas = [
    {
      nome: 'Pessoa1',
      idade: 12
    },
    {
      nome: 'Pessoa2',
      idade: 13
    },
    {
      nome: 'Pessoa3',
      idade: 14
    },
    {
      nome: 'Pessoa4',
      idade: 15
    },
    {
        nome: 'Pessoa5',
        idade: 18
    }
  ]

app.use(cors())

app.get('/api/v1/pessoas', function(req, res) {
    res.send(pessoas)
})

app.listen('3000')