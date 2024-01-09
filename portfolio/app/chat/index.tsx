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
        <div className='float-right p-6 absolute z-10 right-0 bottom-0'>
            <div className=''>
                {
                    chatVisibility ? 
                    <>

                    <div className="chatbox rounded-xl relative shadow-zinc-950/40 mt-3 flex flex-col justify-between">
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
                    <button className="transition ease-linear border border-white/50 hover:border-white hover:text-white text-white/50 bg-zinc-800 grid content-center rounded-full p-3"
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