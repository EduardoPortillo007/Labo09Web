import { pool } from "./database.js";

const createTables = async () => {
  try {
    // Crear tabla customers
    await pool.query(`
      CREATE TABLE IF NOT EXISTS customers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        address VARCHAR(200),
        phone VARCHAR(20),
        code VARCHAR(20)
      );
    `);

    // Crear tabla sales
    await pool.query(`
      CREATE TABLE IF NOT EXISTS sales (
        id SERIAL PRIMARY KEY,
        amount INT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        id_customer INT REFERENCES customers(id)
      );
    `);

    console.log("✔ Tablas creadas correctamente");

    // Insertar un cliente de prueba
    await pool.query(`
      INSERT INTO customers (name, address, phone, code)
      VALUES ('Cliente Demo', 'San Salvador', '7777-7777', 'C001');
    `);

    console.log("✔ Cliente demo insertado");

    process.exit(0);
  } catch (err) {
    console.error("Error inicializando la DB:", err);
    process.exit(1);
  }
};

createTables();
