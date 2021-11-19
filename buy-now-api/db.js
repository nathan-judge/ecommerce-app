const Pool = require('pg').Pool
const pool = new Pool({
  user: "me",
  host: "localhost",
  password: "password",
  port: 5432,
  database: "buynowapi"
})

const addUser = (user) => {
  return new Promise(function(res, rej){
    pool.query('INSERT INTO details (name) VALUES ($1)', [user.name], (error, results) => {
      if (error) {
        throw error
      }
      console.log( `User added with ID: ${results}`)
      
    })
  })
  
}
module.exports = { addUser}