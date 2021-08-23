// vamos criar a interface de coleta de dados
interface IRequest {
    id : string
}

// criar classe
class DeleteProductService{
    //cria o método execute
    public async execute({id}: IRequest):Promise<void>
}