/// <reference path="../typings/index.d.ts"/>
import * as fs from "fs";
import * as express from "express";

export class WebServer {
    public app : express.Application = express();
    public constructor() {
        this.app = express();
        this.configure();
    }
    public configure() : void {
        this.app.set("view engine", "pug");
        this.app.set("views", "views");
        this.app.all("*", (req : express.Request, res : express.Response) => {
            if (req.path == "/") {
                res.render("index");
            } else if (req.path == "/compare") {
                require("../models/compare.js").render(req, res);
            }
        });
    }
    public start() : void {
        this.app.listen(3000, () => {
            console.log("Example app listening on port 3000!");
        });
    }
}
