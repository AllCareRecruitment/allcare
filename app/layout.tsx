
import React from 'react'
import { LoadingProvider } from './(ui)/context/LoadingContext'
import Spinner from './(ui)/components/spinner'
import { RegistrationProvider } from './(ui)/context/RegistrationContext'
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <LoadingProvider>
                    <RegistrationProvider>
                        <Spinner />
                        {children}
                    </RegistrationProvider>
                </LoadingProvider>
            </body>
        </html>
    )
}
