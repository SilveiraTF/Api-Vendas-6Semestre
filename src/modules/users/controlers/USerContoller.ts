import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import ListUserService from "../services/ListUserService";
import User from "../typeorm/entities/User";
export default class UserController{

    public async create(request: Request, response: Response): Promise<Response>{
        let{name, email, password} = request.body;
        let createUsers = new CreateUserService()
        let user = await createUsers.execute({
            name, email, password
        })
        return response.json(user);
    }


    public async index(request: Request, response: Response): Promise<Response>{

        let listUsers = new ListUserService()
        let users = await listUsers.execute();
        return response.json(users)
    }
}