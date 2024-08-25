import express,{Application,Request,Response} from 'express';
import "dotenv/config";
const app:Application = express();
const PORT = process.env.PORT || 7000;
app.get('/',(req:Request,res:Response)=>{
    return res.send("Hello prakash its working 🐱");
})

app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));