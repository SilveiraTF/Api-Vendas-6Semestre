import { getCustomRepository } from "typeorm"
import ProductRepository from "../typeorm/repositories/ProductRepository"

//criar um tipo de dado ( I -> é porque é do tipo interface)
interface IRequest {
    name: string,
    price: number,
    quantity: number
}
class CreateProductService{
    //cria a função execute (toda vez que inserir algo no BD)
    public async execute({name, price, quantity}: IRequest): Promise <Product> {
        //recupera o repositório do produto
        let productRepository = getCustomRepository(ProductRepository)
        let productExists = await productRepository.findByName(name);

        if(productExists){
            throw
            console.log(`Produto já existe`);
        }
        //cria um novo produto que não existe
        const product = productRepository.create({
            name, price, quantity
        })
        //salva o produto no banco de dados
        await productRepository.save(product);
    }
}