import { Repository, EntityRepository } from 'typeorm';
import { TableDataDosEntity } from './table-data-dos.entity';

@EntityRepository(TableDataDosEntity)
export class TableDataDosRepository extends Repository<TableDataDosEntity> {}