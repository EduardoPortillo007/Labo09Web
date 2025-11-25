import { Router } from 'express'
import {
  displayHome,
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/users/index.js'

import { getCustomers, searchCustomerByCode } from "../controllers/customers/index.js";
import verifyToken from '../middlewares/verifyToken.js'

import { createSale, getSales, getSalesReport } from "../controllers/sales/index.js";


const router = Router()

router.get('/home', displayHome)
router.get('/users', verifyToken, getUsers)
router.get('/users/:id', verifyToken, getUserById)
router.post('/users', verifyToken, createUser)
router.put('/users/:id', verifyToken, updateUser)
router.delete('/users/:id', verifyToken, deleteUser)
router.get("/api/customers", verifyToken, getCustomers);
router.post("/api/sales", verifyToken, createSale);
router.get("/api/sales", verifyToken, getSales);
router.get("/api/customers/search", verifyToken, searchCustomerByCode);
router.get("/api/sales/report", verifyToken, getSalesReport);

export default router
