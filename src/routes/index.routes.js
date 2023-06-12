import { Router } from "express";
import Task from '../models/Task'
import {renderTasks, createTasks, deleteTask, renderTaskEdit, editTask, toggleDone} from '../controllers/tasks.controller'

const router = Router()

  router.get("/", renderTasks);

  router.post("/tasks/add", createTasks);

  router.get("/about", (req, res) => {
    res.render("about");
  });

  router.get("/tasks/:id/edit", renderTaskEdit);

  router.post("/tasks/:id/edit", editTask);

  router.get("/tasks/:id/delete", deleteTask);

  router.get("/toggleDone/:id", toggleDone);

  export default router;