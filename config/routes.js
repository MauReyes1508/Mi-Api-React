import { Router } from "express";

import infoController from "../controllers/infoController.js";


const router = new Router();

router.get('/info', infoController.index) // EndPoint obtiene toda la informacion disponible
router.post('/info', infoController.store) // Crea una nueva info
//router.get('/info/:id', infoController.details) // Obtiene detalles del info por el id

export default router