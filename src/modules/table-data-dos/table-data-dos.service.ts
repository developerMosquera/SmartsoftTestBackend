import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TableDataDosRepository } from './table-data-dos.repository';

@Injectable()
export class TableDataDosService {

    constructor(
        @InjectRepository(TableDataDosRepository)
        private readonly _tableDataDosRepository: TableDataDosRepository) { }

    async saveTableDataDos(data: any) {
        await this._tableDataDosRepository.insert(data);
        return data;
    }

    async updateTableDataDos(id: number, data: any) {
        await this._tableDataDosRepository.update(id, data);
        return data;
    }

    async findAllTableDataDos() {
        return await this._tableDataDosRepository.find();
    }

    async deleteTableDataDos(id: number) {
        return await this._tableDataDosRepository.delete(id);
    }

}
