import { pool } from "../../database.js";

const getSalesReport = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT c.name, SUM(s.amount) AS total_sales
      FROM sales s
      JOIN customers c ON s.id_customer = c.id
      GROUP BY c.name
      ORDER BY total_sales DESC
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Error al generar el reporte:", error);
    res.status(500).json({ message: "Error en el server" });
  }
};

export default getSalesReport;
