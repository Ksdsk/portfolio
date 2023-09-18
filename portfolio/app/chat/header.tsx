import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from "react-icons/bs"

export default function Header() {
    return(
        <>
            <div className="text-white/50">
                <p>Daniel Kang :&#41;</p>
            </div>
            <div className="flex justify-end gap-3 text-white/50">
                <a className="hover:text-white hover:border-white/80 transition ease-linear" href="Daniel_Kang_NewGradResume_2024.pdf" download={true}>Download Resume</a>
                <div className="border-l border-white/50"></div>
                <div className="grid content-center">
                    <div className="flex gap-3">
                        <a className="hover:text-white hover:border-white/80 transition ease-linear" href="https://www.linkedin.com/in/smdanielkang">
                            <div className="">
                                <BsLinkedin size="20"/>
                            </div>
                        </a>
                        <a className="hover:text-white hover:border-white/80 transition ease-linear" href="https://www.github.com/Ksdsk">
                            <div className="">
                                <BsGithub size="20"/>
                            </div> 
                        </a>
                        <a className="hover:text-white hover:border-white/80 transition ease-linear" href="mailto:danielkang@dal.ca">
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