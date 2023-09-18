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
        <div className='pt-6'>
            <div className='flex justify-between gap-6'>
                <form className='dark:text-gray-400 text-black flex w-full' onSubmit={onSubmit} method="POST">
                    <input type="text" name="prompt" className='backdrop-blur-md dark:bg-white/10 bg-black/10 focus:outline-none dark:focus:text-white focus:text-black rounded-full py-2 pl-6 pr-12 w-full dark:placeholder-white/50 placeholder-gray-500'
                    placeholder='Try asking me "Tell me about yourself"'
                    onChange={(e) => {
                        setInput(e.target.value)
                    }}
                    value={input}
                    disabled={disabled}
                    >
                    </input>

                    <button type="submit" className="">
                        <div className="dark:text-white/50 text-black/50 grid content-center dark:bg-white/10 bg-black/10 rounded-full p-3 ml-4">
                            <BsFillSendFill size={"20px"} className="dark:hover:text-white hover:text-black transition ease-linear cursor-pointer"/>
                        </div>
                    </button>

                </form>
            </div>

            <div className='flex gap-6 justify-center pt-4'>
                <p className='font-light text-xs dark:text-white/60 text-black/70'>
                Please be aware that the chat may not provide overly personal information.
                </p>
            </div>

        </div>
    )
}
