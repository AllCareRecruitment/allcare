'use client'

import { useRouter } from 'next/navigation'
import { useRegistration } from '../../services/context/RegistrationContext'

const RegistrationSelection = () => {
    const { setRegistrationType } = useRegistration()
    const router = useRouter()

    const handleButtonClick = (type: 'Applicant' | 'Employer') => {
        setRegistrationType(type)
        router.push('/register/create-profile')
    }

    return (
        <div>
            <button onClick={() => handleButtonClick('Applicant')}>Applicant</button>
            <br />
            <button onClick={() => handleButtonClick('Employer')}>Employer</button>
        </div>
    )
}

export default RegistrationSelection
