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
        <header className="bg-jobseekers text-white p-4 grid grid-cols-2 items-center">
            {/*<Image src="/logo.png" alt="Logo" width={100} height={100} layout="responsive" />*/}
            <h1 className="text-2xl font-bold">All Care Recruitment</h1>
            <nav className="flex justify-end items-center">
                {
                    menuItems.map((item) =>
                        <a key={item.name} href={item.url} className="text-white hover:underline p-2">
                            {item.name}
                        </a>
                    )
                }

                <div className="border-l-2 border-white ml-2">
                    {session ?
                        <div className="ml-4 p-2 flex gap-4 items-center">
                            <p>Welcome, {session.user?.name}!</p>
                            <button
                                onClick={() => signOut({ callbackUrl: '/login' })}
                                className="p-2 bg-red-500 text-white rounded"
                            >
                                Sign out
                            </button>
                        </div>
                        :
                        <div className="ml-4 p-2 flex gap-4 items-center">
                            <a href="/register" className="text-white p-2 bg-accent rounded-md">
                                Register
                            </a>
                            <button
                                onClick={() => handleSignIn()}
                                className="bg-blue-500 p-2 text-white rounded"
                            >
                                Sign in with google
                            </button>
                        </div>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar
