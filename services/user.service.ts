import { prisma } from '@/lib/prisma'

export async function getAllUsers() {
    return prisma.users.findMany()
}

export async function getUserById(id: string) {
    return prisma.users.findFirst(
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

