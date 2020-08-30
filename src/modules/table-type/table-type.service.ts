import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TableTypeRepository } from './table-type.repository';

@Injectable()
export class TableTypeService {

    constructor(
        @InjectRepository(TableTypeRepository)
        private readonly _tableTypeRepository: TableTypeRepository
    ) {}

    async saveTableType(data: any) {
        await this._tableTypeRepository.insert(data);
        return data;
    }

    async getFindAllTableType() {
        return await this._tableTypeRepository.find(); 
    }

    async getFindOneTableType(id: number) {
        return await this._tableTypeRepository.findOne({ id: id });
    }
}
