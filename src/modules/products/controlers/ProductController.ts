import { Request, Response } from "express";
import { DeleteDateColumn, UpdateDateColumn } from "typeorm";
import CreateProductService from "../services/CreateProductService";
import DeleteProductService from "../services/DeleteProductService";
import ListProductsService from "../services/ListProductsService";
import ShowProductService from "../services/ShowProductService";
import UpdateProductService from "../services/UpdateProductService";
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

    //consulta todos os produtos
    public async index(request: Request, response: Response): Promise<Response>{
        //cria objeto
        let listProducts = new ListProductsService()
        //chama o método para consultar todos os produtos
        let products = await listProducts.execute();
        return response.json(products)
    }

    //consulta todos os produtos
    public async show(request: Request, response: Response): Promise<Response>{
        //recupera o id do produto
        let {id} = request.params
        //cria objeto
        let showProduct = new ShowProductService()
        let product = await showProduct.execute({id});

        return response.json(product);
    }

    //atualiza produtos
    public async update(request: Request, response: Response): Promise<Response>{
        //recupera o id do produto
        let {id}=request.params
        let {name, quantity, price} = request.body
        //cria objeto
        let updateProduct = new UpdateProductService()
        let product = await updateProduct.execute({id, name, price, quantity}); 

        return response.json(product);
    }
}