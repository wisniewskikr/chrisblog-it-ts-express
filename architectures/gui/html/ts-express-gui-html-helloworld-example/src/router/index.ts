import { handleDisplay } from "../controllers/helloworld";
import { handleNotFound } from "../controllers/error";
import express, { Router } from "express";

const router = express.Router();

export default (): Router => {
  router.get('/', handleDisplay);
  router.get('*', handleNotFound);
  return router;
};

