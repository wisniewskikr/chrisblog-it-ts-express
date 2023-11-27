import { handleReadAll, handleReadById, handleCreate } from "../controllers/helloworld";
import { getResourceNotFound } from "../controllers/error";
import express, { Router } from "express";

const router = express.Router();

export default (): Router => {
  router.get('/api/v1/messages', handleReadAll);
  router.get('/api/v1/messages/:id', handleReadById);
  router.post('/api/v1/messages', handleCreate);
  router.get('*', getResourceNotFound);
  return router;
};

