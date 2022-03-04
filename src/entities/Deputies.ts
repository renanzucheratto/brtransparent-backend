export class Deputy {

    public nome: string
    public email: string
    public cpf: string
    public dataNascimento: string
    public dataFalecimento: string | null
    public ufNascimento: string
    public municipioNascimento: string
    public escolaridade: string
    public sexo: string
    public urlFoto: string
    public redesSociais: string[]
    public siglaPartido: string
    public uriPartido: string
    public siglaUf: string
    public idLegislatura: string
    public dataInicioLegislatura: string
    public nomeEleitoral: string
    public telefone: string
    public numeroGabinete: string
    public anexoGabinete: string
    public situacao: string

    constructor(props: Deputy){
        Object.assign(this, props)
        //ou \/a
        
        // this.nome = props.nome
        // this.email = props.email
        // this.cpf = props.cpf
        // this.dataNascimento = props.dataNascimento
        // this.dataFalecimento = props.dataFalecimento
        // this.ufNascimento = props.ufNascimento
        // this.municipioNascimento = props.municipioNascimento
        // this.escolaridade = props.escolaridade
        // this.sexo = props.sexo
        // this.urlFoto = props.urlFoto
        // this.redesSociais = props.redesSociais
        // this.uriPartido = props.uriPartido
        // this.siglaUf = props.siglaUf
        // this.idLegislatura = props.idLegislatura
        // this.dataInicioLegislatura = props.dataInicioLegislatura
        // this.nomeEleitoral = props.nomeEleitoral
        // this.telefone = props.telefone
        // this.anexoGabinete = props.anexoGabinete
        // this.numeroGabinete = props.numeroGabinete
        // this.situacao = props.situacao
    }
}