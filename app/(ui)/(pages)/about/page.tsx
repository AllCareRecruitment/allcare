export default function About() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
            {/* Top section (grayish background) */}
            <div className="bg-[#6e7364] text-white px-8 py-12 sm:px-20 sm:py-20">
                <h1 className="text-4xl font-bold mb-2 uppercase">
            WELCOME TO ALL CARE RECRUITMENT
                </h1>
                <p className="text-lg sm:text-xl">
            Streamlined and effective recruitment solutions for the caregiver industry.
                </p>
            </div>
  
            {/* White section (with more visible text color) */}
            <div className="bg-white text-[#333] px-8 py-12 sm:px-20 sm:py-20">
                <h2 className="text-2xl font-semibold mb-2">
            About All Care Recruitment
                </h2>
                {/* Subtle accent divider */}
                <div className="w-16 h-1 bg-[#6e7364] mb-6"></div>
  
                <p className="mb-4 leading-relaxed">
            At All Care Recruitment, we specialize in connecting dedicated caregivers 
            with facilities and families in need of compassionate, skilled professionals. 
            Our mission is to simplify the recruitment process, ensuring a perfect match 
            between caregiver and client every time.
                </p>
                <p className="mb-4 leading-relaxed">
            With a deep understanding of the caregiving industry, we prioritize both 
            the well-being of caregivers and the satisfaction of the organizations we serve. 
            Our comprehensive approach includes personalized support, thorough vetting, 
            and ongoing communication to ensure long-term success for everyone involved.
                </p>
                <p className="mb-4 leading-relaxed">
            We believe in fostering an environment of trust, respect, and collaboration, 
            which is why we’ve become a go-to resource for anyone seeking top-tier 
            caregiving talent or meaningful employment in this vital field.
                </p>
  
                <h3 className="text-xl font-medium mb-2">
            Why Choose Us?
                </h3>
                {/* Subtle accent divider */}
                <div className="w-16 h-1 bg-[#6e7364] mb-6"></div>
  
                <ul className="list-disc list-inside space-y-2">
                    <li>Extensive network of qualified caregivers</li>
                    <li>Streamlined hiring process with personalized support</li>
                    <li>Transparent communication at every step</li>
                    <li>Commitment to high-quality, compassionate care</li>
                </ul>
            </div>
        </div>
    )
}
  