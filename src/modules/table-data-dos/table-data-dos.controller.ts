import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TableDataDosService } from './table-data-dos.service';
import { TableDataDosModule } from './table-data-dos.module';

@Controller('table-data-dos')
export class TableDataDosController {

    constructor(private _tableDataDosService: TableDataDosService) {}

    @Get()
    getFindAllTableDataDos(): any {
        return this._tableDataDosService.findAllTableDataDos();
    }

    @Post()
    addTableDataDos(@Body() tableDataDosModule: TableDataDosModule): any {
        return this._tableDataDosService.saveTableDataDos(tableDataDosModule);
    }

    @Put(':id')
    updateTableDataDos(@Body() tableDataDosModule: TableDataDosModule, @Param() params): any {
        return this._tableDataDosService.updateTableDataDos(params.id, tableDataDosModule);
    }

    @Delete(':id')
    deleteTableDataDos(@Param() params): any {
        return this._tableDataDosService.deleteTableDataDos(params.id)
    }

}
