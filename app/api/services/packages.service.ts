import { getPackagesByRoleId } from '@/app/api/repository/packages.repository'

export async function fetchPackagesForRole(roleId: number) {
    const data = await getPackagesByRoleId(roleId)

    if (!data) {
        throw new Error('Failed to get packages for role')
    }
    return data
}