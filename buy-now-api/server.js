require("dotenv").config();

const express = require('express')
const bodyParser = require('body-parser')
// const {addUser} = require('./db')
const app = express()
const port = 3545

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: 'usd',
    payment_method_types: ['card'],
    receipt_email: 'jenny.rosen@example.com',
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});




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

app.get("/test", (req, res) => {
  const user = {
    name: "Harry"
  }

  addUser(user)
})

//Mount all the routes
const productRoutes = require("./routes/product");
app.use("/api/products", productRoutes(db));
console.log("hello1")

const userRoutes = require("./routes/user");
app.use("/api/users", userRoutes(db));
console.log("hellouser")

const cartRoutes = require("./routes/cart");
app.use("/api/cart", cartRoutes(db));

const orderRoutes = require("./routes/order");
app.use("/api/order", orderRoutes(db));




app.get('/', (req, res) => {
  console.log("testget")
  res.send('sup')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})