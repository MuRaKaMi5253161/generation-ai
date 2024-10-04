import { NextResponse } from "next/server";
import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET(req: Request, res: Response) {
  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream("./public/audio/speech1.mp3"),
    model: "whisper-1",
    // 回答のランダム性を指定
    // temperature: 0
    // 言語を指定
    // language: "ja"
  });
  console.log(req, res);
  console.log(transcription.text);

  return NextResponse.json(transcription.text);
}
