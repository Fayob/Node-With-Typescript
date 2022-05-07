// const express = require("express")
import express  from "express";
// import express, {Request, Response, NextFunction}  from "express";
import todoRoutes from "./routes/todos";

const app = express()

app.use(express.json())
app.use("/todo", todoRoutes)

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction)=>{
    res.status(500).json({msg:err.message})
})

app.listen(3000, ()=>{
console.log(`Server Listening on port 3000...`);
})
