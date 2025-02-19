import { prisma } from '@/app/api/lib/prisma'

export async function upsertAuthToken(userId: number, token: string) {
    return prisma.authTokens.upsert({
        where: {
            userId: userId,  
        },
        update: {
            token: token,  
            updatedAt: new Date(),  
        },
        create: {
            userId: userId,  
            token: token,
            createdAt: new Date(),  
            updatedAt: new Date(),  
        },
    })
}
