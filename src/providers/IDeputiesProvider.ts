import { Deputy } from '../entities/Deputies'

export interface IDeputiesProvider {
    findById(id: string): Promise<Deputy>
}