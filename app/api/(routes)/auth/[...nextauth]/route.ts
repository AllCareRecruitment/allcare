import NextAuth, { User, Session } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { JWT } from 'next-auth/jwt'
const baseUrl = process.env.BASE_URL

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async signIn({ user }: {
            user: User
        }) {
            try {
                const response = await fetch(`${baseUrl}/api/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: user.email,
                    }),
                })

                const data = await response.json()
                if (response.ok && data.user) {
                    return true
                }

                return `${baseUrl}/login/?status=userNotFound`

            } catch (error) {
                return `${baseUrl}/login?status=signInFailed&message=${error}`
            }
        },
        async session({ session, token }: {
            session: Session
            token: JWT
        }) {
            if (token?.email && session.user) {
                session.user.email = token.email
            }
            return session
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
