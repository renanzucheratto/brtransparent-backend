import { Deputy } from "../../entities/Deputies";
import { IDeputiesProvider } from "../IDeputiesProvider";
import axios from "axios";
import { convertNumberToRoman } from "../../utils/NumeroRomano";

export class MySqlDeputyProvider implements IDeputiesProvider {

    async findById(id: string): Promise<Deputy> {
        try {

            const deputy: any = await axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}`)
            const output = {
                    nome: deputy.data.dados.nomeCivil,
                    email: deputy.data.dados.ultimoStatus.email,
                    cpf: deputy.data.dados.cpf,
                    dataNascimento: deputy.data.dados.dataNascimento,
                    dataFalecimento: deputy.data.dados.dataFalecimento,
                    ufNascimento: deputy.data.dados.ufNascimento,
                    municipioNascimento: deputy.data.dados.municipioNascimento,
                    escolaridade: deputy.data.dados.escolaridade,
                    sexo: deputy.data.dados.sexo,
                    urlFoto: deputy.data.dados.ultimoStatus.urlFoto,
                    redesSociais: deputy.data.dados.redeSocial,
                    siglaPartido: deputy.data.dados.ultimoStatus.siglaPartido,
                    uriPartido: deputy.data.dados.ultimoStatus.uriPartido,
                    siglaUf: deputy.data.dados.ultimoStatus.siglaUf,
                    idLegislatura: deputy.data.dados.ultimoStatus.idLegislatura,
                    dataInicioLegislatura: deputy.data.dados.ultimoStatus.data,
                    nomeEleitoral: deputy.data.dados.ultimoStatus.nomeEleitoral,
                    telefone: `(61) ${deputy.data.dados.ultimoStatus.gabinete.telefone}`,
                    numeroGabinete: deputy.data.dados.ultimoStatus.gabinete.nome,
                    anexoGabinete: convertNumberToRoman(deputy.data.dados.ultimoStatus.gabinete.predio),
                    situacao: deputy.data.dados.ultimoStatus.situacao,
            }
            console.log(deputy)
            return output

        } catch (err: any) {

            return err

        }
    }
}