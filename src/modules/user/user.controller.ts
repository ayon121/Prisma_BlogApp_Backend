import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async(req : Request , res: Response) => {
    try {
        const result = await UserService.createUser(req.body)
        res.status(201).send(result)
    } catch (error) {
        res.send(500)
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


const getUserById = async(req : Request , res: Response) => {
    const id = Number(req.params.id)
    try {
        const result = await UserService.getUserById(id)
        res.send(result)
    } catch (error) {
        console.log(error); 
    }
}


const updateUser = async (req: Request, res: Response) => {
    try {
        const result = await UserService.updateUser(Number(req.params.id), req.body)
        res.status(201).json(result);
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const result = await UserService.deleteUser(Number(req.params.id))
        res.status(201).json(result);
    } catch (error) {
        res.status(500).send(error)
    }
}

export const UserController = {
    createUser,
    gettAllUser,
    getUserById,
    updateUser,
    deleteUser
}