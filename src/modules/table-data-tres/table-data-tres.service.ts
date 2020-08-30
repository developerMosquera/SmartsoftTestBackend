import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TableDataTresRepository } from './table-data-tres.repository';

@Injectable()
export class TableDataTresService {

    constructor(
        @InjectRepository(TableDataTresRepository)
        private readonly _tableDataTresRepository: TableDataTresRepository) {}

    async saveTableDataTres(data: any) {
        await this._tableDataTresRepository.insert(data);
        return data;
    }

    async updateTableDataTres(id: number, data: any) {
        await this._tableDataTresRepository.update(id, data);
        return data;
    }

    async findAllTableDataTres() {
        return await this._tableDataTresRepository.find();
    }

    async deleteTableDataTres(id: number) {
        return await this._tableDataTresRepository.delete(id);
    }

}
