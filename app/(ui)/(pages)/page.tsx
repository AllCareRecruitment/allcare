import React from 'react'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="bg-[#A6B5A5] flex items-center justify-center">
            <div className="max-w-4xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Image Section */}
                <div className="relative max-w-sm mx-auto">
                    <Image
                        src="/banner1.jpg"
                        alt="Person using laptop"
                        width={400}
                        height={400}
                        className="rounded-md shadow-md object-cover"
                    />
                    {/* Button */}
                    <button className="absolute bottom-4 left-4 bg-[#F9CACA] text-black text-xs px-2 py-1 rounded-md shadow-sm hover:bg-[#f7baba] transition">
                        JOB OPENINGS →
                    </button>
                </div>

                {/* Text Section */}
                <div className="text-left">
                    <h1 className="text-xl font-bold text-white leading-tight mb-2">
                        WELCOME TO <br />
                        ALL CARE <br />
                        RECRUITMENT
                    </h1>
                    <p className="text-xs text-white">
                        Streamlined and effective recruitment solutions for the caregiver industry.
                    </p>
                </div>
            </div>
        </div>
    )
}
