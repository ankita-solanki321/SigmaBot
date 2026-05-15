import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});

app.post("/test", async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Message is required" });
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
         model: "llama-3.3-70b-versatile",
            messages: [{
                role: "user",
                content: req.body.message
            }]
        })
    };

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", options);
        const data = await response.json();
        // console.log(data.choices[0].message.content);
        res.send(data.choices[0].message.content);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
});