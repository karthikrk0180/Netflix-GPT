import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import { GEMINI_KEY } from "./constants";

// Initialize the GoogleGenerativeAI instance
const genAI = new GoogleGenerativeAI(GEMINI_KEY);

// Define safety settings as an array of objects (not using SafetySetting)
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE, // No blocking for harassment
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE, // Block low and above for hate speech
  },
];

// Get the generative model with safety settings
export const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  safetySettings: safetySettings
});
