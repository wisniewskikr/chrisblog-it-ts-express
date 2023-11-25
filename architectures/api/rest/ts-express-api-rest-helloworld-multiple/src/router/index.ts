import { getMessageIndex, getMessageHelloWorld } from "../controllers/helloworld";
import express, { Router } from "express";

const router = express.Router();

export default (): Router => {
  router.get('/', getMessageIndex);
  router.get('/helloworld', getMessageHelloWorld);
  return router;
};

