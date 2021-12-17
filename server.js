const express = require('express')

const app = express()
app.set('port', process.env.PORT || 9000 )

app.get('/',(req, res) =>{
    res.send('corriendo')
})

app.listen(9000, ()=>{
    console.log('server running on port',9000)
} )