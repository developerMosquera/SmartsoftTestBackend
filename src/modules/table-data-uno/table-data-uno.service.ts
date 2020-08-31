import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TableDataUnoRepository } from './table-data-uno.repository';

@Injectable()
export class TableDataUnoService {

    constructor (
        @InjectRepository(TableDataUnoRepository)
        private readonly _tableDataUnoRepository: TableDataUnoRepository) { }

    async saveTableDataUno(data: any) {
        await this._tableDataUnoRepository.insert(data);
        return data;
    }

    async updateTableDataUno(id: number, data: any) {
        await this._tableDataUnoRepository.update(id, data);
        return data;
    }

    async findAllTableDataUno() {
        return await this._tableDataUnoRepository.find();
    }

    async deleteTableDataUno(id: number) {
        return await this._tableDataUnoRepository.delete(id);
    }

}
