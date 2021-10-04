import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm"
import AlunoRepository from "../typeorm/repositories/AlunoRepository"
import Aluno from "../typeorm/entities/Aluno"

interface IRequest {
    id: string,
    name: string,
    age: number,  
    cource: string,
    room: number
}
class UpdateAlunoService{
    public async execute({id, name, age, cource, room}: IRequest): Promise <Aluno> {
        let alunoRepository = getCustomRepository(AlunoRepository);
        let aluno = await alunoRepository.findOne(id);
        if(!aluno){
            throw new AppError('Aluno não existe')
        }
        let alunoExists = await alunoRepository.findByName(name)
        if(alunoExists){
            throw new AppError('Já existe Aluno com esse nome')
        }
        //pode atualizar
        aluno.name = name
        aluno.age = age
        aluno.cource = cource
        aluno.room = room

        await alunoRepository.save(aluno)

        return aluno
    }
}
export default UpdateAlunoService;