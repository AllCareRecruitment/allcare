'use client'

import { getPackagesByRoleId } from '@/app/(ui)/services/packagesService'
import { useEffect, useState, useRef } from 'react'
import styles from './styles.module.css'
import { useLoading } from '@/app/(ui)/context/LoadingContext'

interface Package {
    planName: string;
    description: string;
    price: string;
}

export default function PricingPage() {
    const [packages, setPackages] = useState<Package[]>([])
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(false)
    const { setLoading } = useLoading()
    const [isLocalLoading, setIsLocalLoading] = useState(true)

    useEffect(() => {
        (async () => {
            setLoading(true)
            setIsLocalLoading(true)

            try {
                const response = await getPackagesByRoleId(2)
                setPackages(response.packages)
            } catch (error) {
                return error
            } finally {
                setLoading(false)
                setIsLocalLoading(false)
            }
        })()
    }, [setLoading])

    useEffect(() => {
        if (packages.length > 3) {
            setShowRightArrow(true)
        }
    }, [packages])

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

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            setShowLeftArrow(scrollLeft > 0)
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10) // Small buffer
        }
    }

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
        }
    }

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
        }
    }

    const getContainerClass = () => {
        const count = dynamicPlans.length
        if (count === 1) return 'flex justify-center w-full'
        if (count === 2) return 'flex justify-center gap-6 w-full'
        if (count === 3) return 'grid grid-cols-3 gap-6 w-full'

        return `flex gap-6 overflow-x-auto scrollbar-hide 
        pb-4 ${styles.scrollContainer}`
    }

    const getPackageWidthClass = () => {
        const count = dynamicPlans.length
        if (count === 1) return 'w-1/3'
        if (count === 2) return 'w-5/12'
        if (count === 3) return 'w-full'
        return 'min-w-[320px] flex-shrink-0'
    }

    return (
        <div className="min-h-screen bg-selectPlanBackground flex flex-col items-center justify-center p-6">
            {isLocalLoading ? null : // If loading, render nothing inside the outer div
                <div className="w-full max-w-5xl">
                    <div className={dynamicPlans.length === 1 ? 'text-center' : 'text-left'}>
                        <h1 className="text-3xl font-bold text-gray-700 mb-8">Find The Right Plan.</h1>
                    </div>

                    <div className="relative">
                        {showLeftArrow &&
                            <button
                                onClick={scrollLeft}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-6 z-10 bg-white
                                rounded-full p-2 shadow-md hover:bg-gray-100" aria-label="Scroll left"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                        }

                        {showRightArrow &&
                            <button
                                onClick={scrollRight}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-6 z-10 bg-white
                                rounded-full p-2 shadow-md hover:bg-gray-100" aria-label="Scroll right"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        }

                        <div
                            ref={scrollContainerRef}
                            className={getContainerClass()}
                            onScroll={handleScroll}
                        >
                            {dynamicPlans.map((plan, index) =>
                                <div
                                    key={index}
                                    className={`${getPackageWidthClass()} rounded-lg shadow-lg flex flex-col 
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
            }
        </div>
    )
}