import { pool } from "../../database.js";

const createSale = async (req, res) => {
  try {
    console.log("Datos recibidos desde frontend:", req.body);

    // Convertir a número (React envía strings)
    const amount = Number(req.body.amount);
    const id_customer = Number(req.body.id_customer);

    console.log("Valores convertidos:", { amount, id_customer });

    // Validar campos
    if (!amount || !id_customer) {
      return res.status(400).json({
        message: "amount e id_customer requeridos",
      });
    }

    // Validar que el cliente exista
    const customerExists = await pool.query(
      "SELECT * FROM customers WHERE id = $1",
      [id_customer]
    );

    console.log("Resultado de búsqueda:", customerExists.rows);

    if (customerExists.rowCount === 0) {
      return res.status(404).json({
        message: "El cliente no existe",
      });
    }

    // Insertar venta
    await pool.query(
      "INSERT INTO sales (amount, created_at, id_customer) VALUES ($1, NOW(), $2)",
      [amount, id_customer]
    );

    res.json({ message: "Venta registrada con éxito" });

  } catch (err) {
    console.error("Error creating sale:", err);
    res.status(500).json({ message: "Error en el server" });
  }
};

export default createSale;
