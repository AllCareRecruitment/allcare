import { allUsersGet, userGet } from '@/app/api/repository/user.repository'

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

