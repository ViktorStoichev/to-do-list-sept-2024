import express from "express";
import handlebars from "express-handlebars";
import { routes } from "../routes.js";
import mongoose from "mongoose";

try {
    mongoose.connect('mongodb://localhost:27017/to-do-list');

    console.log('Connected to database');
} catch (error) {
    console.log('Failed to connect to database');
    console.log(error.message);
}

const app = express();
const port = 5000;

app.engine("hbs", handlebars.engine({
    extname: "hbs",
  }));
app.set("view engine", "hbs");
app.set('views', 'src/views');

app.use(express.urlencoded({extended: false}));
app.use(express.static('static'));

app.use(routes);

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}...`));
