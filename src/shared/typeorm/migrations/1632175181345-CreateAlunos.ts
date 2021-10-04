import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAlunos1632175181345 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'alunos',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'age',
                    type: 'int',
                    precision: 10,
                    scale: 2
                },
                {
                    name: 'cource',
                    type: 'varchar'
                },
                {
                    name: 'room',
                    type: 'int',
                    precision: 10,
                    scale: 2
                },
                {
                    name: 'created_at',
                    type: 'timestamp with time zone',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp with time zone',
                    default: 'now()'
                }
            ]
        }))
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
