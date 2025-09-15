import express from "express"
import { UserController } from "./user.controller"

export const Userrouter = express.Router()

Userrouter.post("/" , UserController.createUser)


