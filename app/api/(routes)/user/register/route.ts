import { NextRequest, NextResponse } from 'next/server';
import { registerUser } from '@/app/api/services/user.service';

export async function POST(req: NextRequest) {
    try {
        console.log('Received a request to register a user');

        const userData = await req.json();
        console.log('Parsed user data:', userData);

        
        if (!userData.name || !userData.surname || !userData.email || userData.active === undefined) {
            console.error('Validation Error: Missing required fields', userData);
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const newUser = await registerUser(userData);
        console.log('User registered successfully:', newUser);

        return NextResponse.json({ user: newUser }, { status: 201 });

    } catch (error: any) {
        console.error('Error in user registration:', error);

        return NextResponse.json(
            { error: 'Failed to register user', details: error.message || error },
            { status: 400 }
        );
    }
}
