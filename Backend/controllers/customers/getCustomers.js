import { pool } from "../../database.js";

const getCustomers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM customers ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching customers:", err);
    res.status(500).json({ message: "Error en el server" });
  }
};

export default getCustomers;
