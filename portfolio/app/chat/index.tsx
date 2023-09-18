'use client'
import React from "react";
import ChatBox from "./chatbox";
import ChatBubbles from "./chatbubbles";
import Header from './header'

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
                <Header/>
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