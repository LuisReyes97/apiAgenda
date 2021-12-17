const express = require('express')
const mysql = require('mysql');
const myconn = require('express-myconnection')

const routes = require('./routes')

//configuraciones e inicializaciones
const app = express()
app.set('port', process.env.PORT || 9000)
const dbAgenda = {
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'agenda'
}

//middleware
app.use(myconn(mysql, dbAgenda, 'single'))
app.use(express.json())

// rutas
app.get('/',(req, res) =>{
    res.send('corriendo')
})

app.use('/api', routes)



//iniciando servidor

app.listen(app.get('port'), ()=>{
    console.log('server running on port',app.get('port'))
})

