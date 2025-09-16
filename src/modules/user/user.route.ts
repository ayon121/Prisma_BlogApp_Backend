import express from "express"
import { UserController } from "./user.controller"

export const Userrouter = express.Router()


Userrouter.get("/" , UserController.gettAllUser)
Userrouter.get("/:id" , UserController.getUserById)
Userrouter.post("/" , UserController.createUser)
Userrouter.patch(
    "/:id",
    UserController.updateUser
)
Userrouter.delete(
    "/:id",
    UserController.deleteUser
)



