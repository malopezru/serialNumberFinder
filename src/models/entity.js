const { Schema, model } = require('mongoose')


const entitySchema = new Schema ({
    _id: {
        type: Number,
        required: true   
    },
    serialNumber: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String
    }
})

module.exports = model('entities', entitySchema)