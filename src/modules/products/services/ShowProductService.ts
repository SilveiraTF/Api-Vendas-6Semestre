import AppError from "shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import ProductRepository from "../typeorm/repositories/ProductRepository";
import Product from "../typeorm/entities/Product";

interface IRequest{
    id: string
}
class ShowProductService{
    public async execute({id}: IRequest): Promise <Product> {
        let productRepository = getCustomRepository(ProductRepository);
        let product = await productRepository.findOne(id);
        //caso o produto não exista
        if(!product){
            throw new AppError('Produto não foi encontrado')
        }
        //produto exista
        return product;
    }
}
export default ShowProductService;