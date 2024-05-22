const pool = require('./_pool.js');
const crypto = require('crypto');

function md5Hash(text) {
    return crypto.createHash('md5').update(text).digest('hex');
}

signUp = async(req, res) =>{
    const{name, username, email, password} = req.body;
    const isAdmin = false;
    try{
        const result = await pool.query(
            `INSERT INTO Users (name, username, email, password, isAdmin)
            VALUES($1, $2, $3, $4, $5) RETURNING *`,
            [name, username, email, md5Hash(password), isAdmin]
        );
        res.status(200).json(result.rows[0]);
    }catch(err){
        console.error(err);
        res.status(500).json("false");
    }
}

login = async(req, res) =>{
    const{username, password} = req.body;
    try{
        const result = await pool.query(
            `SELECT * FROM Users WHERE username = $1 AND password = $2`,
            [username, md5Hash(password)]
        );

        if(result.rows.length == 0){
            return res.status(300).json("user not found");
        }
        
        res.status(200).json(result.rows[0]);
    }catch(err){
        console.error(err);
        res.status(500).json("false");
    }
}

updateUser = async(req, res) =>{
    const{id} = req.params;
    const{name} = req.body;
    try{
        const result = await pool.query(
            `UPDATE Users SET name = $1 WHERE id = $2 RETURNING *`,
            [name, id]
        );
        res.status(201).json(result.rows[0]);
    }catch(err){
        console.error(err);
        res.status(500).json("false");
    }
}

module.exports ={
    login,
    signUp,
    updateUser,
}