import { pool } from "../../database.js";

const getSales = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT s.id, s.amount, s.created_at, c.name AS customer_name
      FROM sales s
      JOIN customers c ON s.id_customer = c.id
      ORDER BY s.created_at DESC;
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Error al obtener ventas:", error);
    res.status(500).json({ message: "Error al obtener ventas" });
  }
};

export default getSales;
