'use client'
import React from "react";
import ChatBox from "./chatbox";
import ChatBubbles from "./chatbubbles";

interface IBubble {
    type: string;
    text: string;
}

export default function Chat() {
    const [bubbleData, setBubbleData] = React.useState<IBubble[]>([]);

    const callBack = (bubbles: IBubble[]) => {
        setBubbleData([...bubbleData].concat(bubbles))
    }

    return (
        <div className="h-full flex flex-col justify-between">
            <div className="flex justify-between mx-6 border-b border-white/20 pb-6">
                <div>
                    <p className="">Daniel Kang</p>
                </div>
                <div className="flex justify-end gap-6">
                    <a className="border-b hover:text-white/80 hover:border-white/80 transition ease-linear" href="Daniel_Kang_NewGradResume_2024.pdf" download={true}>Resume</a>
                    <a className="border-b hover:text-white/80 hover:border-white/80 transition ease-linear" href="https://www.linkedin.com/in/smdanielkang">Linkedin</a>
                    <a className="border-b hover:text-white/80 hover:border-white/80 transition ease-linear" href="https://www.github.com/Ksdsk">GitHub</a>
                    <a className="border-b hover:text-white/80 hover:border-white/80 transition ease-linear" href="mailto:danielkang@dal.ca">Email</a>
                </div>
            </div>

            <div className="overflow-y-auto h-full mx-2">
                <ChatBubbles bubble={bubbleData}/>
            </div>
            <div className="mx-6 border-t border-white/20 pt-2">
                <ChatBox handleCallback={callBack}/>
            </div>
        </div>
    )
}