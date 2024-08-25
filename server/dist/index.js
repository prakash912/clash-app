import express from 'express';
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 7000;
app.get('/', (req, res) => {
    return res.send("Hello prakash its working 🐱");
});
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
