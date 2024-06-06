const pool = require('./_pool');

//Controller untuk mendapatkan semua makanan dengan rute /food/getall, no param/body, return all food object
getAllFood = async(req, res) =>{
    try{
        const result = await pool.query(
            `SELECT * FROM food`
        );
        res.status(200).json(result.rows);
    }catch(err){
        console.error(err);
        res.status(500).json("false");
    }
}

createFood = async(req, res) =>{
    const {name, description, price, imageurl} = req.body;
    try{
        const result = await pool.query(
            `INSERT INTO Food(name, description, price, imageurl)
            VALUES($1, $2, $3, $4) RETURNING *`,
            [name, description, price, imageurl]
        );
        res.status(200).json(result.rows[0]);
    }catch(err){
        console.error(err);
        res.status(500).json("false");
    }
}

createCombo = async(req, res)=>{
    const {id} = req.params;
    const {food_id, name, description, price, imageurl} = req.body;
    try{
        const result = await pool.query(
            `INSERT INTO Combo(id, food_id, name, description, price, imageurl)
            VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
            [id, food_id, name, description, price, imageurl]
        );
        res.status(200).json(result.rows[0]);
    }catch(err){
        console.error(err);
        res.status(500).json("false");
    }
}

getCombo = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query(
            `SELECT 
                f.id AS food_id,
                f.name AS food_name,
                f.description AS food_description,
                f.price AS food_price,
                f.imageurl AS food_image_url
            FROM 
                Combo c
            INNER JOIN 
                Food f ON c.food_id = f.id
            WHERE 
                c.id = $1;`,
            [id]
        );
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json("false");
    }
}

getAllCombo = async (req, res) =>{
    try{
        const result = await pool.query(
            `SELECT 
            c.id AS combo_id,
            c.name AS combo_name,
            c.description AS combo_description,
            c.price AS combo_price,
            c.imageurl AS combo_image_url,
            json_agg(f.name) AS food_names
        FROM 
            Combo c
        INNER JOIN 
            Food f ON c.food_id = f.id
        GROUP BY 
            c.id, c.name, c.description, c.price, c.imageurl`
        );
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json("false");
    }
}


module.exports ={
    getAllFood,
    createFood,
    createCombo,
    getCombo,
    getAllCombo,
}