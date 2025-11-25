import { pool } from '../../database.js'

export const createUser = async (req, res) => {
  const { name, email, password } = req.body
  const result = await pool.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
    [name, email, password]
  )
  res.status(201).json(result.rows[0])
}
