import { NextRequest, NextResponse } from 'next/server'
import { fetchPackagesForRole } from '@/app/api/services/packages.service'

export async function GET(req: NextRequest, context: { params: Promise<{ roleId: string }> }) {
    try {

        const { roleId } = await context.params
        const parsedRoleId = parseInt(roleId)

        if (isNaN(parsedRoleId)) {
            return NextResponse.json(
                { error: 'Invalid Role ID' },
                { status: 400 }
            )
        }

        const packages = await fetchPackagesForRole(parsedRoleId)
        if (packages) {
            return NextResponse.json({ packages }, { status: 200 })
        }

        return NextResponse.json(
            { message: 'No active packages found' },
            { status: 404 }
        )
    } catch (errors) {
        return NextResponse.json(
            { error: 'Failed to fetch packages', errors },
            { status: 500 }
        )
    }
}