import { Deputy } from "../../entities/Deputies";
import { IDeputiesProvider } from "../IDeputiesProvider";
import axios from "axios";

export class MySqlDeputyProvider implements IDeputiesProvider {

    async findById(id: string): Promise<Deputy> {
        try {
            const deputy: any = await axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}`)
            return {
                id: deputy.data.dados.id,
                name: deputy.data.dados.nomeCivil,
                email: 'email@deputado.com'
            }
        } catch (err: any) {
            return err
        }
    }
}