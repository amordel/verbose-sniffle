import * as site from "./autoload";
import * as express from "express";

var app : express.Application = express();

app.get("/", (req : express.Request, res : express.Response) => {
    res.send("Hello world!");
});

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
