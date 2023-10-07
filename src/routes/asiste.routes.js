import { Router } from "express";
import asisteController from "../controllers/asiste.controller";

const Route = Router()
Route.get('/asiste',asisteController.listar);
Route.post('/asiste',asisteController.agrega);
Route.delete('/asiste/:id/denuncia/:id_denuncia',asisteController.borrar);
export default Route;