'use client'

import React, { useState } from 'react'
import { registerUser } from '@/app/(ui)/services/userService'
import { useRegistration } from '@/app/(ui)/context/RegistrationContext'
import { useRouter } from 'next/navigation'

const ProfileForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phoneNumber: '',
    })

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const router = useRouter()
    const { registrationType } = useRegistration()
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')

        try {
            // Ensure roleId is available before proceeding
            if (!registrationType.roleId) {
                throw new Error('Role ID is missing. Please select a registration type.')
            }

            await registerUser(formData, registrationType.roleId)
            setMessage('Profile created successfully!')
            setFormData({ name: '', surname: '', email: '', phoneNumber: '' })
            router.push('/register/package-selection')
        } catch (error) {
            if (error instanceof Error) {
                setMessage(`Error: ${error.message}`)
            } else {
                setMessage('Error: Could not register user. Please try again later.')
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#d6d4ad]">
            <div className="bg-[#d6d4ad] p-10 rounded-lg shadow-lg w-96">
                <h2 className="text-3xl font-bold text-[#6a5d3c] text-center mb-6">
                    Create Your Profile.
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm
                            text-black focus:ring-gray-500 focus:border-gray-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Surname</label>
                        <input
                            type="text"
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm
                            text-black focus:ring-gray-500 focus:border-gray-500"
                            placeholder="Enter your surname"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm
                            text-black focus:ring-gray-500 focus:border-gray-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black
                            focus:ring-gray-500 focus:border-gray-500"
                            placeholder="Enter your contact number"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 w-full bg-[#6a5d3c] text-white py-2 px-4 rounded-md
                        hover:bg-[#5a4d32] transition flex items-center justify-center gap-2
                        font-semibold shadow-md border border-[#5a4d32]"
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Submit'} <span>&rarr;</span>
                    </button>
                    {message && 
                        <p className="text-center mt-2 text-sm font-semibold text-[#6a5d3c]">
                            {message}
                        </p>
                    }
                </form>
            </div>
        </div>
    )
}

export default ProfileForm
