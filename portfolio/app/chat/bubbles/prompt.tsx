export default function Prompt(props: {text: string}) {
    return (
        <div className="flex justify-end m-4">
            <div className="bg-blue-700 rounded-2xl rounded-br-none p-4 w-fit text-white">
                <p>{props.text}</p>
            </div>
        </div>

    )
}