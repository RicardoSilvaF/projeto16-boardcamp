import express from "express";
import cors from "cors";
import router from "./routers/routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`servidor ligado na porta ${PORT}`));