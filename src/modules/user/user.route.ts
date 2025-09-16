import express from "express"
import { UserController } from "./user.controller"

export const Userrouter = express.Router()


Userrouter.get("/" , UserController.gettAllUser)
Userrouter.post("/" , UserController.createUser)



