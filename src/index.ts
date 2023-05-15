import * as dotenv from "dotenv";
import { OpenAI } from "langchain/llms/openai";

dotenv.config();

const model = new OpenAI({
  modelName: "text-davinci-003",
  openAIApiKey: process.env.AZURE_OPENAI_API_KEY,
  maxTokens: 80,
  maxRetries: 3,
});

const res = await model.call(
  "What's a good idea for an application to build with GPT-3?"
);

console.log(res);
