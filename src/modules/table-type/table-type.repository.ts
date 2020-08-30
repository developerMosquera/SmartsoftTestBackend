import { Repository, EntityRepository } from 'typeorm';
import { TableTypeEntity } from './table-type.entity';

@EntityRepository(TableTypeEntity)
export class TableTypeRepository extends Repository<TableTypeEntity> {}