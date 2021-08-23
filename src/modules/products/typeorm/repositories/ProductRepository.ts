import { Repository } from "typeorm";
import Product from '../entities/Product'
export default class ProductRepositorie extends Repository<Product>{

    //exemplo de uma implementação particular, pois o resto já temos
    public async findByName(name: string): Promise<Product | undefined> {
        let product = this.findOne({ //procura o primeiro nome encontrado
            where: {
                name
            }
        })
        return product;
    }
}