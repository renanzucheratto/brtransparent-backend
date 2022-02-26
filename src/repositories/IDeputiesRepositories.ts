import { Deputy } from '../entities/Deputies'

export interface IDeputiesRepository {
    findById(id: string): Promise<Deputy>
}