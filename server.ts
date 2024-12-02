import 'dotenv/config'
import app from './src/app.js'
import https from 'https'
import fs from 'fs'
import path from 'path'

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
const httpsOptions = {
    key: fs.readFileSync(`${__dirname}/server.key`), 
    cert: fs.readFileSync(`${__dirname}/server.cert`) 
};

async function startApp() {
  try {
    https.createServer(httpsOptions, app).listen(443, () => {
        console.log('HTTPS Server running on port 443');
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
