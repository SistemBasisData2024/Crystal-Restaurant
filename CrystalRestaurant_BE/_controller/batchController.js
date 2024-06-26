const pool = require("./_pool");

//rute : /batch/addBatch
addBatch = async (req, res) => {
    const batch = req.body.batch;
    console.log(batch);
    if (!batch || !Array.isArray(batch)) {
        return res.status(400).send('Invalid input: batch must be an array of objects');
    }

    let query = 'INSERT INTO Batch (session, orderid, type, isDone, qty) VALUES ';
    const values = [];
    const notDone = false;
    
    try {
        for (const item of batch) {
            const { session, orderid, type, qty } = item;

            if(type == "food"){
                const checkFood = await pool.query(
                    `SELECT * FROM FOOD WHERE id = $1`,
                    [orderid]
                );
                if(checkFood.rows.length == 0){
                    return res.status(401).json("Food Not found")
                }
            } else if(type == "combo"){
                const checkCombo = await pool.query(
                    `SELECT * FROM FOOD WHERE id = $1`,
                    [orderid]
                );
                if(checkCombo.rows.length == 0){
                    return res.status(401).json("Food Not found")
                }
            }

            values.push(session, orderid, type, notDone, qty);
            const idx = values.length - 4;
            query += `($${idx}, $${idx + 1}, $${idx + 2}, $${idx + 3}, $${idx + 4}), `;
        }

        query = query.slice(0, -2);
        query += ' RETURNING *';
        const result = await pool.query(query, values);
        res.status(201).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json("false");
    }
};

//rute : /batch/getPrice
const batchPrice = async (req, res) => {
    const { session } = req.params;
    const response = {
        total: 0,
        orders: []
    };

    try {
        const getBatch = await pool.query(
            `SELECT * FROM BATCH WHERE session = $1`,
            [session]
        );

        for (const order of getBatch.rows) {
            let getPriceQuery, getPrice, getName;
            if (order.type === "food") {
                getPriceQuery = await pool.query(
                    `SELECT * FROM Food WHERE id = $1`,
                    [order.orderid]
                );
                getPrice = getPriceQuery.rows[0].price;
                getName = getPriceQuery.rows[0].name;
            } else if (order.type === "combo") {
                const getComboPrice = await pool.query(
                    `SELECT price, name FROM Combo WHERE id = $1`,
                    [order.orderid]
                );
                getPrice = getComboPrice.rows[0].price;
                getName = getComboPrice.rows[0].name;
            }
            
            response.orders.push({
                foodName: getName,
                foodPrice: getPrice,
                quantity: order.qty,
            });
            response.total += getPrice * order.qty;
        }

        res.status(200).json(response);

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Failed to calculate batch price" });
    }
}


module.exports = {
    addBatch,
    batchPrice
} 