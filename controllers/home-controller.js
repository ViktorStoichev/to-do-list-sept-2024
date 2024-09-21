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

export const homeController = router;
