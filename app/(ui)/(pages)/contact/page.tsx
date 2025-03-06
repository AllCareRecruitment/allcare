import Image from 'next/image'

export default function Contact() {
    return (
        <div className="min-h-screen bg-[#dcd7c9] font-[family-name:var(--font-geist-sans)]">
            {/* Top image (leaf background) */}
            <div className="w-full h-[300px] sm:h-[400px] relative">
                <Image
                    src="https://wallpapercrafter.com/sizes/1920x1080/255450-cozy-leaves-autumn-and-brown-leaves-hd.jpg"
                    alt="Leaves"
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Contact section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-8 py-12 sm:px-20 sm:py-20">
                {/* Left side text */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-xl font-bold uppercase tracking-wide text-[#5c6053] mb-2">
            Contact
                    </h2>
                    <h3 className="text-3xl font-semibold text-[#333] mb-4">
            Looking For A New Opportunity?
                    </h3>
                    <p className="leading-relaxed text-[#333]">
            Lorem ipsum dolor sit amet consectetur. Torto sed libero hendrerit dignissim
            eget vitae sapien. Faucibus vulputate dignissim magnis odio sagittis malesuada
            enim ac elit placerat integer vulputate nascetur.
                    </p>
                </div>

                {/* Right side form */}
                <div className="bg-white p-6 rounded shadow-md">
                    <form className="flex flex-col space-y-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="p-3 border border-gray-300 rounded"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-3 border border-gray-300 rounded"
                        />
                        <input
                            type="tel"
                            placeholder="Contact Number"
                            className="p-3 border border-gray-300 rounded"
                        />
                        <textarea
                            placeholder="Message"
                            rows={4}
                            className="p-3 border border-gray-300 rounded"
                        />
                        <button
                            type="submit"
                            className="bg-[#6e7364] text-white py-3 rounded hover:bg-[#5c6053] transition-colors"
                        >
              Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom complaint section */}
            <div className="px-8 py-12 sm:px-20 sm:py-16 text-center">
                <h4 className="text-2xl font-semibold text-[#333] mb-2">
          Have A Complaint?
                </h4>
                <p className="text-[#333] mb-8">
          If you encounter any issues, please reach out to us as soon as possible.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                    <div className="bg-[#333] text-white px-6 py-2 rounded">
            Complaints: 082 566 5895
                    </div>
                    <div className="bg-[#333] text-white px-6 py-2 rounded">
            Fraud: 083 825 9521
                    </div>
                </div>
            </div>
        </div>
    )
}
