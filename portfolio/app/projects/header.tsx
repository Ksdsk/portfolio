import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from "react-icons/bs"
import { BiSolidDownload } from "react-icons/bi"

export default function Header() {
    return(
        <>
            <div className="dark:text-white/50 text-black/70 font-bold dark:font-semibold">
                <p>Daniel Kang :&#41;</p>
            </div>
            <div className="flex justify-end gap-3 dark:text-white/50 text-black/70">
                <a className="dark:hover:text-white hover:text-black dark:hover:border-white/80 hover:border-black transition ease-linear" href="/projects">
                    <div className="flex gap-1">
                        <p className="bg-violet-500 px-2 rounded-full font-semibold">NEW</p>
                        <p className="font-semibold">2024 Projects</p>
                    </div>
                </a>
                <div className="border-l dark:border-white/50 border-black/70"></div>
                <a className="dark:hover:text-white hover:text-black dark:hover:border-white/80 hover:border-black transition ease-linear" href="Daniel_Kang_NewGradResume_2024.pdf" download={true}>
                    <div className="flex gap-1">
                        <p className="border-b dark:border-white/50 border-black/50 font-semibold">Resume</p>
                    </div>
                </a>
                <div className="border-l dark:border-white/50 border-black/70"></div>
                <div className="grid content-center">
                    <div className="flex gap-3">
                        <a className="dark:hover:text-blue-400 hover:text-blue-700 hover:border-white/80 transition ease-linear" href="https://www.linkedin.com/in/smdanielkang">
                            <div className="">
                                <BsLinkedin size="20"/>
                            </div>
                        </a>
                        <a className="dark:hover:text-white hover:text-black hover:border-white/80 transition ease-linear" href="https://www.github.com/Ksdsk">
                            <div className="">
                                <BsGithub size="20"/>
                            </div> 
                        </a>
                        <a className="dark:hover:text-red-400 hover:text-red-600 hover:border-white/80 transition ease-linear" href="mailto:danielkang@dal.ca">
                            <div className="">
                                <BsFillEnvelopeFill size="20"/>
                            </div> 
                        </a>
                    </div>
                </div>


            </div>
        </>
    )
}