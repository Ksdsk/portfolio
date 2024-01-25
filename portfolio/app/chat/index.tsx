'use client'
import React from "react";
import { useState } from "react";
import ChatBox from "./chatbox";
import ChatBubbles from "./chatbubbles";
import { BsPlusLg } from "react-icons/bs";

interface IBubble {
    type: string;
    text: string;
}

export default function Chat() {
    const [bubbleData, setBubbleData] = useState<IBubble[]>([]);
    const [chatVisibility, setChatVisibility] = useState(false)

    const callBack = (bubbles: IBubble[]) => {
        setBubbleData([...bubbleData].concat(bubbles))
    }

    return (
        <>
        <div className='float-right mx-10 my-10 absolute right-0 bottom-0 z-50'>
            <div className=''>
                {
                    chatVisibility ? 
                    <>

                    <div className=" shadow-lg sm:w-96 rounded-xl relative backdrop-blur-lg border bg-zinc-100/10 shadow-zinc-950/40 mt-3 flex flex-col justify-between">
                        <div className="flex justify-end relative">
                            <button className="transition ease-linear grid content-center"
                                onClick={() => {
                                    setChatVisibility(false)
                                }}
                                >
                                <div className="text-white/50 border-b cursor-pointer transition ease-linear  border-white/50 grid hover:text-white hover:border-white content-center m-4">
                                    Close
                                </div>
                            </button>
                        </div>

                        <div className="flex flex-col justify-between">
                            <ChatBubbles bubble={bubbleData}/>
                            <ChatBox handleCallback={callBack}/>
                        </div>

                    </div>

                    </>
                    : 
                    <>
                    <button className=" shadow-lg shadow-black transition ease-linear border border-white/50 hover:border-green-500 hover:text-green-500 text-white/50 bg-zinc-800/10 backdrop-blur-md grid content-center rounded-full p-3"
                    onClick={() => {
                        setChatVisibility(true)
                    }}
                    >
                        <div className="font-semibold">
                            <p>Chat with Daniel AI</p>
                        </div>
                    </button>
                    
                    </>

                }
            </div>
        </div>
        

        </>

    )
}