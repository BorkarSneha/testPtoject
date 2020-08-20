const express = require('express')
const app = express() 
app.use(express.json())
const port = 3025
const cors= require('cors')
app.use(cors())

const configureDB = require('./config/database')
const router=require('./config/routes')
configureDB()

app.use('/',router)

app.listen(port,()=>{
    console.log('listening on port', port)
})