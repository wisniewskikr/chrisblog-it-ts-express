import { getMessageIndex, getMessageHelloWorld } from "../controllers/helloworld";
import { getPageNotFound } from "../controllers/error";
import express, { Router } from "express";

const router = express.Router();

export default (): Router => {
  router.get('/', getMessageIndex);
  router.get('/helloworld', getMessageHelloWorld);
  router.get('*', getPageNotFound);
  return router;
};

