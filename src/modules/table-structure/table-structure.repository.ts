import { Repository, EntityRepository } from 'typeorm';
import { TableStructureEntity } from './table-structure.entity';

@EntityRepository(TableStructureEntity)
export class TableStructureRepository extends Repository<TableStructureEntity> {}