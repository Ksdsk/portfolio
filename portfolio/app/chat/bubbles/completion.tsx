import { marked } from "marked"
import DOMPurify from "dompurify"

export default function Completion(props: {text: string}) {
    return (
        <div className="flex justify-start m-4">
            <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked.parse(props.text))}} className="dark:bg-stone-300 bg-black/10 text-black rounded-2xl rounded-bl-none p-4 w-fit">

            </div>
        </div>

    )
}