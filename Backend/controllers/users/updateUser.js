import { pool } from '../../database.js'

export const updateUser = async (req, res) => {
  const { id } = req.params
  const { name, email } = req.body
  const result = await pool.query(
    'UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *',
    [name, email, id]
  )
  res.json(result.rows[0])
}
