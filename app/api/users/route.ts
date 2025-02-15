import { NextResponse, NextRequest } from 'next/server'
import { getAllUsers } from '@/services/user.service'

export async function GET (){
    try {
        const users = await getAllUsers()
        return NextResponse.json({ users }, { status: 200 })

    } catch (errors) {
        return NextResponse.json(
            { error: 'Internal Server Error', errors },
            { status: 500 }
        )
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // Handle the POST request data
        const newUser = {
            id: Math.random(),
            ...body
        }

        return NextResponse.json(
            { message: 'User created', user: newUser },
            { status: 201 }
        )
    } catch (errors) {
        return NextResponse.json(
            { error: 'Internal Server Error', errors },
            { status: 500 }
        )
    }
}
