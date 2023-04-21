import Todo from "../models/todo.model";
import { Request,Response } from "express";

class TodoController{
    getAllTodos(req:Request,res:Response):void{
        console.log("hitting")
        Todo.find().then(todos=>{
            console.log("todos",todos)
            res.send({todos})
        })
    }
   async addTodo(req:Request,res:Response):Promise<void>{
        console.log("add todo")
        const {title,description}:{title:string,description:string} = req.body;
        const newTodo = new Todo({
            title,description,completed:false
        })
        await newTodo.save();
        res.send({message:"Successfullt created"})
    }
    
}

const todoController = new TodoController();
export default todoController;  