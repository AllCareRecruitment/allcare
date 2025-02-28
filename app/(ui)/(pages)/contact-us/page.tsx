import ContactForm from '../../components/contactForm'
import sampleImage from '../../../../public/Flower-compressed.png'
import Image from 'next/image'

export default function ContactSection() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-0 relative w-full">
            {/* Image Above the Form - Full Width */}
            <div className="relative w-full max-w-[800px] mx-auto aspect-w-3 aspect-h-2 bg-slate-200">
                <Image
                    src={sampleImage}
                    alt="Contact Us"
                    layout="responsive"
                    width={3} // Aspect ratio width
                    height={2} // Aspect ratio height
                    objectFit="contain"
                />
            </div>

            {/* Contact Form Below - Full Width */}
            <div className="w-full">
                <ContactForm />
            </div>
        </div>
    )
}