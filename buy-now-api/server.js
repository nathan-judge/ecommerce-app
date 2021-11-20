require("dotenv").config();

const express = require('express')
const bodyParser = require('body-parser')
// const {addUser} = require('./db')
const app = express()
const port = 3545

//bodyParser middleware
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)



// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./db.js");
const db = new Pool(dbParams);
db.connect();

// app.get("/test", (req, res) => {
//   const user = {
//     name: "Harry"
//   }

//   addUser(user)
// })

//Mount all the routes
const productRoutes = require("./routes/product");
app.use("/api/products", productRoutes(db));



app.get('/', (req, res) => {
  res.send('sup')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send('sup')
})