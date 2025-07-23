const express  = require("express");
const router = express.Router();

//import controller
// hmne yha pr controllers se functions import kiye hain
// jo ki humne controllers folder me create kiye hain
// ye functions humare routes ko handle karenge
// jaise createTodo, getTodo, updateTodo, deleteTodo
// ye functions humare todo app ke liye hain
// ye functions database se interact karenge
// aur todo app ke liye CRUD operations perform karenge 
const {createTodo} = require("../controllers/createTodo");
const {getTodo, getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} =  require("../controllers/deleteTodo");

//define APi routes
// yha pr hum apne routes define kar rahe hain
// jaise createTodo, getTodo, updateTodo, deleteTodo
// ye routes humare todo app ke liye hain
// ye routes humare controllers se connect hain
// jaise createTodo route createTodo function ko call karega
// getTodo route getTodo function ko call karega
// updateTodo route updateTodo function ko call karega
// deleteTodo route deleteTodo function ko call karega
// hm yha import kiye huye function ko map kra rhe hai kisi path ske sth
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;