import { Router } from "express";
import { listService } from "../services/list-service.js";

const router = Router();

const list = await listService.getAll();

router.get("/", (req, res) => {
  res.render("home", { list });
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
