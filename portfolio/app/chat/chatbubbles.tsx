import Prompt from "./bubbles/prompt"
import Completion from "./bubbles/completion"
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

interface IBubble {
    type: string;
    text: string;
}

export default function ChatBubbles(props: {
    bubble: IBubble[]
    }) {

    useEffect(() => {
        let chatBubble = document.getElementById("bubblearea")
        chatBubble!.scrollBy({
            top: 10000,
            behavior: "smooth"
        })
    })

    const bubbles = props.bubble.map((bubble: IBubble) => 
        bubble.type == "prompt" ? <Prompt text={bubble.text} key={uuidv4()}/> 
                                : <Completion text={bubble.text} key={uuidv4()}/>
    )
    
    return (
        <div className="max-w-full overflow-y-auto" id="bubblearea">
            {
                bubbles
            }
        </div>
    )
}