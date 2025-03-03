'use client'

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'
import { RegistrationType } from '../models/RegistrationType'

type RegistrationTypeState = {
    type: RegistrationType | null;
    roleId: number | null;
};


interface RegistrationContextType {
    registrationType: RegistrationTypeState
    setRegistrationType: Dispatch<SetStateAction<RegistrationTypeState>>
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined)

export const RegistrationProvider = ({ children }: { children: ReactNode }) => {
    const [registrationType, setRegistrationType] = useState<RegistrationTypeState>({
        type: null,
        roleId: null
    });

    return (
        <RegistrationContext.Provider value={{ registrationType, setRegistrationType }}>
            {children}
        </RegistrationContext.Provider>
    );
};


export const useRegistration = () => {
    const context = useContext(RegistrationContext)
    if (!context) {
        throw new Error('useRegistration must be used within a RegistrationProvider')
    }
    return context
}
