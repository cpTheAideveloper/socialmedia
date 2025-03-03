// File: src/app/api/generate/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { ContentPlanner } from '@/types';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const body: ContentPlanner.GenerateRequest = await request.json();
    const { industry, frequency, contentType, extraIdeas } = body;

    const messages = [
      {
        role: 'system',
        content: `
          Transform your response into this JSON format: { "ideas": [ { "idea": "Idea text", "subtitle": "Subtitle or tip", "type": "content type" } ] }

          Use the following information to create content ideas:

          Industry: ${industry}
          Frequency: ${frequency}
          Content Type: ${contentType}
          Extra Ideas: ${extraIdeas ?? 'None'}
          Generate brief titles, subtitles, and specify the type of content. If possible, add tips or examples in the 'subtitle'. 
        `,
      },
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
    });

    const parsed: ContentPlanner.GenerateResponse = JSON.parse(
      completion.choices[0].message?.content ?? '{"ideas":[]}'
    );

    return NextResponse.json(parsed);
  } catch (error) {
    return NextResponse.json({ ideas: [] }, { status: 500 });
  }
}