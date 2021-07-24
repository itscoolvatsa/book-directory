import express from "express";
import { GetBooks } from "./routes/getbooks";
import { AddBooks } from "./routes/addBooks";
import { DelBook } from "./routes/delBook";
import { GetBook } from "./routes/getBook";

const app = express();
app.use(express.json());

app.use(GetBooks);
app.use(AddBooks);
app.use(DelBook);
app.use(GetBook);

// Starting the server
app.listen(3000, () => {
    console.log("Listening on PORT 3000");
});
