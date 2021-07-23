import express, { Request, Response } from "express";
import fs from "fs";

const router = express();

router.get("/", (req: Request, res: Response) => {
    fs.readFile("./data.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            res.send({});
            return;
        }
        const result = JSON.parse(data);
        console.log(result);
        res.send(result);
    });
});

export { router as GetBooks };
