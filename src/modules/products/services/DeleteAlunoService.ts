import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import AlunoRepository from "../typeorm/repositories/AlunoRepository"

interface IRequest {
    id : string
}

class DeleteAlunoService{
    public async execute({id}: IRequest):Promise<void>{
        let alunoRepository = getCustomRepository(AlunoRepository);
        let aluno = await alunoRepository.findOne(id)
        if (!aluno) {
            throw new AppError('Aluno não existe')
        }
        //produto existe
        await alunoRepository.remove(aluno)
    }
}
export default DeleteAlunoService;