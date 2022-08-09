
const express = require('express')
const colors = require('colors')
const dotenv =require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleWare')
const connectDB = require('./config/db')
const path = require('path')
const port = process.env.PORT || 8000

connectDB()

const app =express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
//Serve frontend
if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'../frontend/build')))

    app.get('*', (req,res) => res.sendFile(
        path.resolve(__dirname,'../', 'frontend', 'build', 'index.html'))
    )
}else{
    app.get('/',(req,res)=> res.send('Please set to production'))
}

app.use(errorHandler)

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))