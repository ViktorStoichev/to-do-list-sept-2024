import { Router } from "express";

import Task from "../models/Task.js";

const router = Router();

router.get("/", async (req, res) => {

  const tasks = await Task.find().lean();  
  
  res.render("home", { tasks });
});

router.post("/", async (req, res) => {
  const newTask = req.body;

  const task = await Task.create(newTask);

  res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
    const id = req.params.id;

  const task = await Task.findByIdAndDelete(id);
  console.log(task);
  
  
  res.redirect('/');
})


router.all('*', (req, res) => {
    res.render('404');
});

export const homeController = router;
