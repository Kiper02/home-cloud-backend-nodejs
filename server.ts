import 'dotenv/config'
import app from './src/app.js'

const PORT = process.env.PORT || 5000;

async function startApp() {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on PORT = ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
