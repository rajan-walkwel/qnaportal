const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {sequelize} = require('./models')
const morgan = require('morgan')
const config = require('./config/config')

const app = express()
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

app.listen(config.port)
