import { prisma } from '@/app/api/lib/prisma'

export async function getAllUsers() {
    return prisma.user.findMany()
}

export async function getUserById(id: string) {
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

