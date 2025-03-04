import { Role } from '@prisma/client'
import { RoleRepository } from '../repository/role.repository'

export const RoleService = {
    async assignRole(registrationType: string): Promise<number> {
        const roleId = await RoleRepository.getRoleIdByType(registrationType)
        if (!roleId) {
            throw new Error('Role not found')
        }
        return roleId
    },

    async getAllRoleIds(): Promise<number[]> {
        return await RoleRepository.getAllRoleIds()
    },

    async getAllRoles(): Promise<Role[]> {
        return await RoleRepository.getAllRoles()
    }
}
