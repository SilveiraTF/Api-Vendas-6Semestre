import { Request, Response } from "express";
import { DeleteDateColumn, UpdateDateColumn } from "typeorm";
import CreateAlunoService from "../services/CreateAlunoService";
import DeleteAlunoService from "../services/DeleteAlunoService";
import ListAlunoService from "../services/ListAlunoService";
import ShowAlunoService from "../services/ShowAlunoService";
import UpdateAlunoService from "../services/UpdateAlunoService";
import Aluno from "../typeorm/entities/Aluno";
export default class AlunoController{
    public async create(request: Request, response: Response): Promise<Response>{
        let{name, age, cource, room} = request.body;
        let createAluno = new CreateAlunoService()
        let aluno = await createAluno.execute({
            name, age, cource, room
        })
        return response.json(aluno);
    }
    public async delete(request: Request, response: Response): Promise <Response> {
        let {id} = request.params
        let deleteAluno = new DeleteAlunoService()
        await deleteAluno.execute({id});

        return response.json([])
    }

    public async index(request: Request, response: Response): Promise<Response>{
        let listAluno = new ListAlunoService()
        let aluno = await listAluno.execute();
        return response.json(aluno)
    }

    public async show(request: Request, response: Response): Promise<Response>{
        let {id} = request.params
        let showAluno = new ShowAlunoService()
        let aluno = await showAluno.execute({id});

        return response.json(aluno);
    }

    public async update(request: Request, response: Response): Promise<Response>{
        let {id}=request.params
        let {name, age, cource, room} = request.body
        let updateAluno = new UpdateAlunoService()
        let aluno = await updateAluno.execute({id, name, age, cource, room}); 

        return response.json(aluno);
    }
}