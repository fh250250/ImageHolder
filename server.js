'use strict'

const express = require('express')
const gm = require('gm')

const PORT = 9000
const app = express()

app.get('/:width(\\d+)(x:height(\\d+))?', (req, res) => {
  res.type('png')

  let width = parseInt(req.params.width)
  let height = req.params.height ? parseInt(req.params.height) : width
  let text = `${width}x${height}`

  gm(width, height, '#ccc')
    .fontSize(width / text.length)
    .fill('#fff')
    .drawText(0, 0, text, 'center')
    .stream('png')
    .pipe(res)
})

app.listen(PORT, () => {
  console.log(`Server is Running At Port: ${PORT}`)
})
