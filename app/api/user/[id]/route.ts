import { NextRequest, NextResponse } from 'next/server'
import { getUserById } from '@/services/user.service'

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params
        const user = await getUserById(id)

        if (user === null) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 200 }
            )
        }

        return NextResponse.json({ user }, { status: 200 })
    } catch (errors) {
        return NextResponse.json(
            { error: 'Failed to fetch users', errors },
            { status: 500 }
        )
    }
}
