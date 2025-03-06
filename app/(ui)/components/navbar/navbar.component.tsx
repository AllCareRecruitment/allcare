'use client'

import React from 'react'
import { MenuItems } from '@/app/(ui)/models/menu.model'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useLoading } from '@/app/(ui)/context/LoadingContext'

interface HeaderProps {
  menuItems: MenuItems[];
}

const Navbar: React.FC<HeaderProps> = ({ menuItems }) => {
    const { setLoading } = useLoading()
    const { data: session } = useSession()

    const handleSignIn = () => {
        setLoading(true)
        signIn('google', { callbackUrl: '/dashboard' }).then(() => setLoading(false))
    }

    return (
        <header className="bg-[#6e7262] text-white px-4 py-3 flex items-center justify-between">

            <h1 className="text-2xl font-bold">
                <span className="text-pink-400">AC</span> All Care Recruitment
            </h1>

            <nav className="flex items-center space-x-4">
                {menuItems.map((item) => 
                    <a
                        key={item.name}
                        href={item.url}
                        className="hover:underline"
                    >
                        {item.name}
                    </a>
                )}

                <div className="border-l border-white pl-4 ml-2">
                    {session ? 
                        <div className="flex items-center space-x-2">
                            <span>Welcome, {session.user?.name}!</span>
                            <button
                                onClick={() => signOut({ callbackUrl: '/login' })}
                                className="p-2 bg-red-500 text-white rounded"
                            >
                Sign out
                            </button>
                        </div>
                        : 
                        <div className="flex items-center space-x-2">
                            <a
                                href="/register"
                                className="text-white p-2 bg-pink-500 rounded-md"
                            >
                Register
                            </a>
                            <button
                                onClick={handleSignIn}
                                className="bg-blue-500 p-2 text-white rounded"
                            >
                Sign in with Google
                            </button>
                        </div>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar
