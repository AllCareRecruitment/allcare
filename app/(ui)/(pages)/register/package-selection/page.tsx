export default function PricingPage() {
    return (
        <div className="min-h-screen bg-selectPlanBackground flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-5xl">
                <h1 className="text-3xl font-bold text-gray-700 mb-8 text-left">Find The Right Plan.</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {plans.map((plan) =>
                        <div
                            key={plan.name}
                            className={`rounded-lg shadow-lg flex flex-col 
                            items-center ${plan.bgColor} overflow-hidden`}
                        >
                            <div className={`w-full p-4 text-center ${plan.titleBgColor}`}>
                                <h2 className="text-xl font-bold text-white">{plan.name}</h2>
                            </div>

                            <div className="flex flex-col flex-grow w-full items-center p-6">
                                <ul className="mb-6">
                                    {plan.features.map((feature, index) =>
                                        <li key={index} className="text-white flex items-center gap-2 mb-2">
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

const plans = [
    {
        name: 'BASIC',
        titleBgColor: 'bg-basicPlanHeaderBlue',
        bgColor: 'bg-basicPlanBodyBlue',
        features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
        name: 'PRO',
        titleBgColor: 'bg-proPlanHeaderPink',
        bgColor: 'bg-proPlanBodyPink',
        features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
        name: 'ULTIMATE',
        titleBgColor: 'bg-ultimatePlanHeaderBrown',
        bgColor: 'bg-ultimatePlanBodyBrown',
        features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
]
