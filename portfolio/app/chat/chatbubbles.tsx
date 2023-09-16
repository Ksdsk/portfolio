import Prompt from "./bubbles/prompt"
import Completion from "./bubbles/completion"
import { v4 as uuidv4 } from "uuid";

interface IBubble {
    type: string;
    text: string;
}

export default function ChatBubbles(props: {bubble: IBubble[]}) {
    return (
        <div className="chatbubbles max-h-full" id="bubblearea">
            
            {
                props.bubble.map((bubble: IBubble) =>
                    bubble.type == "prompt" ? <Prompt text={bubble.text} key={uuidv4()}/> 
                                            : <Completion text={bubble.text} key={uuidv4()}/>
                )
            }
        </div>
    )
}