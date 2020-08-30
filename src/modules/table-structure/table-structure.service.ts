import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TableStructureRepository } from './table-structure.repository';

@Injectable()
export class TableStructureService {

    constructor(
        @InjectRepository(TableStructureRepository)
        private readonly _tableStructureRepository: TableStructureRepository) { }

    async getIdTableStructure(idTable: number) {
        return await this._tableStructureRepository.find({ where: { tableTypeId: idTable } });
    }

}
