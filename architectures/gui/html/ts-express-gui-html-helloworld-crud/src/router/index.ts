import { handleList, handleView } from "../controllers/helloworld";
import express, { Router } from "express";

const router = express.Router();

export default (): Router => {
  router.get('/', handleList);
  router.get('/view', handleView);
  return router;
};

