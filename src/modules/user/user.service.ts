import { Prisma, User } from "@prisma/client";
import { prisma } from "../../config/db";

const createUser = async (payload: Prisma.UserCreateInput): Promise<User> => {
    console.log(payload);

    const createUser = await prisma.user.create({
        data: payload
    })

    return createUser
}


const getAllFromDB = async () => {
    const result = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            picture: true,
            role: true,
            status: true,
            Post: true
        },
        orderBy: {
            name: "asc"
        },
    })
    return result
}



const getUserById = async (id: number) => {
    const result = await prisma.user.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            picture: true,
            role: true,
            status: true,
            Post: true
        },
    })

    return result
}

export const UserService = {
    createUser,
    getAllFromDB,
    getUserById
}