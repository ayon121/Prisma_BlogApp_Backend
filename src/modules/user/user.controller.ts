import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async(req : Request , res: Response) => {
    try {
        const result = await UserService.createUser(req.body)
        res.status(201).send(result)
    } catch (error) {
        console.log(error); 
    }
}


const gettAllUser = async(req : Request , res: Response) => {
    try {
        const result = await UserService.getAllFromDB()
        res.send(result)
    } catch (error) {
        console.log(error); 
    }
}


export const UserController = {
    createUser,
    gettAllUser,
}