import 'dotenv/config'
import app from './src/app.js'
import https from 'https'
import fs from 'fs'

const PORT = process.env.PORT || 5000;
const httpsOptions = {
    key: fs.readFileSync('/path/to/server.key'), 
    cert: fs.readFileSync('/path/to/server.cert') 
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
