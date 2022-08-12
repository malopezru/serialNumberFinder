const mongoose = require('mongoose')

const { MONGODB_HOST, MONGODB_PORT } = process.env;

MONGODB_URI = `mongodb://${MONGODB_HOST}:${MONGODB_PORT}`

mongoose.connect(MONGODB_URI+'/entity-serial-numbers', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));