import { Router } from "express";
import asisteController from "../controllers/asiste.controller";

const Route = Router()

Route.post('/administrador/denuncia',asisteController.agrega);
Route.delete('/administrador/denuncia/:id',asisteController.borrar);
export default Route;