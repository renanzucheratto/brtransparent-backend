import { Router } from "express";
import { findDeputyController } from "./useCases/Deputies/FindDeputies";

const router = Router()

router.post('/deputados', (req, res) => {
    return findDeputyController.handle(req, res)
})

export { router }