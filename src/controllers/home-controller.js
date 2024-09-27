import { Router } from "express";

import Task from "../models/Task.js";

const router = Router();

router.get("/", async (req, res) => {

  const tasks = await Task.find().lean();  
  
  res.render("home", { tasks });
});

router.post("/", async (req, res) => {
  const newTask = req.body;

  await Task.create(newTask);

  res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
  const id = req.params.id;

  await Task.findByIdAndDelete(id);
  
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

router.all('*', (req, res) => {
    res.render('404');
});

export const homeController = router;
