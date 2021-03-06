require("dotenv").config();

const express = require('express')
const bodyParser = require('body-parser')
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


//Mount all the routes
const productsRoutes = require("./routes/products");
app.use("/api/products", productsRoutes(db));


const productRoutes = require("./routes/product_details");
app.use("/api/product", productRoutes(db));

const userRoutes = require("./routes/user");
app.use("/api/users", userRoutes(db));

const cartRoutes = require("./routes/cart");
app.use("/api/cart", cartRoutes(db));

const checkoutRoutes = require("./routes/checkout")
app.use("/api/checkout", checkoutRoutes(db))

const reviewsRoutes = require("./routes/reviews");
app.use("/api/reviews", reviewsRoutes(db))


const adminRoutes = require("./routes/admin")
app.use("/api/admin", adminRoutes(db))

app.get('/', (req, res) => {
  res.send('Buynow')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})