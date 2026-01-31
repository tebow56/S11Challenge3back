const express = require ('express')
const app = express()
const cors = require('cors')
const router = require('./routes/mainroutes.js')

app.use (cors())
app.use (router)

app.listen(3000, (req,res)=>{
    console.log('El servidor está escuhando en http://localhost:3000')
})