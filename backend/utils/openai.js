

import "dotenv/config";

const getOpenAIAPIResponse = async (message) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [{ role: "user", content: message }]
        })
    };

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", options);
        const data = await response.json();

        // ✅ Log full response to debug API errors
        if (!data.choices) {
            throw new Error(data.error?.message || "OpenAI API error");
        }

        return data.choices[0].message.content;

    } catch (err) {
        console.log("OpenAI Error:", err.message);
        throw err; // ✅ rethrow so chat.js catch block handles it
    }
};

export default getOpenAIAPIResponse;