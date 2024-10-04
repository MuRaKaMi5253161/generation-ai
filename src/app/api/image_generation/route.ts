import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET(req: Request, res: Response) {
  const response = await openai.images.generate({
    model: "dall-e-3",
    // 生成する画像の特徴
    prompt: "スコティッシュフォールド",
    // 枚数
    n: 1,
    // 画像のサイズ
    size: "1024x1024",
    // 【styleプロパティ】
    // natural:より写真に近い vivid:ドラマチックCGに近い デフォルトでvividが指定されている
    // style: "natural"
    // 【qualityプロパティ】
    // hd:より品質のがいい画像を生成する standard:ドラマチックCGに近い デフォルトでstandardが指定されている
    // style: "hd"
  });
  console.log(response, req, res);
  return NextResponse.json(response);
}
