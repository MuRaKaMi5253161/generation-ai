import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET(req: Request, res: Response) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: "世界遺産が最も多い国を教えて" }],
  });
  console.log(response, req, res);
  return NextResponse.json(response);
}
