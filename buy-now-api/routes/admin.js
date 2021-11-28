const router = require('express').Router();

module.exports = (db) => {
  
  router.post("/addProduct", async(req, res) => {
      console.log("testing", req.body)
    try {
      const data = await db.query(`INSERT INTO products (name, price, quantity, thumbnail_photo_url, description, category)
      VALUES ($1,$2,$3,$4,$5,$6)`, [req.body.name, req.body.price, req.body.quantity, req.body.thumbnail_photo_url, req.body.description, req.body.category])

      res.status(200).send({productAdded: true});
      
      }
      catch(e) {
        res
          .status(500)
          .send({ error: e.message });
      }
  });


  return router;
};