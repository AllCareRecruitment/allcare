import { prisma } from '@/app/api/lib/prisma'

export async function allUsersGet() {
    return prisma.user.findMany()
}

export async function userGet(id: string) {
    return prisma.user.findFirst(
        {
            where: {
                id: parseInt(id),
            },
            select: {
                id: true,
                name: true,
                surname: true,
                email: true,
                roleId: true
            }
        }
    )
}


export async function userGetByEmail(email: string) {
    return prisma.user.findUnique({
        where: { email },
    });
}


export async function createUser(userData: { name: string, surname: string, email: string, phoneNumber?: string, active: boolean, roleId?: number | null }) {
    return prisma.user.create({
        data: {
            ...userData,
            roleId: userData.roleId ?? null,  //create enum for em
        },
    });
}

export async function updateUser(id: string, userData: { name?: string; surname?: string; email?: string; phoneNumber?: string; active?: boolean }) {
    return prisma.user.update({
        where: {
            id: parseInt(id),
        },
        data: {
            name: userData.name,
            surname: userData.surname,
            email: userData.email,
            phoneNumber: userData.phoneNumber,
            active: userData.active
        },
    });
}