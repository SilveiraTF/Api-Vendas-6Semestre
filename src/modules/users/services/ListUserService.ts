import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repository/UserRepository";

class ListUserService{
    public async execute():Promise<User[]>{

        //recupera o repositório do produto
        let userReporitory = getCustomRepository(UserRepository)

        let users = await userReporitory.find()

        return users;
    }
}

export default ListUserService;