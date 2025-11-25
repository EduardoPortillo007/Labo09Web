import { pool } from "../../database.js";

const searchCustomerByCode = async (req, res) => {
  try {
    const { code } = req.query;

    if (!code) {
      return res.status(400).json({ message: "Codigo requerido" });
    }

    const result = await pool.query(
      "SELECT * FROM customers WHERE code = $1",
      [code]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    res.json(result.rows);
  } catch (err) {
    console.error("Error al buscar cliente por código", err);
    res.status(500).json({ message: "Error en el server" });
  }
};

export default searchCustomerByCode;
