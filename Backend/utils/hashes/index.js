// utils/hashes/index.js
import bcrypt from "bcrypt"
import { HASH_COMPLEXITY } from "../../keys.js"

export const generateHash = async (password) => {
  return await bcrypt.hash(password, HASH_COMPLEXITY)
}

