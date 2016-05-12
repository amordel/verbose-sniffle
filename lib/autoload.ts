///<reference path="../typings/main.d.ts"/>
import * as fs from "fs";
export var config : any = JSON.parse(fs.readFileSync("lib/config.json").toString());
console.log("Autoloaded");
import * as mysql from "mysql";
export var db : mysql.IConnection = mysql.createConnection(config.mysql);
exports.db.connect((err : mysql.IError) => {
    if (err) {
        console.log(err.toString());
        return;
    }
    console.log("Connected!");
});
