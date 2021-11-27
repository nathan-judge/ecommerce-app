const router = require('express').Router();

module.exports = (db) => {
  
  router.get("/add-product", async(req, res) => {
    try {
      const data = await db.query(`INSERT INTO products (name, price, quantity, thumbnail_photo_url, description, category)
      VALUES ('$1,$2,$3,$4,$5,$6'),`)
      
        const products = data.rows;
        res.status(200).send({ products });
      }
      catch(e) {
        res
          .status(500)
          .send({ error: e.message });
      }
  });


  return router;
};