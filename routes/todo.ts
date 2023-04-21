import { Router } from "express";
import todoController from "../controllers/todo.controller";
const router = Router();

router.get("/",todoController.getAllTodos);
router.post("/",todoController.addTodo);


export default router;