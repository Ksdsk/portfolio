import {BsFillSendFill} from "react-icons/bs"

export default function ChatBox() {
 return (
        <div className='backdrop-blur-md'>
            <div className='flex justify-center'>
                <form className='dark:text-gray-400 w-6/12 flex'>
                <input type="text" name="prompt" className='backdrop-blur-md bg-white/10 focus:outline-none focus:text-white rounded-full py-2 pl-6 pr-12 w-full'
                placeholder='Try asking me "Tell me about yourself"'>
                </input>
                <div className="grid content-center">
                    <div className="relative right-9">
                        <BsFillSendFill size={"20px"} className="hover:text-white transition ease-linear cursor-pointer"/>
                    </div>
                </div>
                </form>
            </div>

            <div className='flex gap-6 justify-center pt-4'>
                <p className=' font-light text-xs'>
                Please be aware that the chat may not provide overly personal information.
                </p>
            </div>

        </div>
    )
}
