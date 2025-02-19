'use client'

import { useRegistration } from '../../../services/context/RegistrationContext'

const CreateProfilePage = () => {
    const { registrationType } = useRegistration()

    return (
        <div>
            <h1>Create Profile Page</h1>
            <p>Registration Type: {registrationType}</p>
        </div>
    )
}

export default CreateProfilePage
