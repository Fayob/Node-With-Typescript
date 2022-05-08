"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express")
const express_1 = __importDefault(require("express"));
// import express, {Request, Response, NextFunction}  from "express";
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/todo", todos_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ msg: err.message });
});
app.listen(3000, () => {
    console.log(`Server Listening on port 3000...`);
});
