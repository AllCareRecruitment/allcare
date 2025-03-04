import React from 'react'
import { LoadingProvider } from './(ui)/context/LoadingContext'
import Spinner from './(ui)/components/spinner'
import { RegistrationProvider } from './(ui)/context/RegistrationContext'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/(routes)/auth/authOptions'
import SessionWrapper from '@/app/(ui)/(pages)/sessionWrapper'

type LayoutProps = {
    children: React.ReactNode;
};

export default async function RootLayout({ children }: LayoutProps) {
    const session = await getServerSession(authOptions)
    return (
        <html lang="en">
            <body>
                <LoadingProvider>
                    <RegistrationProvider>
                        <Spinner />
                        <SessionWrapper session={session}>
                            {children}
                        </SessionWrapper>
                    </RegistrationProvider>
                </LoadingProvider>
            </body>
        </html>
    )
}
