'use strict'

const userController= require('./controller/userController.js')
const validator      = require('validator')
const app            = require('./app_config.js')

app.get('/', (req, res) => {
    res.end('Server stated!')
})

app.get('/users', (req, res) => {
    userController.list((resp) => {
        res.json(resp)
    });
})

app.get('/users/:id', (req, res) => {
    const id = validator.trim(validator.escape(req.param('id')))

    userController.user(id, (resp) => {
        res.json(resp)
    })
})

app.put('/users', (req, res) => {
    const id      = validator.trim(validator.escape(req.param('id')))
    const name    = validator.trim(validator.escape(req.param('fullname')))
    const email   = validator.trim(validator.escape(req.param('email')))
    const password= validator.trim(validator.escape(req.param('password')))

    userController.update(id, name, email, password, (resp) => {
        res.json(resp)
    })
})

app.post('/users', (req, res) => {
    const name    = validator.trim(validator.escape(req.param('fullname')))
    const email   = validator.trim(validator.escape(req.param('email')))
    const password= validator.trim(validator.escape(req.param('password')))

    userController.save(name, email, password, (resp) => {
        res.json(resp)
    })
})

app.delete('/users/:id', (req, res) => {
    const id = validator.trim(validator.escape(req.param('id')))

    userController.delete(id, (resp) => {
        res.json(resp)
    })
})
