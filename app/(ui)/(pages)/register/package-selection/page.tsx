'use client'

import { getPackagesByRoleId } from '@/app/(ui)/services/packagesService'
import { useEffect, useState } from 'react'

interface Package {
    planName: string;
    description: string;
    price: string;
}

export default function PricingPage() {
    const [packages, setPackages] = useState<Package[]>([])

    useEffect(() => {
        (async () => {
            try {
                const response = await getPackagesByRoleId(2)
                setPackages(response.packages) // Set the packages from the API response
            } catch (error) {
                console.error('Error fetching packages:', error)
            }
        })()
    }, [])

    // Static styling data
    const plans = [
        {
            titleBgColor: 'bg-basicPlanHeaderBlue',
            bgColor: 'bg-basicPlanBodyBlue',
        },
        {
            titleBgColor: 'bg-proPlanHeaderPink',
            bgColor: 'bg-proPlanBodyPink',
        },
        {
            titleBgColor: 'bg-ultimatePlanHeaderBrown',
            bgColor: 'bg-ultimatePlanBodyBrown',
        },
    ]

    // Combine API data with static styling data
    const dynamicPlans = packages.map((pkg, index) => {
        const planStyle = plans[index % plans.length] // Cycle through static plans
        return {
            name: pkg.planName,
            description: pkg.description,
            price: pkg.price,
            titleBgColor: planStyle.titleBgColor,
            bgColor: planStyle.bgColor,
        }
    })

    return (
        <div className="min-h-screen bg-selectPlanBackground flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-5xl">
                <h1 className="text-3xl font-bold text-gray-700 mb-8 text-left">Find The Right Plan.</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {dynamicPlans.map((plan, index) => 
                        <div
                            key={index}
                            className={`rounded-lg shadow-lg flex flex-col 
                            items-center ${plan.bgColor} overflow-hidden`}
                        >
                            <div className={`w-full p-4 text-center ${plan.titleBgColor}`}>
                                <h2 className="text-xl font-bold text-white">{plan.name}</h2>
                            </div>

                            <div className="flex flex-col flex-grow w-full items-center p-6">
                                <ul className="mb-6">
                                    {plan.description.split(', ').map((feature, idx) => 
                                        <li key={idx} className="text-white flex items-center gap-2 mb-2">
                                            <span className="text-lg">✔</span> {feature}
                                        </li>
                                    )}
                                </ul>

                                <div className="flex-grow"></div>

                                <button className="bg-planGetStartedButton text-white px-4 py-2
                                rounded-md hover:bg-[#6d664a] transition mt-auto">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}