import { prisma } from '@/app/api/lib/prisma'
import { Role } from '@prisma/client'

export const RoleRepository = {
    async getRoleIdByType(registrationType: string): Promise<number | null> {
        try {
            const role = await prisma.role.findFirst({
                where: { name: registrationType },
                select: { id: true },
            })
            return role ? role.id : null
        } catch (error) {
            throw new Error(`Could not fetch role ID: ${(error as Error).message}`)
        }
    },

    async getAllRoleIds(): Promise<number[]> {
        try {
            const roles = await prisma.role.findMany({
                select: { id: true },
            })
            return roles.map((role) => role.id)
        } catch (error) {
            throw new Error(`Could not fetch all role IDs: ${(error as Error).message}`)
        }
    },

    async getAllRoles(): Promise<Role[]> {
        try {
            return await prisma.role.findMany()
        } catch (error) {
            throw new Error(`Could not fetch all roles: ${(error as Error).message}`)
        }
    },
}
