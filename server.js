const path = require('path')

const axios = require('axios')
const express = require('express')
const cookie = require('cookie')

const app = express()
const server = require('http').createServer(app)

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

const returnRandom = () => {
  return Date.now().toString()
}

app.get('/index', (req, res) => {
  res.header('Set-Cookie', cookie.serialize('nyan', returnRandom(), {
    httpOnly: true,
    maxAge: 60 * 1,
  }));

  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/lineData', (req, res) => {
  res.header('Set-Cookie', cookie.serialize('nyan', returnRandom(), {
    httpOnly: true,
    maxAge: 60 * 1,
  }));
  res.json({ abc: 'def'})
})

app.get('/test', (req, res) => {
  setTimeout(() => {
    res.json({ Date: Date.now()})
  }, 2000)
})
app.post('/test', (req, res) => {
  res.json({ Date: 'nya-n'})
})

app.get('/article', (req, res) => {
  setTimeout(() => {
    res.json({
      textA: 'textA',
      textB: 'textB',
      selectA: '1',
    })
  }, 2000)
})

app.get('/article2', (req, res) => {
  res.json({
    textA: 'textA2',
    textB: 'textB2',
    selectA: '1',
  })
})

let count1 = 0
app.get('/count1', (req, res) => {
  if (count1 < 3) {
    res.status(500);
    console.log('count1', count1)
    res.json({});
    count1++
    return
  }
  res.send('done count1')
})

let count2 = 0
app.get('/count2', (req, res) => {
  if (count2 < 3) {
    res.status(500);
    console.log('count2', count2)
    res.json({});
    count2++
    return
  }
  res.send('done count2')
})

server.listen(3000, () => {
  console.log('run server')
})