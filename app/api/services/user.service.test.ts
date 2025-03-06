import { getAllUsers, getUserById, getUserByEmail, registerUser, updateUserDetails } from './user.service'
import { allUsersGet, userGet, userGetByEmail, createUser, updateUser } from '@/app/api/repository/user.repository'
import { expect } from '@jest/globals'

jest.mock('@/app/api/repository/user.repository')

describe('User Service', () => {
    const mockUser = {
        id: '1',
        name: 'John',
        surname: 'Doe',
        email: 'john@example.com',
        active: true
    }

    beforeEach(() => {
        jest.clearAllMocks()
    })

    describe('getAllUsers', () => {
        it('should return users when users exist', async () => {
            (allUsersGet as jest.Mock).mockResolvedValue([mockUser])
            const result = await getAllUsers()
            expect(result).toEqual([mockUser])
        })

        it('should throw error when no users found', async () => {
            (allUsersGet as jest.Mock).mockResolvedValue([])
            await expect(getAllUsers()).rejects.toThrow('No users found')
        })
    })

    describe('getUserById', () => {
        it('should return user when found', async () => {
            (userGet as jest.Mock).mockResolvedValue(mockUser)
            const result = await getUserById('1')
            expect(result).toEqual(mockUser)
        })

        it('should throw error when user not found', async () => {
            (userGet as jest.Mock).mockResolvedValue(null)
            await expect(getUserById('1')).rejects.toThrow('User not found')
        })
    })

    describe('getUserByEmail', () => {
        it('should return user when found', async () => {
            (userGetByEmail as jest.Mock).mockResolvedValue(mockUser)
            const result = await getUserByEmail('john@example.com')
            expect(result).toEqual(mockUser)
        })

        it('should return null when user not found', async () => {
            (userGetByEmail as jest.Mock).mockResolvedValue(null)
            const result = await getUserByEmail('nonexistent@example.com')
            expect(result).toBeNull()
        })
    })

    describe('registerUser', () => {
        const newUserData = {
            name: 'Jane',
            surname: 'Smith',
            email: 'jane@example.com',
            active: true
        }

        it('should create new user when email not in use', async () => {
            (userGetByEmail as jest.Mock).mockResolvedValue(null)
            (createUser as jest.Mock).mockResolvedValue(newUserData)

            const result = await registerUser(newUserData)
            expect(result).toEqual(newUserData)
        })

        it('should return error when email already in use', async () => {
            (userGetByEmail as jest.Mock).mockResolvedValue(mockUser)

            const result = await registerUser(newUserData)
            expect(result).toEqual({ error: 'Email already in use' })
        })
    })

    describe('updateUserDetails', () => {
        const updateData = {
            name: 'Updated Name'
        }

        it('should update user details successfully', async () => {
            const updatedUser = { ...mockUser, ...updateData }
            (updateUser as jest.Mock).mockResolvedValue(updatedUser)

            const result = await updateUserDetails('1', updateData)
            expect(result).toEqual(updatedUser)
            expect(updateUser).toHaveBeenCalledWith('1', updateData)
        })
    })
})
