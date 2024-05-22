const pool = require("./_pool");

createSession = async(req, res) => {
    const qr_code = "http://localhost:5173/"
    const now = new Date();
    const formattedDate = now.toISOString();
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