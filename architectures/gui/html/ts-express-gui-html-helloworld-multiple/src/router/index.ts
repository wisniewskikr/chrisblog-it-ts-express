import { handleDisplay } from "../controllers/helloworld";
import express, { Router } from "express";

const router = express.Router();

export default (): Router => {
  router.get('/', handleDisplay);
  return router;
};

