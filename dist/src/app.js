import express from 'express';
import cors from 'cors';
import fileupload from 'express-fileupload';
const app = express();
app.use(express.json());
app.use(cors());
app.use(fileupload());
export default app;
//# sourceMappingURL=app.js.map