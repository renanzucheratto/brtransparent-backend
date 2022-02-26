import { Request, Response } from "express";
import { FindDeputyUseCase } from "./FindDeputyUseCase";

export class FindDeputyController {

    constructor(
        private findDeputyUseCase: FindDeputyUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response|undefined> {
        const{ id, name, email } = request.body

        try{
            const deputy = await this.findDeputyUseCase.execute({
                id,
                name,
                email
            })

            return response.status(201).json(deputy)
        } catch (err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}