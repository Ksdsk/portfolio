'use client'

import { Sora } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'
import Aws from './jobDesc/aws'
import Amazon from './jobDesc/amazon'
import Dal from './jobDesc/dal'
import Dnd from './jobDesc/dnd'
import Q7 from './jobDesc/q7'
const font = Sora({weight: "700", subsets: ["latin"]})

export default function Work() {

    const [awsOpacity, setAwsOpacity] = useState("opacity-100")
    const [amazonOpacity, setAmazonOpacity] = useState("opacity-30")
    const [dalOpacity, setDalOpacity] = useState("opacity-30")
    const [dndOpacity, setDndOpacity] = useState("opacity-30")
    const [q7Opacity, setQ7Opacity] = useState("opacity-30")
    const [jobDescription, setJobDescription] = useState(0)

    return (
        <div className='bg-zinc-800/70 rounded-3xl'>
            <div className='m-10 flex flex-col gap-8'>
                <p className={`${font.className} text-6xl`}>Work Experience</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12'>
                    <div className={`bg-white rounded-full h-20 ${awsOpacity} hover:opacity-100 cursor-pointer transition ease-linear`}
                        onClick={()=>{
                            setAwsOpacity("opacity-100")
                            setAmazonOpacity("opacity-30")
                            setDalOpacity("opacity-30")
                            setDndOpacity("opacity-30")
                            setQ7Opacity("opacity-30")
                            setJobDescription(0)
                        }}
                    >
                        <Image src="/aws.png" width={1000} height={50} alt="Amazon Logo" className='w-full h-full py-4 object-contain'/>
                    </div>
                    <div className={`bg-white rounded-full h-20 ${amazonOpacity} hover:opacity-100 cursor-pointer transition ease-linear`}
                        onClick={()=>{
                            setAwsOpacity("opacity-30")
                            setAmazonOpacity("opacity-100")
                            setDalOpacity("opacity-30")
                            setDndOpacity("opacity-30")
                            setQ7Opacity("opacity-30")
                            setJobDescription(1)
                        }}
                    >
                        <Image src="/amazon-logo.png" width={1000} height={50} alt="Amazon Logo" className='w-full h-full object-contain'/>
                    </div>
                    <div className={`bg-white rounded-full h-20 ${dalOpacity} hover:opacity-100 cursor-pointer transition ease-linear`}
                        onClick={()=>{
                            setAwsOpacity("opacity-30")
                            setAmazonOpacity("opacity-30")
                            setDalOpacity("opacity-100")
                            setDndOpacity("opacity-30")
                            setQ7Opacity("opacity-30")
                            setJobDescription(2)
                        }}
                    >
                        <Image src="/1654529048363.png" width={1000} height={50} alt="Amazon Logo" className='w-full p-4 h-full object-contain'/>
                    </div>
                    <div className={`bg-white rounded-full h-20 ${dndOpacity} hover:opacity-100 cursor-pointer transition ease-linear`}
                        onClick={()=>{
                            setAwsOpacity("opacity-30")
                            setAmazonOpacity("opacity-30")
                            setDalOpacity("opacity-30")
                            setDndOpacity("opacity-100")
                            setQ7Opacity("opacity-30")
                            setJobDescription(3)
                        }}
                    >
                        <Image src="/2560px-Department_of_National_Defence_(Canada).png" width={1000} height={50} alt="DND Logo" className='h-full px-10 py-5 object-contain'/>
                    </div>
                    <div className={`bg-white rounded-full h-20 ${q7Opacity} hover:opacity-100 cursor-pointer transition ease-linear`}
                        onClick={()=>{
                            setAwsOpacity("opacity-30")
                            setAmazonOpacity("opacity-30")
                            setDalOpacity("opacity-30")
                            setDndOpacity("opacity-30")
                            setQ7Opacity("opacity-100")
                            setJobDescription(4)
                        }}
                    >
                        <Image src="/qualiti7_logo.jpg" width={1000} height={50} alt="DND Logo" className='h-full py-1 object-contain'/>
                    </div>
                </div>
                {
                    jobDescription == 0 ? <Aws/> : <></>
                }
                {
                    jobDescription == 1 ? <Amazon/> : <></>
                }
                {
                    jobDescription == 2 ? <Dal/> : <></>
                }
                {
                    jobDescription == 3 ? <Dnd/> : <></>
                }
                {
                    jobDescription == 4 ? <Q7/> : <></>
                }
            </div>
        </div>
    )

}