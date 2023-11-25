import { getMessage } from "../controllers/helloworld";
import express, { Router } from "express";

const router = express.Router();

export default (): Router => {
  router.get('/', getMessage);
  return router;
};

