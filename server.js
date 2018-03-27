const path = require('path')

const axios = require('axios')
const express = require('express')
const cookie = require('cookie')

const app = express()
const server = require('http').createServer(app)

app.get('/index', (req, res) => {
  res.header('Set-Cookie', cookie.serialize('name', 'cookieA', {
    httpOnly: true,
    maxAge: 60 * 1,
  }));

  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/lineData', (req, res) => {
  res.header('Set-Cookie', cookie.serialize('name', 'cookieA', {
    httpOnly: true,
    maxAge: 60 * 1,
  }));
  res.json({ abc: 'def'})
})

server.listen(3000, () => {
  console.log('run server')
})