const express = require('express')
const dotenv =require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleWare')
const port = process.env.PORT || 8000

const app =express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(errorHandler)

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port,()=> console.log(`Server started on port ${port}`))