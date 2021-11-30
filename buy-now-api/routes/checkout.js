const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const { v4: uuid } = require('uuid');

module.exports = (db) => {

  router.post("/", async (req, res) => {
    try {
      const { cart, token, subtotal } = req.body;
  
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      });
  
      const charge = await stripe.charges.create(
        {
          amount: subtotal * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip
            }
          }
        },
        {
          idempotencyKey: uuid()
        }
      );
      for (const product of cart) {
        let newQuantity = product.quantity - product.number_of_items;
        if(newQuantity < 0){
          newQuantity = 0
        }
        await db.query(`UPDATE products SET quantity = $1 WHERE id =  $2`, [newQuantity, product.product_id])
      }
      await db.query(
        `UPDATE carts 
        SET order_placed = true 
        WHERE carts.id = $1;`,
        [req.body.cart_id]
      );
  
      res.status(200).send({success: true})
    } catch (error) {
      console.error("Error:", error);
      res.status(400).send({error: error.message})
    }

  });
  
  return router;
};
