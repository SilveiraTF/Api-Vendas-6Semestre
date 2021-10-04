import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm"
import AlunoRepository from "../typeorm/repositories/AlunoRepository"
import Aluno from "../typeorm/entities/Aluno"

interface IRequest {
    name: string,
    age: number,  
    cource: string,
    room: number
}
class CreateAlunoService{
    public async execute({name, age, cource, room}: IRequest): Promise <Aluno> {
        let alunoRepository = getCustomRepository(AlunoRepository)
        let alunoExists = await alunoRepository.findByName(name);

        if(alunoExists){
            throw new AppError(`Já existe aluno com esse nome`);
            console.log(`aluno já existe`);
        }
        const aluno = alunoRepository.create({
            name, age, cource, room
        })
        await alunoRepository.save(aluno);
        return aluno;
    }
}
export default CreateAlunoService;