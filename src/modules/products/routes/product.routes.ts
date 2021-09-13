import { Router } from "express";
import {celebrate, Joi, Segments} from "celebrate";
import ProductController from "../controlers/ProductController";

let productRouter = Router()
let productController = new ProductController()
productRouter.get('/', productController.index)
productRouter.get('/:id', 
celebrate({
    [Segments.PARAMS]:{
        id: Joi.string().uuid().required()
        }
    }),
    productController.show)
//validar que o post precisa de um produto
productRouter.post('/', 
    celebrate({
        [Segments.BODY]:{
            name: Joi.string().required(),
            price: Joi.number().precision(2).required(),
            quantity: Joi.number().required()
            }
        }),
        productController.create)
productRouter.put('/:id', 
celebrate({
    [Segments.PARAMS]:{
        id: Joi.string().uuid().required()
        },
        [Segments.BODY]:{
            name: Joi.string().required(),
            price: Joi.number().precision(2).required(),
            quantity: Joi.number().required()
            }
    }),
productController.update)
productRouter.delete('/', productController.delete)

export default productRouter;