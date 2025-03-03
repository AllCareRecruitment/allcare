import React from 'react';

export default function JobListings() {
  const jobCards = [
    {
      ref: '#FDMAN2038-234',
      title: 'Frontend Developer',
      location: 'Manchester, UK',
      salary: '£40000 - £55000 per annum',
      description:
        'Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate.',
      bgColor: '#F4A6A6',
    },
    {
      ref: '#FDMAN2038-235',
      title: 'Frontend Developer',
      location: 'Manchester, UK',
      salary: '£40000 - £55000 per annum',
      description:
        'Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate.',
      bgColor: '#E9E7B3',
    },
    {
      ref: '#FDMAN2038-236',
      title: 'Frontend Developer',
      location: 'Manchester, UK',
      salary: '£40000 - £55000 per annum',
      description:
        'Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a aliquam. Faucibus et quam ac elit placerat tristique vulputate.',
      bgColor: '#A2A276',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Top Section - Green Background */}
      <div className="bg-[#C3D0BD] pb-16">
        <section className="max-w-4xl mx-auto px-12 pt-12">
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Left column with image and button */}
            <div className="md:w-1/3 relative">
              <img
                src="https://images.squarespace-cdn.com/content/v1/6047f7163de62945d915934c/1615407451100-WNAZMQ0PAD1ONA52IGAS/junko-nakase-zX-B7rHOSm4-unsplash.jpg"
                alt="Cleaning Tools"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 flex justify-center transform translate-y-1/2">
                <button className="bg-[#F4A6A6] text-white px-6 py-2 text-sm flex items-center gap-2">
                  VIEW OUR BLOGS <span>→</span>
                </button>
              </div>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col">
              <h1 className="text-white text-5xl font-bold tracking-wide mb-16">
                SERVICES<br />WE OFFER
              </h1>
              <p className="text-white text-sm leading-relaxed max-w-md mt-auto">
                Streamlined and effective recruitment solutions for the caregiver industry.
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-16">
            <input
              type="text"
              placeholder="Search for job titles..."
              className="w-full p-4 border-none focus:outline-none text-sm"
            />
          </div>
        </section>
      </div>


      <div className="bg-[#F0EAE3]">
        <section className="max-w-4xl mx-auto px-6 pt-6 pb-8 space-y-4">
          {jobCards.map((job, index) => (
            <div
              key={index}
              className="relative"
              style={{ backgroundColor: job.bgColor }}
            >
              <div className="p-6">
                <p className="text-xs opacity-70 mb-2">{`Job Ref: ${job.ref}`}</p>
                <div className="flex">
                  <div className="flex-1 pr-16">
                    <h2 className="text-2xl font-normal text-white mb-1">{job.title}</h2>
                    <p className="text-sm text-white opacity-80 mb-4">{job.location}</p>
                    <p className="text-sm text-white font-light mb-6">{job.salary}</p>
                    <p className="text-xs text-white opacity-80 leading-relaxed max-w-xl">
                      {job.description}
                    </p>
                  </div>
                </div>
              </div>
              <div 
                className="absolute bottom-0 right-0 bg-[#505F58] w-10 h-10 flex items-center justify-center"
              >
                <span className="text-white text-xl">→</span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}