import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm"
import ProductRepository from "../typeorm/repositories/ProductRepository"
import Product from "../typeorm/entities/Product"

//criar um tipo de dado ( I -> é porque é do tipo interface)
interface IRequest {
    id: string,
    name: string,
    price: number,  
    quantity: number
}
class UpdateProductService{
    public async execute({id, name, price, quantity}: IRequest): Promise <Product> {
        let productRepository = getCustomRepository(ProductRepository);
        let product = await productRepository.findOne(id);
        //verifica se o produto não existe
        if(!product){
            throw new AppError('Produto não existe')
        }
        //verifica se já tem produto com aquele nome
        let productExists = await productRepository.findByName(name)
        if(productExists){
            throw new AppError('Já existe produto com esse nome')
        }
        //pode atualizar
        product.name = name
        product.quantity = quantity
        product.price = price

        await productRepository.save(product) //atualiza pois id já existe

        return product
    }
}
export default UpdateProductService;