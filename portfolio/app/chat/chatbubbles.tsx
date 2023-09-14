import Prompt from "./bubbles/prompt"
import Completion from "./bubbles/completion"

interface IBubble {
    type: string;
    text: string;
}

export default function ChatBubbles(props: {bubble: IBubble[]}) {
    return (
        <div className="m-6 overflow-y-auto chatbubbles no-scrollbar">
            {
                props.bubble.map((bubble: IBubble) =>
                    bubble.type == "prompt" ? <Prompt text={bubble.text}/> 
                                            : <Completion text={bubble.text}/>
                )
            }
        </div>
    )
}