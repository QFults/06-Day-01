const users = require('./db/users.js')
const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', (req, res) => {
  users.push(req.body)
  // res.sendStatus(200)
  res.json(users)
})

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'))
// })

// app.get('/contact', (req, res) => {
//   res.sendFile(join(__dirname, 'contact.html'))
// })

// app.get('/movies', (req, res) => {
//   res.send('Goodfellas and The Room')
// })

// app.get('/songs', (req, res) => {
//   res.send('Song 1 and Song 2')
// })

// app.post('/movies', (req, res) => {

// })
// app.put('/movies', (req, res) => {

// })
// app.delete('/movies', (req, res) => {

// })

app.listen(3000)
