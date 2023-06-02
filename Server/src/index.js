const server = require('./app')
const {conn} = require('./DB_connection')

conn.sync({force: true})

server.listen(3001, ()=> console.log(`server raised in port 3001`))