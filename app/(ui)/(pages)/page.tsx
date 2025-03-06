import React from 'react'

export default function Home() {
    return (
        <div className="font-sans">
            {/* Hero Section */}
            <div className="bg-[#a8beaf] p-5 md:p-10 lg:p-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                    <img 
                        src="https://image-prod.iol.co.za/16x9/800/The-fast-pace-of-new-technology-has-brought-about-an-always-on-approach-when-it-comes-to-time-spent-working-behind-our-screens?source=https://iol-prod.appspot.com/image/d936c60d9f60df36867b9dde9ec5e6fda271d48b/2000&operation=CROP&offset=0x104&resize=2000x1125" 
                        alt="Person working on laptop" 
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-[#f7c8c8] px-6 py-3 flex items-center">
                        <span className="uppercase font-medium">Job Openings</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            WELCOME TO<br />ALL CARE<br />RECRUITMENT
                    </h1>
                    <h2 className="text-xl md:text-2xl text-white">
            Streamlined and effective recruitment<br />
            solutions for the caregiver industry.
                    </h2>
                </div>
            </div>

            {/* About Section */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-[#a09570] p-5 md:p-10 lg:p-16">
                    <p className="mb-2">
                        <span className="font-medium">All Care Recruitment is a </span>
                        <span className="font-bold">forward-thinking</span>
                        <span className="font-medium"> company committed to transforming the recruitment landscape in South Africa.</span>
                    </p>
                    <p className="mb-2">
                        <span className="font-bold">Recognizing the difficulties families, schools, and various institutions</span>
                        <span className="font-medium"> encounter in securing qualified caregivers and essential support services such as cleaners, handymen, and bookkeepers, the company employs a </span>
                        <span className="font-bold">unique online search system.</span>
                    </p>
                    <p className="text-[#e3c6c6] mt-6">
            This innovative platform simplifies the matchmaking process between employers and qualified candidates.
                    </p>
                </div>
                <div className="relative">
                    <img 
                        src="https://www.tourradar.com/days-to-come/wp-content/uploads/2018/07/dan-gold-544435-unsplash-min.jpg" 
                        alt="Warm knitted textiles" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-10 right-10 bg-[#a8beaf] px-6 py-3 flex items-center">
                        <span className="uppercase font-medium text-white">Read more about</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Blog Section */}
            <div className="bg-[#f2e9e1] p-8 md:p-12 text-center">
                <h3 className="text-3xl font-medium text-[#d78d8d] mb-4">JOIN OUR BLOG</h3>
                <p className="text-[#a09570] mb-6">
          Subscribe to our newsletter and blog posts<br />
          for updates every week on the care industry
                </p>
                <button className="bg-[#a09570] text-white px-8 py-2 uppercase flex items-center mx-auto">
          Subscribe
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            {/* Services Section */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative bg-[#a09570]">
                    <img 
                        src="https://i0.wp.com/mommuseum.org/wp-content/uploads/2020/12/jan-kopriva-77la8of1f9g-unsplash.jpg?resize=1200,1200&ssl=1&w=640" 
                        alt="Cleaning supplies" 
                        className="w-full h-auto object-cover opacity-80"
                    />
                    <div className="absolute bottom-8 left-8 bg-[#a8beaf] px-6 py-3 flex items-center">
                        <span className="uppercase font-medium text-white">Services</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className="bg-[#a8beaf] p-5 md:p-10 lg:p-16 flex flex-col justify-center">
                    <p className="mb-4 text-white">
                        <span>All Care Recruitment is a </span>
                        <span className="font-bold">forward-thinking</span>
                        <span> company committed to transforming the recruitment landscape in South Africa.</span>
                    </p>
                    <p className="mb-4 text-white">
                        <span className="font-bold">Recognizing the difficulties families, schools, and various institutions encounter</span>
                        <span> in securing qualified caregivers and essential support services such as cleaners, handymen, and bookkeepers, the company employs a </span>
                        <span className="font-bold">unique online search system.</span>
                    </p>
                    <p className="text-[#e3c6c6] mt-4">
            This innovative platform simplifies the matchmaking process between employers and qualified candidates.
                    </p>
                </div>
            </div>
        </div>
    )
}