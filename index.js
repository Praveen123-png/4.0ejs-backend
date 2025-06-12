import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

var day;
function findDay(req, res, next){
    const d = new Date();
    day = d.getDay();
    next();
}
app.use(findDay);

app.get("/", (req, res) => {
    res.render(__dirname + "/index.ejs", {week: day} );//I am passing the "week" variable to the index.ejs file.
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});