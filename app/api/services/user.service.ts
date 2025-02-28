import { allUsersGet, userGet, userGetByEmail, createUser, updateUser } from '@/app/api/repository/user.repository'

export async function getAllUsers() {
    const data = await allUsersGet()
    if (data.length === 0) {
        throw new Error('No users found')
    }
    return data
}

export async function getUserById(id: string) {
    const data = await userGet(id)
    if (!data) {
        throw new Error('User not found')
    }
    return data
}

export async function getUserByEmail(email: string) {
    return await userGetByEmail(email) || null 
    
}

export async function registerUser(userData: { 
    name: string, 
    surname: string, 
    email: string, 
    phoneNumber?: string, 
    active: boolean, 
    roleId?: number | null 
}) {
    
    const existingUser = await getUserByEmail(userData.email)

    if (existingUser) {
        return { error: 'Email already in use' } 
        
    }

    return await createUser(userData)
}

export async function updateUserDetails(
    id: string, userData: {
        name?: string, surname?: string, email?: string, phoneNumber?: string, active?: boolean, roleId?: number | null
    })
{
    return updateUser(id, userData)
}
