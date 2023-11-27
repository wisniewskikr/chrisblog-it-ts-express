import { handleList, handleView, handleCreateDisplay, handleCreateSubmit, handleUpdateDisplay, handleUpdateSubmit } from "../controllers/helloworld";
import express, { Router } from "express";

const router = express.Router();

export default (): Router => {
  router.get('/', handleList);
  router.get('/view', handleView);
  router.get('/create', handleCreateDisplay);
  router.post('/create', handleCreateSubmit);
  router.get('/update', handleUpdateDisplay);
  router.post('/update', handleUpdateSubmit);
  return router;
};

