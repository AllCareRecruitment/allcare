import { getPackagesByRoleId } from '@/app/api/repository/packages.repository'

export async function fetchPackagesForRole(roleId: number) {
    try {
        const packages = await getPackagesByRoleId(roleId)
        if (packages.length === 0) {
            return null
        }

        return packages
    } catch (error) {
        throw error
    }
}
