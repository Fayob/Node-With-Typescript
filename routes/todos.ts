import { Router } from "express";
import {createTodoList, getTodoList, updateTodoList, deleteTodoList} from "../controller/todo";

// const express = require("express")
// const router = express.Router()

const router = Router()

router.post("/", createTodoList)
router.get("/", getTodoList)
router.patch("/:id", updateTodoList)
router.delete("/:id", deleteTodoList)

export default router