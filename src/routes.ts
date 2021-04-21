import {Router} from "express";
import { getCustomRepository } from "typeorm";
import { SettingsController } from "./controllers/SettingsControllers";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

/**
 * Tipos de parametros
 * Routes Params => Parametros de rotas 
 * ex: http://localhost:3333/settings/1
 * Querys Params => Filtros e buscas
 * ex: http://localhost:3333/settings/1?search=algumacoisa&filtro=filtroex
 * Body Params => Objetos dentro de requsicoes JSON
 * ex: Body => { }
 */

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create)

export { routes };