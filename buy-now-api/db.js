// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: "me",
//   host: "localhost",
//   password: "password",
//   port: 5432,
//   database: "buynowapi"
// })

// const addUser = (user) => {
//   return new Promise(function(res, rej){
//     pool.query('INSERT INTO details (name) VALUES ($1)', [user.name], (error, results) => {
//       if (error) {
//         throw error
//       }
//       console.log( `User added with ID: ${results}`)
      
//     })
//   })
  
// }
// module.exports = { addUser}
let dbParams = {};
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
} else {
  
  dbParams = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  };
}

module.exports = dbParams;
