const express = require('express')
const colors = require('colors')
const dotenv =require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleWare')
const connectDB = require('./config/db')
const port = process.env.PORT || 8000

connectDB()

const app =express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(errorHandler)

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port,()=> console.log(`Server started on port ${port}`))