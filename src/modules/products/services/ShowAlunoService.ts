import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import AlunoRepository from "../typeorm/repositories/AlunoRepository";
import Aluno from "../typeorm/entities/Aluno";

interface IRequest{
    id: string
}
class ShowAlunoService{
    public async execute({id}: IRequest): Promise <Aluno> {
        let alunoRepository = getCustomRepository(AlunoRepository);
        let aluno = await alunoRepository.findOne(id);
        if(!aluno){
            throw new AppError('Aluno não foi encontrado')
        }
        return aluno;
    }
}
export default ShowAlunoService;