import express, { json, Request, Response } from "express";
import fs from "fs";
const books = require("../data/data.json");

const router = express();

router.put("/", (req: Request, res: Response) => {
    // Getting data from body
    const data = req.body;
    // Pushing the data recieved from the body
    books.push(data);

    // Converting the data into JSON and
    // after it converting it to the string to write the file
    // In UTF-8
    const booksJson = JSON.stringify(books, null, 2).toString();

    // Writing the file
    fs.writeFile("./src/data/data.json", booksJson, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send({});
        }
    });
    // Sending the data back to the user as a conformation with 201
    return res.status(201).send({ data });
});

export { router as AddBooks };
