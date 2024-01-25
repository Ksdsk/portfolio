import { Sora } from 'next/font/google'
import Image from 'next/image'
const font = Sora({weight: "700", subsets: ["latin"]})

export default function Hero() {
    return (
        <div className='relative h-full'>
            <Image src={"/1705097398381-lanczos3.jpg"} alt='' width={2000} height={200} className='relative -z-10 min-w-full brightness-50 h-full hero-cover object-cover rounded-b-3xl'/>
            <div className='absolute bottom-72 flex flex-col justify-end px-10'>
                <div className='relative sm:pr-40 flex flex-col justify-center object-right rounded-t-full rounded-br-full shadow-lg shadow-zinc-900 bg-blue-500 backdrop-blur-lg text-white h-72'>
                    <div className='flex'>
                        <div className=''>
                            <p className={`${font.className} italic text-6xl md:text-8xl`}>
                                👋
                            </p>
                        </div>
                        <div className=''>
                            <p className={`${font.className} italic lg:text-8xl md:text-6xl text-4xl`}>
                                Hey there!
                            </p>
                            <p className={`${font.className} mt-2 pl-2 pr-4 sm:text-lg text-sm`}>
                                I'm Daniel, a software engineer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}