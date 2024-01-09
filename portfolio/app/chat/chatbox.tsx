'use client'

import { FormEvent, useEffect, useState } from "react";
import {BsFillSendFill} from "react-icons/bs"

interface IBubble {
    type: string;
    text: string;
}

export default function ChatBox(props: { handleCallback: (arg0: IBubble[]) => void; }) {

    const [input, setInput] = useState("")
    const [disabled, setDisabled] = useState(false)
    const [chatId, setChatId] = useState("")

    const onSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setDisabled(true)

        const savedPrompt = input;
        const bubble: IBubble = {
            type: "prompt",
            text: input
        }
        const emptybubble: IBubble = {
            type: "completion",
            text: "..."
        }
        const errorBubble: IBubble = {
            type: "completion",
            text: "There was an error. Try asking me again!"
        }

        setInput("");
        props.handleCallback([bubble, emptybubble])

        try {
            const res = await fetch('/api/gpt', {
                method: "POST",
                mode: "cors",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "prompt": savedPrompt,
                    "historyId": chatId
                })
            })
            
            const completion = await res.json()
            const gptBubble: IBubble = {
                type: "completion",
                text: completion["completion"]["text"]
            }

            setChatId(completion["completion"]["id"]);
            props.handleCallback([bubble, gptBubble])
        } catch (e) {
            console.log(e)
            props.handleCallback([bubble, errorBubble])
        } finally {
            setDisabled(false)
        }
    }

    return (
        <div className='mt-6'>
            <div className='flex justify-between gap-6'>
                <form className='text-gray-400 flex w-full' onSubmit={onSubmit} method="POST">
                    <input type="text" name="prompt" className='backdrop-blur-md bg-white/10 focus:outline-none focus:text-white rounded-full py-2 pl-6 pr-12 w-full placeholder-white/50'
                    placeholder='Ask me anything...'
                    onChange={(e) => {
                        setInput(e.target.value)
                    }}
                    value={input}
                    disabled={disabled}
                    >
                    </input>

                    <button type="submit" className="">
                        <div className="text-white/50 grid content-center bg-white/10 rounded-full p-3 ml-4">
                            <BsFillSendFill size={"20px"} className="hover:text-white transition ease-linear cursor-pointer"/>
                        </div>
                    </button>

                </form>
            </div>

            <div className='flex gap-6 justify-center py-4'>
                <p className='font-light text-xs text-white/60'>
                    Disclaimer: Chat may not provide fully accurate and personal information.
                </p>
            </div>

        </div>
    )
}
