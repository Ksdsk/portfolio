import Image from "next/image"
import { GiHamburgerMenu } from 'react-icons/gi' 

export default function Items() {
    return (
        <div className="w-full h-24">
            <div className="flex justify-between">
                <GiHamburgerMenu size={50}/>
                <Image src="/smiley.png" alt="Logo" width={200} height={200}/>
            </div>
        </div>
    )
}