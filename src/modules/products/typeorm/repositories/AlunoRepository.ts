import { Entity, EntityRepository, Repository } from "typeorm";
import Aluno from '../entities/Aluno'

@EntityRepository(Aluno) 
export default class AlunoRepositorie extends Repository<Aluno>{

    public async findByName(name: string): Promise<Aluno | undefined> {
        let aluno = this.findOne({
            where: {
                name
            }
        })
        return aluno;
    }
}