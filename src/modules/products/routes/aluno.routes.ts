import { Router } from "express";
import {celebrate, Joi, Segments} from "celebrate";
import AlunoController from "../controlers/AlunoController";

let alunoRouter = Router()
let alunoController = new AlunoController()
alunoRouter.get('/', alunoController.index)
alunoRouter.get('/:id', 
celebrate({
    [Segments.PARAMS]:{
        id: Joi.string().uuid().required()
        }
    }),
    alunoController.show)
    alunoRouter.post('/', 
    celebrate({
        [Segments.BODY]:{
            name: Joi.string().required(),
            age: Joi.number().required(),
            cource: Joi.string().required(),
            room: Joi.number().required()
            }
        }),
        alunoController.create)
        alunoRouter.put('/:id', 
celebrate({
    [Segments.PARAMS]:{
        id: Joi.string().uuid().required()
        },
        [Segments.BODY]:{
            name: Joi.string().required(),
            age: Joi.number().required(),
            cource: Joi.string().required(),
            room: Joi.number().required()
            }
    }),
    alunoController.update)
    alunoRouter.delete('/', alunoController.delete)

export default alunoRouter;