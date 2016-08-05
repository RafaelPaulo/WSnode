'use strict'

// const db_string = require('package.json').conf.mogoUrl
const mongoose  = require('mongoose').connect(db_string)
const db        = mongoose.connection

db.on('error', console.error.bind(console, 'Erro ao conectar no banco'))

db.once('open', function() {
    var userSchema = mongoose.Schema({
        fullname: String,
        email: String,
        password: String,
        created_at: Date
    });

    exports.User = mongoose.model('User', userSchema )
})
