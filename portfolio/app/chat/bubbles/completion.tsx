export default function Completion(props: {text: string}) {
    return (
        <div className="flex justify-start m-4">
            <div className="bg-stone-300 text-black rounded-2xl rounded-bl-none p-4 w-fit">
                <p>{props.text}</p>
            </div>
        </div>

    )
}