// const { Configuration, OpenAIApi } = require("openai");
// require('dotenv').config();

// const configuration = new Configuration({
//   apiKey: process.env.GEMINI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// async function summarizeCompany(text) {
//   const prompt = `
// You are an assistant that generates summaries of companies based on website content.

// Extract a brief overview including:
// - Company name
// - Industry
// - What the company does
// - Location (if mentioned)

// Here is the content:

// ${text}
// `;

//   const response = await openai.createChatCompletion({
//     model: "gemini-pro",
//     messages: [{ role: "user", content: prompt }],
//     max_tokens: 400,
//   });

//   return response.data.choices[0].message.content.trim();
// }

// module.exports = summarizeCompany;
