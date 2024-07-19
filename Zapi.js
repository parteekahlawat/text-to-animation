import { GoogleGenerativeAI } from "@google/generative-ai";


const api = async () => {

    const genAI = new GoogleGenerativeAI('AIzaSyAE6WMkXYKMa4YKIkvie4ZVWk3ncyMgvi4');
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = "Write a story about a magic backpack.";
    
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    
}
api();
export default api ;