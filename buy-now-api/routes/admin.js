const router = require("express").Router();

module.exports = (db) => {
  
  router.post("/addProduct", async (req, res) => {
    try {
      const data = await db.query(
        `INSERT INTO products (name, price, quantity, thumbnail_photo_url, description, category)
      VALUES ($1,$2,$3,$4,$5,$6)`,
        [
          req.body.name,
          req.body.price,
          req.body.quantity,
          req.body.thumbnail_photo_url,
          req.body.description,
          req.body.category
        ]
      );

      res.status(200).send({ productAdded: true });
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  });

  router.post("/edit_product/:id", async (req, res) => {
    try {
      const data = await db.query(
        `
    UPDATE products SET name = $1, 
                        price = $2, 
                        quantity = $3 , 
                        thumbnail_photo_url = $4 , 
                        description = $5, 
                        category = $6
                    WHERE products.id = $7;`,
        [
          req.body.name,
          req.body.price,
          req.body.quantity,
          req.body.thumbnail_photo_url,
          req.body.description,
          req.body.category,
          req.params.id
        ]
      );

      res.status(200).send({ productUpdated: true });
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  });

  router.post("/delete_product/:id", async (req, res) => {
    try {
      const data = await db.query(
        `DELETE FROM products
          WHERE id = $1 `,
        [req.params.id]
      );

      res.status(200).send({ productDeleted: true });
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  });

  router.get("/order_history", async (req, res) => {
    try {
      const data = await db.query(`SELECT count(*) FROM carts where order_placed = true;`);
      
      
      res.status(200).send(data.rows[0].count);
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  });

  return router;
};
