import { handleReadAll } from "../controllers/helloworld";
import { getResourceNotFound } from "../controllers/error";
import express, { Router } from "express";

const router = express.Router();

export default (): Router => {
  router.get('/api/v1/messages', handleReadAll);
  router.get('*', getResourceNotFound);
  return router;
};

