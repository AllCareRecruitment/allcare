import { NextRequest, NextResponse } from 'next/server'
import { fetchPackagesForRole } from '@/app/api/services/packages.service'

export async function GET(req: NextRequest, context: { params: Promise<{ roleId: string }> }) {
    try {

        const { roleId } = await context.params
        const parsedRoleId = parseInt(roleId)

        const packages = await fetchPackagesForRole(parsedRoleId)
        if (packages.length) {
            return NextResponse.json({ packages }, { status: 200 })
        }

        return NextResponse.json(
            { message: 'No active packages found' },
            { status: 200 }
        )
    } catch (errors) {
        return NextResponse.json(
            { error: 'Failed to fetch packages', errors },
            { status: 500 }
        )
    }
}