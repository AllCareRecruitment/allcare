import React from 'react'
import { MenuItems } from '@/app/(ui)/models/menu.model'
import Image from 'next/image'

interface HeaderProps {
    menuItems: MenuItems[];
}

const Navbar: React.FC<HeaderProps> = ({ menuItems }) => {
    return (
        <header className="bg-jobseekers text-white p-4 grid grid-cols-2 h-16">
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
                    <a href="/login" className="text-white hover:underline ml-4 p-2 bg-secondary rounded-md">
                        Login
                    </a>

                    <a href="/register" className="text-white hover:underline ml-4 p-2 bg-accent rounded-md">
                        Register
                    </a>
                </div>
            </nav>

        </header>
    )
}

export default Navbar
