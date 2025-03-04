'use client'

import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'
import { Session } from 'next-auth'

type SessionWrapperProps = {
    session: Session | null;
    children: ReactNode;
};

export default function SessionWrapper({ session, children }: SessionWrapperProps) {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}
