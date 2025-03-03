import { prisma } from '@/app/api/lib/prisma'

export async function getPackagesByRoleId(roleId: number) {
    return prisma.subscriptionPlan.findMany({
        where: {
            roleId: roleId,
            active: true,
        },
        select: {
            planName: true,
            description: true,
            price: true,
        }
    })
}