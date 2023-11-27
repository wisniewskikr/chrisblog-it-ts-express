import { handleList, handleView, handleCreateDisplay, handleCreateSubmit } from "../controllers/helloworld";
import express, { Router } from "express";

const router = express.Router();

export default (): Router => {
  router.get('/', handleList);
  router.get('/view', handleView);
  router.get('/create', handleCreateDisplay);
  router.post('/create', handleCreateSubmit);
  return router;
};

