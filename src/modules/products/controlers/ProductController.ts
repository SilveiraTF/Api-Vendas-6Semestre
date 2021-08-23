import { Request, Response } from "express";
import { DeleteDateColumn } from "typeorm";
import CreateProductService from "../services/CreateProductService";
import DeleteProductService from "../services/DeleteProductService";
import Product from "../typeorm/entities/Product";
export default class ProductController{
    //cria o produto
    public async create(request: Request, response: Response): Promise<Response>{
        let{name, price, quantity} = request.body;
        let createProduct = new CreateProductService()
        let product = createProduct.execute({
            name, price, quantity
        })
        return response.json(product);
    }
    //remove o produto
    public async delete(request: Request, response: Response): Promise <Response> {
        //recupera o id do produto
        let {id} = request.params
        //cria objeto
        let deleteProduct = new DeleteProductService()
        await deleteProduct.execute({id}); //efetivamente remove

        return response.json([])
    }
}