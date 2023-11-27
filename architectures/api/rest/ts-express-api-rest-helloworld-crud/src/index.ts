import express, { Express } from "express";
import bodyParser from 'body-parser';
import router from "./router";
const port = 3000;

const app: Express = express();
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

app.use('/', router());