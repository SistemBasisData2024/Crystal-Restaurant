const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

connectDB = async function(){
    const pool = new Pool({
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        
        ssl: {
            require: true,
        },
    })
    
    pool.connect().then(()=>{
        console.log("Database Connected");
    });
}

module.exports = {connectDB};