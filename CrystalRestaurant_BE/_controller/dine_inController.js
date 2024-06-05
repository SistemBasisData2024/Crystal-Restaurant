const pool = require("./_pool");
const crypto = require('crypto');
const moment = require('moment-timezone');

function md5Hash(text) {
    return crypto.createHash('md5').update(text).digest('hex');
}

//Membuat session dengan route /dine/create, param: tidak ada, return a Dine_in created object
createSession = async(req, res) => {
    const Datenow = new Date();
    const indonesiaTime = moment(Datenow).tz('Asia/Jakarta').format();
    const hashedSession = md5Hash(Datenow + indonesiaTime);

    const qr_code = "http://localhost:5173/" + hashedSession;
    try{
        const result = await pool.query(
            `INSERT INTO Dine_in(qr_code, dine_time, isExp, session)
            VALUES($1, $2, $3, $4) RETURNING *`,
            [qr_code, indonesiaTime, 0, hashedSession]
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