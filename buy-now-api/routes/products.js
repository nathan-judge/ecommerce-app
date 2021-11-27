const router = require("express").Router();

module.exports = (db) => {
  router.get("/", async (req, res) => {
    try {
      const data = await db.query(`SELECT * FROM products;`);
      const products = data.rows;
      res.status(200).send({ products });
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  });

  router.get("/search", async (req, res) => {
    try {
      const data = await db.query(
        `SELECT * FROM products
                                   WHERE LOWER(name) LIKE '%'||$1||'%';`,
        [req.query.term]
      );
      const products = data.rows;
      res.status(200).send({ products });
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  });
  return router;
};
