import { Sora } from 'next/font/google'
import Image from 'next/image'
const font = Sora({weight: "700", subsets: ["latin"]})

export default function About() {
    return (
        <div className='mx-10 flex flex-col gap-8'>
            <p className={`${font.className} text-6xl`}>About me</p>
            <div className='lg:w-2/3 flex flex-col gap-5 text-lg text-zinc-200'>
                <p className=''>
                    I'm Daniel Kang, a fourth-year computer science student at Dalhousie 
                    University with a passion for software development. I have interned at Amazon Web Services 
                    and the Department of National Defence Canada, where I led various projects to improve 
                    system efficiency and security.
                </p>
                <p className=''>
                    In my free time, I enjoy working on personal projects 
                    to help the communities around me. I also make some fun projects like this portfolio time-to-time! 
                    Additionally, I love building mechanical keyboards, and have built a total of 8 so far!
                </p>
                <p className=''>
                    You can find more about me and my work on my LinkedIn and GitHub profiles. If you have any questions, 
                    try asking my Daniel-AI on the bottom-right corner, such as "How's school going?". 
                    Whenever you need to reach out to me, feel free to email me! 
                    These social links all be located in the top right corner of the website. 
                </p>
            </div>
            
        </div>
    )

}