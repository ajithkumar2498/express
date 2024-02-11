import { Router } from "express"
import UserController from "../controller/user.js"
const router = Router()

router.get('/',UserController.getAllUsers)

router.get('/:id',UserController.getUserById)

router.post('/',UserController.AddUser)
router.put('/:id',UserController.EditUserById)
router.delete('/:id',UserController.DeleteUserById)
export default router

