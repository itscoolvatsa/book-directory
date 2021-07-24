import express, { Request, Response } from "express";
import fs from "fs";
const books = require("../data/data.json");

const router = express();

router.delete("/:id", (req: Request, res: Response) => {
    const { id } = req.params;

    const data = books.filter((d: any) => d["id"] !== id);
    const jsonData = JSON.stringify(data, null, 2).toString();

    fs.writeFile("./src/data/data.json", jsonData, (err) => {
        if (err) {
            return res.status(400).send({});
        }
    });

    return res.status(201).send({});
});

export { router as DelBook };
