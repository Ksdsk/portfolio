import { ChatGPTAPI } from "chatgpt";
import 'dotenv/config'
import type { NextApiRequest, NextApiResponse } from 'next'
import resume from "./data/resume";

const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY!
})

type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
  ) {
    console.log("Invoked")
    const aa = await api.sendMessage(req.body["prompt"], {
        systemMessage: resume + "\n Return your answers at the maximum of 8 sentences"
    })
    res.status(200).json({ message: aa.text })
  }