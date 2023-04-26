'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const sense = require('sense-hat-led')

const PORT = 8080
const HOST = '0.0.0.0'

const app = express()
const json = bodyParser.json()

app.post('/message',  json, (req, res) => {
  const { message, speed, fgColor, bgColor } = req.body
  sense.showMessage(message, speed, fgColor, bgColor, () => console.log(`Shown message: ${message}`))
  res.json(req.body)
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
