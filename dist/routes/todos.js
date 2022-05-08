"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = require("../controller/todo");
// const express = require("express")
// const router = express.Router()
const router = (0, express_1.Router)();
router.post("/", todo_1.createTodoList);
router.get("/", todo_1.getTodoList);
router.patch("/:id", todo_1.updateTodoList);
router.delete("/:id", todo_1.deleteTodoList);
exports.default = router;
