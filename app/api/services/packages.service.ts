import { getPackagesByRoleId } from '@/app/api/repository/packages.repository'

export async function fetchPackagesForRole(roleId: number) {
    return getPackagesByRoleId(roleId)
}