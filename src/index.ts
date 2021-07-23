import express from "express";
import { GetBooks } from "./routes/getbooks";
import { AddBooks } from "./routes/addBooks";

const app = express();

app.use(GetBooks);
app.use(AddBooks);

// Starting the server
app.listen(3000, () => {
    console.log("Listening on PORT 3000");
});
