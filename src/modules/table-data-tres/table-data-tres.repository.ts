import { Repository, EntityRepository } from 'typeorm';
import { TableDataTresEntity } from './table-data-tres.entity';

@EntityRepository(TableDataTresEntity)
export class TableDataTresRepository extends Repository<TableDataTresEntity> {}