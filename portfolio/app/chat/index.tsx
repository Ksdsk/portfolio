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
        <div className="">
            <ChatBubbles bubble={bubbleData}/>
            <ChatBox handleCallback={callBack}/>
        </div>
    )
}