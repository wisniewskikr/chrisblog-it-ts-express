import express, { Express } from "express";
import router from "./router";
const port = 3000;

const app: Express = express();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

app.use(express.static('static'));
app.set('view engine', 'ejs');
app.use('/', router());