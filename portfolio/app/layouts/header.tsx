import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from "react-icons/bs"

export default function Header() {
    return(
        <div className="absolute z-50 w-full px-10 my-10 ">
            <div className='shadow-lg shadow-zinc-700 md:w-full border border-white p-6 backdrop-blur-md bg-white/10 brightness-125 rounded-full'>
                <div className="flex md:justify-between text-white/50 justify-center">
                    <div className="text-white ease-linear transition text-black/70 font-semibold hidden md:block">
                        <p>Daniel Kang</p>
                    </div>
                    <div className="flex justify-between gap-3">
                        {/* <a className="hover:text-white hover:border-white/80 transition ease-linear" href="/projects">
                            <div className="flex gap-1">
                                <p className="bg-violet-500 px-2 rounded-full font-semibold">NEW</p>
                                <p className="font-semibold">2024 Projects</p>
                            </div>
                        </a> */}
                        {/* <div className="border-l border-white/50"></div> */}
                        <a className="hover:text-white hover:border-white/80 transition ease-linear" href="Daniel_Kang_NewGradResume_2024.pdf" download={true}>
                            <div className="flex gap-1">
                                <p className="border-b border-white/50 font-semibold">Resume</p>
                            </div>
                        </a>
                        <div className="border-l border-white/50 "></div>
                        <div className="grid content-center">
                            <div className="flex gap-3">
                                <a className="hover:text-blue-400  hover:border-white/80 transition ease-linear" href="https://www.linkedin.com/in/smdanielkang">
                                    <div className="">
                                        <BsLinkedin size="20"/>
                                    </div>
                                </a>
                                <a className="hover:text-white hover:border-white/80 transition ease-linear" href="https://www.github.com/Ksdsk">
                                    <div className="">
                                        <BsGithub size="20"/>
                                    </div> 
                                </a>
                                <a className="hover:text-red-400 hover:border-white/80 transition ease-linear" href="mailto:danielkang@dal.ca">
                                    <div className="">
                                        <BsFillEnvelopeFill size="20"/>
                                    </div> 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}