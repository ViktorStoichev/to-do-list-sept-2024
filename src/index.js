import express from "express";
import handlebars from "express-handlebars";

const app = express();
const port = 5000;

app.engine("hbs", handlebars.engine({
    extname: "hbs",
  }));
app.set("view engine", "hbs");
app.set('views', 'src/views');

app.use(express.urlencoded({extended: false}));
app.use(express.static('static'));

app.get("/", (req, res) => {
  res.render("home");
});

app.post('/', (req, res) => {
  const newTask = req.body;

  console.log(newTask);
  
});

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}...`));
