const router = require("express").Router();
const { v4: uuid } = require("uuid");

module.exports = (db) => {
  router.get("/:cartId", async (req, res) => {
    if (!req.params.cartId) {
      return res.status(200).send({ cart: [] });
    }
    try {
      const data = await db.query(
        `SELECT * FROM carts JOIN products
       ON product_id = products.id
       WHERE carts.id = $1 order by products.name;`,
        [req.params.cartId]
      );
      
      res.status(200).send({ cart: data.rows });
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  });
  router.post("/:cartId", async (req, res) => {
    try {
      console.log("POST CART", req.body);
      if (
        req.body.number_of_items === null ||
        req.body.number_of_items === undefined
      ) {
        //add to cart was clicked
        if (!req.body.cart_id) {
          //cart does not exist
          const cartId = uuid();
          await db.query(
            `INSERT INTO carts (id, product_id, number_of_items)
          VALUES ($1, $2, $3)`,
            [cartId, req.body.product_id, 1]
          );
          res.status(200).send({ cart_id: cartId });
        } else {
          //cart exists
          const data = await db.query(
            `SELECT * FROM carts WHERE id= $1 AND product_id=$2;`,
            [req.body.cart_id, req.body.product_id]
          );
          if (data.rows.length === 0) {
            // cart id exist but product does not exist in the cart
            await db.query(
              `INSERT INTO carts (id, product_id, number_of_items)
              VALUES ($1, $2, $3)`,
              [req.body.cart_id, req.body.product_id, 1]
            );
            res.status(200).send({ updated: true });
          } else {
            //product already exists in the cart
            let numberOfItems = data.rows[0].number_of_items + 1;
            await db.query(
              `UPDATE carts 
              SET number_of_items = $1 
              WHERE product_id = $2 AND carts.id = $3;`,
              [numberOfItems, req.body.product_id, req.body.cart_id]
            );
            res.status(200).send({ updated: true });
          }
        }
      } else if (req.body.number_of_items === 0) {
        //remove button clicked on cart page
        await db.query(
          `DELETE FROM carts
         WHERE product_id = $1 and carts.id = $2;`,
          [req.body.product_id, req.body.cart_id]
        );
        res.status(200).send({ updated: true });
      } else {
        //quantity changed on cart page
        await db.query(
          `UPDATE carts 
         SET number_of_items = $1 
         WHERE product_id = $2 AND carts.id = $3;`,
          [req.body.number_of_items, req.body.product_id, req.body.cart_id]
        );

        res.status(200).send({ updated: true });
      }
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  });

  return router;
};
