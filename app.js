if (process.env.NODE_ENV === 'dev') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const router = require('./routes')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)


app.listen(3000, function() {
    console.log("Server is running on port " + 3000);
});

module.exports = app