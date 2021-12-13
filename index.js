const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Teste mensagem' })  
})

mongoose.connect('mongodb+srv://testebanco:12345@apicluster.afkln.mongodb.net/bancoapirest?retryWrites=true&w=majority')
.then(() => {
    console.log('Conectou ao banco')
    app.listen(8000)
})
.catch((er) => console.log(er))

