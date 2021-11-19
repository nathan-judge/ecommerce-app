const express = require('express')
const app = express()
const port = 3545

app.get('/', (req, res) => {
  res.send('sup')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})