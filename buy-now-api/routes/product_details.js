const router = require("express").Router();

module.exports = (db) => {
  router.get("/:id", async (req, res) => {
    try {
      const data = await db.query(
        `SELECT * FROM products
         WHERE products.id = $1;`,
        [req.params.id]
      );

      res.status(200).send({ product: data.rows[0] });
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  });

  return router;
};
