import { handleIndex, handleName } from "../controllers/helloworld";
import { getResourceNotFound } from "../controllers/error";
import express, { Router } from "express";

const router = express.Router();

export default (): Router => {
  router.get('/', handleIndex);
  router.get('/name/:name', handleName);
  router.get('*', getResourceNotFound);
  return router;
};

