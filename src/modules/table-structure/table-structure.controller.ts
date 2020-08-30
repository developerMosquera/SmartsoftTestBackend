import { Controller, Get, Param } from '@nestjs/common';
import { TableStructureService } from './table-structure.service';

@Controller('table-structure')
export class TableStructureController {

    constructor(private _tableStructureService: TableStructureService) { }

    @Get(':id')
    getIdTableStructure(@Param() params): any {
        return this._tableStructureService.getIdTableStructure(params.id);
    }

}
