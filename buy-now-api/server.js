const express = require('express')
const {addUser} = require('./db')
const app = express()
const port = 3545

app.get('/', (req, res) => {
  res.send('sup')
})

app.get("/test", (req, res) => {
  const user = {
    name: "Harry"
  }

  addUser(user)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})