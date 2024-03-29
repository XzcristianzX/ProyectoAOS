import { Router } from "express";
import {create, getAll} from "../controllers/producto.controller.js";
import {validate} from  "../middlewares/validator.middleware.js";
import { productoValidator } from "../validators/producto.validator.js";

const router = Router();

router.get("/", validate(productoValidator) , getAll );

router.put("/",  create);

export default router;