import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TableDataUnoRepository } from './table-data-uno.repository';

@Injectable()
export class TableDataUnoService {

    constructor (
        @InjectRepository(TableDataUnoRepository)
        private readonly _TableDataUnoRepository: TableDataUnoRepository) { }

    async saveTableDataUno(data: any) {
        await this._TableDataUnoRepository.insert(data);
        return data;
    }

    async updateTableDataUno(id: number, data: any) {
        await this._TableDataUnoRepository.update(id, data);
        return data;
    }

    async findAllTableDataUno() {
        return await this._TableDataUnoRepository.find();
    }

    async deleteTableDataUno(id: number) {
        return await this._TableDataUnoRepository.delete(id);
    }

}
