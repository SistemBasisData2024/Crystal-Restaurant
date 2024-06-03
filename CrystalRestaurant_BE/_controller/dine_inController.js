const pool = require("./_pool");
const crypto = require('crypto');
const moment = require('moment-timezone');

function md5Hash(text) {
    return crypto.createHash('md5').update(text).digest('hex');
}

createSession = async(req, res) => {
    const Datenow = new Date();
    const indonesiaTime = moment(Datenow).tz('Asia/Jakarta').format();
    const hashedSession = md5Hash(Datenow + indonesiaTime);

    const qr_code = "http://localhost:5173/" + hashedSession;
    try{
        const result = await pool.query(
            `INSERT INTO Dine_in(qr_code, dine_time, isExp)
            VALUES($1, $2, $3) RETURNING *`,
            [qr_code, indonesiaTime, 0]
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