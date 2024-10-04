import { NextResponse } from "next/server";
import OpenAI from "openai";
import path from "path";
import fs from "fs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const filePath = path.resolve("./public/audio/speech.mp3");

export async function GET(req: Request, res: Response) {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1-hd",
    voice: "alloy",
    input: "生成AIたのすいっす",
    // 音声の形式を指定
    // response_format: "wav",
    // 音声読み上げの速度を指定
    // speed: 4.0,
  });
  console.log(req, res);

  // javascrptがバイナリデータを扱える形式に変換
  const arrayBuffer = await mp3.arrayBuffer();
  // node.jsで扱える形式に変換
  const buffer = Buffer.from(arrayBuffer);
  // ファイルの書き出し
  await fs.promises.writeFile(filePath, buffer);

  return NextResponse.json("success");
}
