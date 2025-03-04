'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRegistration } from '../../context/RegistrationContext'
import { RegistrationType } from '../../models/RegistrationType'
import { getAllRoles, Role } from '../../services/roleService'

const RegistrationSelection = () => {
    const { setRegistrationType } = useRegistration()
    const router = useRouter()
    const [roles, setRoles] = useState<Role[]>([])

    useEffect(() => {
        async function fetchRoles() {
            try {
                const fetchedRoles = await getAllRoles()
                setRoles(fetchedRoles)
            } catch (error) {
                return error
            }
        }
        fetchRoles()
    }, [])

    const getRoleIdByType = (type: RegistrationType): number | null => {
        const role = roles.find((r) => r.name === type)
        return role ? role.id : null
    }

    const handleButtonClick = (type: RegistrationType) => {
        const roleId = getRoleIdByType(type)
        if (roleId !== null) {
            setRegistrationType((prevState) => ({
                ...prevState, 
                type,
                roleId,
            }))
            router.push('/register/create-profile')
        } 
    }

    return (
        <div className="flex flex-col md:flex-row flex-1">
            <div className="flex-1 flex flex-col justify-center
                items-center bg-jobseekers text-light p-10 w-full md:w-1/2">
                <h2 className="text-3xl font-bold">FOR JOB SEEKERS</h2>
                <p className="text-lg mt-2">{'Let\'s get you Hired'}</p>
                <h1 className="text-5xl font-bold text-highlight mt-2">HIRED</h1>
                <button className="mt-6 bg-button text-button font-semibold py-2 px-6 rounded-md
                    bg-button-hover transition flex items-center"
                onClick={() => handleButtonClick(RegistrationType.Applicant)}
                >
                    GET STARTED <span className="ml-2">→</span>
                </button>
            </div>

            <div className="flex-1 flex flex-col justify-center
                items-center bg-employers text-light p-10 w-full md:w-1/2">
                <h2 className="text-3xl font-bold">FOR EMPLOYERS</h2>
                <p className="text-lg mt-2">Build your dream</p>
                <h1 className="text-5xl font-bold text-highlight-dark mt-2">TEAM</h1>
                <button className="mt-6 bg-button text-button font-semibold py-2 px-6 rounded-md
                    bg-button-hover transition flex items-center"
                onClick={() => handleButtonClick(RegistrationType.Employer)}
                >
                    GET STARTED <span className="ml-2">→</span>
                </button>
            </div>
        </div>
    )
}

export default RegistrationSelection
