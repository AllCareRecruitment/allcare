import { NextRequest, NextResponse } from 'next/server'
import { registerUser } from '@/app/api/services/user.service'

export async function POST(req: NextRequest) {
    try {
        const userData = await req.json()

        if (!userData.name || !userData.surname || !userData.email || userData.active === undefined) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        const newUser = await registerUser(userData)

        return NextResponse.json({ user: newUser }, { status: 201 })

    } catch (error) {
        let errorMessage: string

        if (error instanceof Error) {
            errorMessage = error.message
        } else if (typeof error === 'string') {
            errorMessage = error
        } else {
            errorMessage = JSON.stringify(error)
        }

        return NextResponse.json(
            { error: 'Failed to register user', details: errorMessage },
            { status: 400 }
        )
    }
}
