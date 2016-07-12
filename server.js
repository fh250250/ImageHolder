'use strict'

const express = require('express')
const gm = require('gm')

const PORT = 9000
const app = express()

app.get('/:width(\\d+)x:height(\\d+)', (req, res) => {
  res.type('png')

  let width = parseInt(req.params.width)
  let height = parseInt(req.params.height)
  let text = `${width}x${height}`
  let fontSize = width * 0.4 / text.length

  gm(width, height, '#eee')
    .fontSize(fontSize)
    .drawText(width * 0.3, height * 0.5 - fontSize / 2, text)
    .stream('png')
    .pipe(res)
})

app.listen(PORT, () => {
  console.log(`Server is Running At Port: ${PORT}`)
})
