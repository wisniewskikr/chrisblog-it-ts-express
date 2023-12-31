import { getMessageIndex, getMessageHelloWorld } from "../controllers/helloworld";
import { getResourceNotFound } from "../controllers/error";
import express, { Router } from "express";

const router = express.Router();

export default (): Router => {
  router.get('/', getMessageIndex);
  router.get('/helloworld', getMessageHelloWorld);
  router.get('*', getResourceNotFound);
  return router;
};

