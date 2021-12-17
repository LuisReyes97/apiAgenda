const express = require('express')
const mysql = requiere('mysql')
const myconn = require('express-myconnection')

//configuraciones e inicializaciones
const app = express()
app.set('port', process.env.PORT || 9000)
const dbAgenda = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'agenda'
}

//middleware
app.use(myconn(mysql, dbAgenda, 'single'))

// rutas
app.get('/',(req, res) =>{
    res.send('corriendo')
})

//iniciando servidor

app.listen(app.get('port'), ()=>{
    console.log('server running on port',app.get('port'))
})

