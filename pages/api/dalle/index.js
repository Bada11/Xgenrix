import connectDB from "@/libs/mongoose";
import { Configuration, OpenAiApi } from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST" && req.method !== "GET") {
    return res.status(405).end();
  }

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAiApi(configuration);

  try {
    if (req.method === "POST") {                                                                                                                    
      connectDB();
      const { prompt } = req.body;

      const getAiResponse = await openai.createImage({
        prompt,
        n: 1,
        size: "1024x1024",
        response_format: "b64_json",
      });

      const image = getAiResponse.data.data[0].b64_json;
      return res.status(200).json({ photo: image });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send(error?.response.data.error.message || "Something went wrong");
  }
}
