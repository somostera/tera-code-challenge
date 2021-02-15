const port = 3000

const express = require('express')
const server = express()

require('./config/mongodb')

// Rotas da aplicação
server.use(require('./routes'));


server.listen(process.env.PORT || port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server