import React from 'react'
import { LoadingProvider } from './(ui)/services/context/LoadingContext'
import Spinner from './(ui)/components/spinner'
import { RegistrationProvider } from './(ui)/services/context/RegistrationContext'
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
                        <p>hello</p>
                        {children}
                    </RegistrationProvider>
                </LoadingProvider>
            </body>
        </html>
    )
}
