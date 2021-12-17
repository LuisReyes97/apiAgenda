const express = require('express')
const connection = require('express-myconnection')
const { append } = require('express/lib/response')
const routes = express.Router()


//agregar
routes.get('/', (req, res)=>{
    //para obtener la coneccion a la atabla bd 
    req.getConnection((err, connection)=>{
        if(err) return res.send(err)
        connection.query('SELECT * FROM user', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})


routes.post('/', (req, res)=>{
    //para agrear a la atabla bd 
    req.getConnection((err, connection)=>{
        if(err) return res.send(err)
        connection.query('INSERT INTO user set ?',[req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.send('agregado')
        })
    })
})

//eliminar usuario


routes.delete('/:id', (req, res)=>{
    req.getConnection((err, connection)=>{
        if(err) return res.send(err)
        //consulta
        connection.query('DELETE FROM user WHERE id = ?',[req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('eliminado')
        })
    })
})

//actualizar
routes.put('/:id', (req, res)=>{
    req.getConnection((err, connection)=>{
        if(err) return res.send(err)
        //consulta
        connection.query('UPDATE user set ? WHERE id = ?',[req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('actualizado')
        })
    })
})

module.exports = routes