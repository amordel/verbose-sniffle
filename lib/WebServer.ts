import * as site from "./autoload";
import * as express from "express";

export class WebServer {
    public app : express.Application = express();
    public constructor() {
        this.app = express();
        this.configure();
    }
    public configure() : void {
        console.log(site.config);
        this.app.get("/", (req : express.Request, res : express.Response) => {
            res.send("Hello world!");
        });
    }
    public start() : void {
        this.app.listen(3000, () => {
            console.log("Example app listening on port 3000!");
        });
    }
}
