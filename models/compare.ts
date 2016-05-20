import * as express from "express";

export function render(req : express.Request, res : express.Response) {
    res.send("hi you sent " + req.query.deck1 + "<br/>" + req.query.deck2);
}
