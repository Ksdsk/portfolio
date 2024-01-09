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
        <div className="h-full flex flex-col justify-between mt-3">
            <div className="overflow-y-auto h-full">
                <ChatBubbles bubble={bubbleData}/>
            </div>
            <div className="mx-6 pt-2">
                <ChatBox handleCallback={callBack}/>
            </div>
        </div>
    )
}