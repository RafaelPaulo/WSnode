'use strict'

const express    = require('express')
const app        = module.exports = express() //Criando o servidor
const bodyParser = require('body-parser')

const port = 5000

const allowCors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,DELETE,POST')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.header('Access-Control-Allow-Credentials', 'true')

    next()
}

app.listen(port) // Porta em que o servidor ouvirá

app.use(allowCors)

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))
