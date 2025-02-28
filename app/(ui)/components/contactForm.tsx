const ContactForm = () => {
    return (
        <div className="bg-contactUsFormBackground min-h-screen flex items-center justify-center p-8">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                {/* Left Side - Text Content */}
                <div className="flex flex-col justify-start self-start">
                    <h3 className="text-proPlanBodyPink font-bold uppercase m-0 p-0">Contact</h3>
                    <h2 className="text-3xl font-bold mt-2">Looking For A New Opportunity?</h2>
                    <p className="mt-4 text-black">
                        Lorem ipsum dolor sit amet consectetur. Turpis sed pulvinar sed blandit
                        rhoncus tellus senectus at quis. Mi at fermentum imperdiet velit magna a
                        aliquam. Faucibus et quam ac elit placerat tristique vulputate.
                    </p>
                </div>

                {/* Right Side - Form */}
                <div className="bg-contactUsFormBackground p-0 flex flex-col justify-start self-start">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-black m-0 p-0">Full Name</label>
                            <input type="text" className="w-full p-2 border rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-black m-0 p-0">Email</label>
                            <input type="email" className="w-full p-2 border rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-black m-0 p-0">Contact Number</label>
                            <input type="text" className="w-full p-2 border rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-black m-0 p-0">Message</label>
                            <textarea className="w-full p-2 border rounded-lg h-24"></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-contactUsFormSubmitButton text-white py-2
                            px-6 rounded-lg flex items-center justify-center gap-2 w-1/3 hover:bg-[#6d664a]"
                        >
                            Submit <span className="ml-2">→</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
