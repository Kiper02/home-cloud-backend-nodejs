import express from 'express';
import cors from 'cors'
import fileupload from 'express-fileupload'
import router from './routes/index.js';

const app = express()

app.use(express.json());
app.use(cors());
app.use(fileupload());
app.use(express.json());


app.use("/api", router)

export default app;
