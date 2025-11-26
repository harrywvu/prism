import { GoogleGenAI } from "@google/genai";

const getGeminiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("Gemini API Key is missing. Mock responses might be used or calls will fail.");
    // In a real scenario, we might want to throw, but for a demo frontend without a backend proxy, 
    // we sometimes handle this gracefully if the env isn't set.
    // However, per instructions, we assume process.env.API_KEY is available.
  }
  return new GoogleGenAI({ apiKey: apiKey || '' });
};

export const askPrismAssistant = async (question: string, context?: string): Promise<string> => {
  try {
    const ai = getGeminiClient();
    
    // We use the flash model for quick responses suitable for a UI assistant
    const modelId = 'gemini-2.5-flash';
    
    const systemInstruction = `You are PRISM, a helpful AI assistant for a smart university ID platform. 
    The platform handles payments, attendance, and facility access.
    Keep answers concise (under 50 words) and friendly.
    If context is provided, use it to personalize the answer.
    Current Context: ${context || 'No specific user data provided.'}`;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: question,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I'm having trouble connecting to the network right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I couldn't process that request at the moment. Please ensure the API key is configured.";
  }
};
