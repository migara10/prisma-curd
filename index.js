const express = require('express');
const cookieParser = require('cookie-parser');
const user = require('./routes/userRoutes.js')

require('dotenv').config()

const PORT = process.env.PORT || 3200;

const app = express();


//regular middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))


//cookie middleware
app.use(cookieParser());

app.use('/api', user)


app.get('/', (req,res) => {
    res.send('Hi Prisma test')
})

app.listen(PORT, () => {
    console.log(`server running on: ${PORT}`)
})