'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type RegistrationType = 'Applicant' | 'Employer' | null

interface RegistrationContextType {
    registrationType: RegistrationType;
    setRegistrationType: (type: RegistrationType) => void
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined)

export const RegistrationProvider = ({ children }: { children: ReactNode }) => {
    const [registrationType, setRegistrationType] = useState<RegistrationType>(null)

    return (
        <RegistrationContext.Provider value={{ registrationType, setRegistrationType }}>
            {children}
        </RegistrationContext.Provider>
    )
}

export const useRegistration = () => {
    const context = useContext(RegistrationContext)
    if (!context) {
        throw new Error('useRegistration must be used within a RegistrationProvider')
    }
    return context
}
