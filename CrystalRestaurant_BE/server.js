const express = require('express');
const app = express();
const connectDB = require('./connector.js');
const PORT = process.env.PORT;
const routes = require("./_routes/_routes.js");
const cors = require("cors");
const pool = require("./_controller/_pool.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Query untuk increment expiry dari suatu session, ketika mencapai 1 Jam/ 60 menit maka akan dihapus dari database
async function incrementIsExp() {    
    try {
      const result = await pool.query(`UPDATE Dine_in SET isExp = isExp + 1 RETURNING *`);
      const deleted = await pool.query(`DELETE FROM Dine_in WHERE isExp >= 60 RETURNING *`);
      console.log("1 Minute pass by");
      console.log("session yang dihapus:\n" + deleted.rows);
    } catch (err) {
      console.error('Error incrementing isExp field:', err);
    }
  }
  setInterval(incrementIsExp, 60000);

connectDB.connectDB();
app.use(routes);

app.listen(PORT, () => {
    console.info("Server is running on port", PORT);
});
