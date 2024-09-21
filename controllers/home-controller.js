import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.post("/", (req, res) => {
  const newTask = req.body;

  console.log(newTask);

  res.redirect('/');
});

router.all('*', (req, res) => {
    res.render('404');
});

export const homeController = router;
