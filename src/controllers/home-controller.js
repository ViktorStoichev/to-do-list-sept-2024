import { Router } from "express";

import Task from "../models/Task.js";
import DoneTask from "../models/DoneTasks.js";

const router = Router();

router.get("/", async (req, res) => {

  const tasks = await Task.find().lean(); 
  const doneTasks = await DoneTask.find().lean(); 
  
  res.render("home", { tasks, doneTasks });
});

router.post("/", async (req, res) => {
  const newTask = req.body;

  await Task.create(newTask);

  res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
  const id = req.params.id;

  await DoneTask.findByIdAndDelete(id);
  
  res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const task = await Task.findById(id).lean();
  
    res.render("edit", { task });
});

router.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    await Task.findByIdAndUpdate(id, req.body);
    
    res.redirect('/');
});

router.get('/done/:id', async (req, res) => {
    const id = req.params.id;
    const task = await Task.findByIdAndDelete(id).lean();

    await DoneTask.create(task);

    res.redirect('/');
});

router.all('*', (req, res) => {
    res.render('404');
});

export const homeController = router;
