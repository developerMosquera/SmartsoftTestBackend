import { Repository, EntityRepository } from 'typeorm';
import { TableDataUnoEntity } from './table-data-uno.entity';

@EntityRepository(TableDataUnoEntity)
export class TableDataUnoRepository extends Repository<TableDataUnoEntity> {}