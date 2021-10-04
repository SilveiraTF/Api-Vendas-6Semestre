import { getCustomRepository } from "typeorm";
import Aluno from "../typeorm/entities/Aluno";
import AlunoRepository from "../typeorm/repositories/AlunoRepository";

class ListAlunoService{
    public async execute():Promise<Aluno[]>{

        let alunoRepository = getCustomRepository(AlunoRepository)

        let alunos = await alunoRepository.find()

        return alunos;
    }
}

export default ListAlunoService;