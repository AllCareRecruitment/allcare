'use client'
import { useSearchParams } from 'next/navigation'

export default function Login() {
    const searchParams = useSearchParams()
    const status = searchParams.get('status')

    if (status) {
        return <p>Error: {status}</p>
    }

    return (
        <div>
            <p>Please log in</p>
        </div>
    )
}
