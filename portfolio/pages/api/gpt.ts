import { ChatGPTAPI, ChatMessage } from "chatgpt";
import 'dotenv/config'
import type { NextApiRequest, NextApiResponse } from 'next'
import resume from "./data/resume";
import personal from "./data/personal";

const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY!,
    completionParams: {
        model: "gpt-4"
    }
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
            systemMessage: resume + personal + " Stick to 8 sentences or less",
            timeoutMs: 1000 * 60
        })
        res.status(200).json({ completion: comp })
    } else {
        const comp = await api.sendMessage(req.body["prompt"], {
            systemMessage: resume + personal + " Stick to 8 sentences or less",
            parentMessageId: req.body["historyId"],
            timeoutMs: 1000 * 60
        })

        res.status(200).json({ completion: comp })
    }

  }