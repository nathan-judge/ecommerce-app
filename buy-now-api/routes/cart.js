const router = require("express").Router();

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
      console.log("Hello carts");
      res.status(200).send({ cart: data.rows });
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  });
  router.post("/:cartId", async (req, res) => {
    try {
      console.log("POST CART", req.body);
      if (!req.body.number_of_items) {
        await db.query(
          `DELETE FROM carts
         WHERE product_id = $1 and carts.id = $2;`,
          [req.body.product_id, req.body.cart_id]
        );
        res.status(200).send({ updated: true });
      } else {
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
