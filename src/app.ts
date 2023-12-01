import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());
const a = 30;
app.get("/", (req: Request, res: Response) => {
  res.send(a);
});

export default app;
