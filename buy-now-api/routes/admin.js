const router = require('express').Router();

module.exports = (db) => {
  
  router.post("/addProduct", async (req, res) => {
    console.log("testing", req.body);
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
          req.body.category,
        ]
      );

      res.status(200).send({ productAdded: true });
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  });

  router.post("/editProduct/:id", async (req, res) => {
    console.log("req.params is: ", req.params);
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
          req.params.id,
        ]
      );

      res.status(200).send({ productUpdated: true });
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  });

  router.delete("/deleteProduct/:id", async (req, res) => {
    console.log("req.params is", req.params);
    try {
      const data = await db.query(
        `
    DELETE FROM products 
    WHERE products.id = $1`,
        [req.params.id]
      );
      console.log("DELETE PRODUCT STEP 2 REACHED");
      res.status(200).send({ productDeleted: true });
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  });

 

  return router;
};