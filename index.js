const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

const personRoutes = require('./routes/personRoutes')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use('/person', personRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'Teste mensagem' })  
})

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.afkln.mongodb.net/bancoapirest?retryWrites=true&w=majority`)
.then(() => {
    console.log('Conectou ao banco')
    app.listen(8000)
})
.catch((er) => console.log(er))

