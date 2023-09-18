import { ChatGPTAPI, ChatMessage } from "chatgpt";
import 'dotenv/config'
import type { NextApiRequest, NextApiResponse } from 'next'
import resume from "./data/resume";

const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY!
})

type ResponseData = {
    completion: ChatMessage
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
  ) {

    if (req.body["historyId"] == "") {
        const comp = await api.sendMessage(req.body["prompt"], {
            systemMessage: resume + "\n Return your answers at the maximum of 8 sentences",
        })
        res.status(200).json({ completion: comp })
    } else {
        const comp = await api.sendMessage(req.body["prompt"], {
            systemMessage: resume + "\n Return your answers at the maximum of 8 sentences",
            parentMessageId: req.body["historyId"]
        })

        res.status(200).json({ completion: comp })
    }

  }