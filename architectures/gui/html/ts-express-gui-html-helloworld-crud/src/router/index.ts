import { handleList, handleView, handleCreateDisplay, handleCreateSubmit, handleUpdateDisplay, handleUpdateSubmit, handleDeleteDisplay, handleDeleteSubmit } from "../controllers/helloworld";
import { handleNotFound } from "../controllers/error";
import express, { Router } from "express";

const router = express.Router();

export default (): Router => {
  router.get('/', handleList);
  router.get('/view', handleView);
  router.get('/create', handleCreateDisplay);
  router.post('/create', handleCreateSubmit);
  router.get('/update', handleUpdateDisplay);
  router.post('/update', handleUpdateSubmit);
  router.get('/delete', handleDeleteDisplay);
  router.post('/delete', handleDeleteSubmit);
  router.all('*', handleNotFound);
  return router;
};

