const express = require('express')
const app = express()

/// conect to DB
const cors = require('cors')

const mongoose = require('mongoose')
const dbURI = 'mongodb+srv://MusicProject:sassi1@cluster0.raknu.mongodb.net/Login_Register?retryWrites=true&w=majority'
mongoose.connect(dbURI).then(() => console.log('connected to mongodb')).catch((err) => console.log('Could not connect to mongo', err))

app.use(express.json())
app.use(cors())

const registerRouter = require('./routes/register')
const loginRouter = require('./routes/login')
app.use("/", registerRouter)
app.use('/', loginRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`listen to PORT ${PORT}`))