import React from 'react'
import { LoadingProvider } from './(ui)/services/context/LoadingContext'
import Spinner from './(ui)/components/spinner'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <LoadingProvider>
                    <Spinner />
                    <p>hello</p>
                    {children}
                </LoadingProvider>
            </body>
        </html>
    )
}
