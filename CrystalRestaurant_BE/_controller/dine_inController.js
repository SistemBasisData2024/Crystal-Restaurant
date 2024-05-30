const pool = require("./_pool");
const crypto = require('crypto');


function md5Hash(text) {
    return crypto.createHash('md5').update(text).digest('hex');
}

createSession = async(req, res) => {
    const now = new Date();
    const formattedDate = now.toISOString();

    const hashedSession = md5Hash(now + formattedDate);

    const qr_code = "http://localhost:5173/" + hashedSession;
    try{
        const result = await pool.query(
            `INSERT INTO Dine_in(qr_code, dine_time)
            VALUES($1, $2) RETURNING *`,
            [qr_code, formattedDate]
        );
        res.status(200).json(result.rows[0]);
    }catch(err){
        console.error(err);
        res.status(500).json("false");
    }
}

module.exports = {
    createSession,
}