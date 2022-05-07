import { RequestHandler } from "express";

import { Todo } from "../models/todo";

const Todos: Todo[] = []

export const createTodoList: RequestHandler = (req, res, next) =>{
    const {text} = req.body as {text: string}
    const newTodos = new Todo(Math.random().toString(), text)
    Todos.push(newTodos)

    res.status(200).json({ceatedTodo: newTodos, length: Todos.length})
}
export const getTodoList: RequestHandler = (req, res, next) =>{

    res.status(200).json({Todos, length: Todos.length})
}
export const updateTodoList: RequestHandler<{id: string}> = (req, res) =>{
    const {id} = req.params 
    const {text} = req.body as {text: string}
    const TodoIndex = Todos.findIndex(todoId=> todoId.id === id)
    if (TodoIndex < 0) {
        throw new Error("Validation error")
    }
    Todos[TodoIndex] = new Todo(Todos[TodoIndex].id, text)

    res.status(200).json({msg: "Success!", updatedText: Todos[TodoIndex]})
}

export const deleteTodoList: RequestHandler<{id: string}> = (req, res)=> {
    const {id} = req.params

    const TodoIndex = Todos.findIndex(todoId=>todoId.id === id)
    if (TodoIndex < 0){
        throw new Error("Invalid TodoId")
    }
    Todos.splice(TodoIndex, 1)

    res.status(200).json({msg: "Deleted Successfully"})
}
