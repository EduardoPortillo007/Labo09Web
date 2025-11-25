import { pool } from '../../database.js'

export const deleteUser = async (req, res) => {
  const { id } = req.params
  await pool.query('DELETE FROM users WHERE id = $1', [id])
  res.json({ message: 'Usuario eliminado' })
}
