import { handleInit, handleHelloWorld } from "../controllers/helloworld";
import { handleNotFound } from "../controllers/error";
import express, { Router } from "express";

const router = express.Router();

export default (): Router => {
  router.get('/', handleInit);
  router.get('/helloworld', handleHelloWorld);
  router.get('*', handleNotFound);
  return router;
};

