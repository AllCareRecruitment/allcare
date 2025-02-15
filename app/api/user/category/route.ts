import { NextResponse } from 'next/server'

export async function GET():Promise<NextResponse> {
    try {
        const category = [
            { id: 1, name: 'John Doe', category: 'Admin' },
        ]

        return NextResponse.json({ category }, { status: 200 })
    } catch (errors) {
        return NextResponse.json(
            { error: 'Failed to fetch users', errors },
            { status: 500 }
        )
    }
}
