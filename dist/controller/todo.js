"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoList = exports.updateTodoList = exports.getTodoList = exports.createTodoList = void 0;
const todo_1 = require("../models/todo");
const Todos = [];
const createTodoList = (req, res, next) => {
    const { text } = req.body;
    const newTodos = new todo_1.Todo(Math.random().toString(), text);
    Todos.push(newTodos);
    res.status(200).json({ ceatedTodo: newTodos, length: Todos.length });
};
exports.createTodoList = createTodoList;
const getTodoList = (req, res, next) => {
    res.status(200).json({ Todos, length: Todos.length });
};
exports.getTodoList = getTodoList;
const updateTodoList = (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    const TodoIndex = Todos.findIndex(todoId => todoId.id === id);
    if (TodoIndex < 0) {
        throw new Error("Validation error");
    }
    Todos[TodoIndex] = new todo_1.Todo(Todos[TodoIndex].id, text);
    res.status(200).json({ msg: "Success!", updatedText: Todos[TodoIndex] });
};
exports.updateTodoList = updateTodoList;
const deleteTodoList = (req, res) => {
    const { id } = req.params;
    const TodoIndex = Todos.findIndex(todoId => todoId.id === id);
    if (TodoIndex < 0) {
        throw new Error("Invalid TodoId");
    }
    Todos.splice(TodoIndex, 1);
    res.status(200).json({ msg: "Deleted Successfully" });
};
exports.deleteTodoList = deleteTodoList;
