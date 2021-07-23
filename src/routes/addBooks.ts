import express, { Request, Response } from "express";
import fs from "fs";

const router = express();

router.post("/", (req: Request, res: Response) => {
    const data = req;
    console.log(data);
    res.send({});
});

export { router as AddBooks };
