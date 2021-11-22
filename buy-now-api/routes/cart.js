const router = require('express').Router();

module.exports = (db) => {
  
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM carts;`)
      .then(data => {
        console.log("Hello carts")
        const products = data.rows;
        res.json({ products });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  router.post("/", (req, res) => {
    db.query(`SELECT * FROM carts;`)
      .then(data => {
        console.log("Hello")
        const products = data.rows;
        res.json({ products });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};

