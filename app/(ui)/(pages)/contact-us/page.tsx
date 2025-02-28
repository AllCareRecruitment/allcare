import ContactForm from '../../components/contactForm'
import sampleImage from '../../../../public/Flower-compressed.png'
import Image from 'next/image'

export default function ContactSection() {
    return (
        <div className="min-h-screen flex flex-col w-full p-0 m-0">
            {/* Image Container - Full Width, Controlled Height */}
            <div className="relative w-full h-full sm:h-h-full md:h-h-full lg:h-[40vh] xl:h-full">
                <Image
                    src={sampleImage}
                    alt="Contact Us"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </div>

            {/* Contact Form - Full Width */}
            <div className="w-full">
                <ContactForm />
            </div>
        </div>
    )
}