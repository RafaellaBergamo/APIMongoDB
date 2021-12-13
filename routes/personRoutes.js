const express = require('express')
const router = require('express').Router()

const Person = require('../Models/Person')

router.post('/', async (req, res) => {

    const {name, salary, approved} = req.body

    if(!name) {
        res.status(422).json({ error: 'O nome é obrigatório' })
    }
    if(!salary) {
        res.status(422).json({ error: 'O salário é obrigatório' })
    }

    const person = {
        name, 
        salary,
        approved
    }

    try {
        await Person.create(person)

        res.status(201).json({ message: "Usuário cadastrado com sucesso!" })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

module.exports = router