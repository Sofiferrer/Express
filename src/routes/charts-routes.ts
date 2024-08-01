import { Router } from "express";
import db from "../database/charts.json";

const chartsRouter = Router()

chartsRouter.get("/", (request, response) => {
    console.log('hola');
    
})

export default chartsRouter