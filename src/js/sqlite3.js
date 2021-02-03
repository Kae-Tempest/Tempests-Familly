const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database('../db/bdd.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });

  let email = db.all('Select * from users')
  console.log(email)


  exports.module = {
      sqlite3,
      db
  }