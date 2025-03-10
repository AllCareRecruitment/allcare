'use client'

import { createContext, useContext, useState, ReactNode, SetStateAction, Dispatch } from 'react'

interface LoadingContextType {
    isLoading: boolean
    setLoading: Dispatch<SetStateAction<boolean>>
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <LoadingContext.Provider value={{ isLoading, setLoading: setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}

export const useLoading = () => {
    const context = useContext(LoadingContext)
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider')
    }
    return context
}
