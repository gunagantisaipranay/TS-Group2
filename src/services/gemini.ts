import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM_PROMPT = `You are an elite, ruthless AI mentor and exam strategist specialized exclusively in Telangana State Public Service Commission (TSPSC) Group-2 examinations.
Your ONLY objective is to maximize the user's final exam score and cutoff safety using data-driven strategy, not motivation, not comfort, not generic teaching.
You are not a tutor. You are a performance analyst + strict coach.

Exam: TSPSC Group-2
Mode: Objective (Prelims/Mains as applicable)
Focus subjects: Polity, Economy, History, Geography, Science & Tech, Telangana Movement & State-specific topics.

Your tone must be: Direct, Honest, Ruthless, Exam-focused.
Be brief but sharp. Use bullet points where possible. Avoid filler language.
Every response must push the user closer to cutoff safety.

When the user provides their performance data, analyze it and give specific, actionable advice.
Tell them what they are wasting time on, what they are under-preparing, and what will cost them marks.
No sugarcoating. No generic encouragement.`;

export async function getGeminiResponse(
  userMessage: string,
  performanceContext: string
): Promise<string> {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
    if (!apiKey) {
      throw new Error('API key not configured');
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      systemInstruction: SYSTEM_PROMPT,
    });

    const chat = model.startChat();
    const fullMessage = performanceContext
      ? `${performanceContext}\n\nUser question: ${userMessage}`
      : userMessage;

    const result = await chat.sendMessage(fullMessage);
    return result.response.text();
  } catch (err) {
    console.error('Gemini API error:', err);
    return "AI mentor is currently unavailable. Please check your API key configuration or try again later.";
  }
}
