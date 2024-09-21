import { Router } from "express";
import { listService } from "../services/list-service.js";

const router = Router();

router.get("/", async (req, res) => {
  const list = await listService.getAll();
  
  res.render("home", { list });
});

router.post("/", (req, res) => {
  const newTask = req.body;

  listService.create(newTask);

  res.redirect('/');
});

router.all('*', (req, res) => {
    res.render('404');
});

export const homeController = router;
