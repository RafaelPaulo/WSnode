'use strict'

const db = require('../db_config.js')

exports.list = (callback) => {
    db.User.find({}, (error, users) => {
        if(error) callback({message: 'It was not possible return the users'})
        else callback(users)
    })
}

exports.user = (id, callback) => {
    db.User.findById(id, (error, user) => {
        if(error) callback({message: 'It was not possible return the users'})
        else callback(user)
    })
}

exports.save = (name, email, password, callback) => {
    new db.User({
        'fullname':   name,
        'email':      email,
        'password':   password,
        'created_at': new Date()
    }).save((error, user) => {
        if(error) callback({message: 'It was not possible to save the user'})
        else callback(user)
    })
}

exports.update = (id, name, email, password, callback) => {
    db.User.findById(id, (error, user) => {
        if(name)     user.fullname = name
        if(email)    user.email    = email
        if(password) user.password = password

        user.save((error, user) => {
            if(error) callback({error: 'It was not possible to update the user'})
            else callback(user)
        })
    })
}

exports.delete = (id, callback) => {
    db.User.findById(id, (error, user) => {
        if(error) callback({message: 'It was not possible return the users'})
        else
            user.remove((error) => {
                if(!error) callback({response: 'User removed successfuly'})
            })
    })
}
