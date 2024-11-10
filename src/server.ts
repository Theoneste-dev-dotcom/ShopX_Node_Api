import router from "./routes/routes";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();
app.use(cors())
app.use(express.json());

app.use("/api", router);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

