const router = require("express").Router();

module.exports = (db) => {
  router.get("/:id", async (req, res) => {
    try {
      const data = await db.query(
        `SELECT * FROM reviews
          WHERE product_id = $1 ORDER BY created_at DESC;`,
        [req.params.id]
      );
      res.status(200).send({ reviews: data.rows });
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  });
  router.post("/:id", async (req, res) => {
    console.log("req is: ", req)
    try {
      // product id, old avg rating, new rating, old number of items, review, user name
      const numberOfRatings = parseInt(req.body.number_of_ratings) + 1;
      //SHOULD LOAD WITH THE PAGE (not working because INT doesn't exist)
      let newAvgRating =
      (parseInt(req.body.number_of_ratings) *
      parseFloat(req.body.avg_rating) +
      parseFloat(req.body.rating)) /
      numberOfRatings;
      console.log("newAvgRating is: ", newAvgRating)
      
      await db.query(
        `UPDATE products 
        SET number_of_ratings = $1, avg_rating = $2 
        WHERE id = $3`,
        [numberOfRatings, newAvgRating, req.body.product_id]
        
      );
      console.log("2nd CONSOLE LOG IN POST")
      await db.query(
        `INSERT INTO reviews (product_id, username, comment, rating) 
        VALUES ($1, $2, $3, $4);`,
        [
          req.body.product_id,
          req.body.username,
          req.body.comment,
          req.body.rating
        ]
      );
      console.log("3RD CONSOLE LOG IN POST")
      res.status(200).send({ updated: true });
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  });
  return router;
};
