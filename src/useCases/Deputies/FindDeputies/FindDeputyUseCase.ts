import { Deputy } from '../../../entities/Deputies'
import { IDeputiesProvider } from '../../../providers/IDeputiesProvider'
import { IFindDeputyResquestDTO } from './FindDeputyDTO'

export class FindDeputyUseCase {

    constructor(
        private deputiesProvider: IDeputiesProvider
    ) {}

    async execute(data: IFindDeputyResquestDTO){
        const deputyExists = await this.deputiesProvider.findById(data.id)

        if(!deputyExists){
            throw new Error(`O Deputado com id ${data.id} não existe ou não foi encontrado`)
        }
        return deputyExists
    }
}