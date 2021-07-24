import express, { Request, Response } from "express";
const books = require("../data/data.json");

const router = express();

router.get("/:id", (req: Request, res: Response) => {
    const { id } = req.params;

    const data = books.filter((d: any) => d["id"] == id);

    return res.status(201).send(data);
});

export { router as GetBook };
