import { NextResponse } from 'next/server';
import { RoleService } from '@/app/api/services/role.service';

export async function POST(request: Request) {
    try {
        const { registrationType } = await request.json();
        const roleId = await RoleService.assignRole(registrationType);
        return NextResponse.json({ roleId }, { status: 200 });
    } catch (error) {
        const errMessage = (error as Error).message || 'An unknown error occurred';
        return NextResponse.json({ error: errMessage }, { status: 400 });
    }
}

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        if (url.searchParams.get("all") === "true") {
            // Get all roles
            const roles = await RoleService.getAllRoles();
            return NextResponse.json({ roles }, { status: 200 });
        }

        // Default: Return only role IDs
        const roleIds = await RoleService.getAllRoleIds();
        return NextResponse.json({ roleIds }, { status: 200 });
    } catch (error) {
        const errMessage = (error as Error).message || 'An unknown error occurred';
        return NextResponse.json({ error: errMessage }, { status: 400 });
    }
}