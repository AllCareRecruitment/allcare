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

