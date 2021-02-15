const port = 3000

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./config/cors')

require('./config/mongodb')

// Rotas da aplicação
server.use(require('./routes'));


server.use(allowCors)


server.listen(process.env.PORT || port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server