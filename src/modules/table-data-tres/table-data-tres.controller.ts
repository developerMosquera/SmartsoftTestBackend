import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TableDataTresService } from './table-data-tres.service';
import { TableDataTresModule } from './table-data-tres.module';

@Controller('table-data-tres')
export class TableDataTresController {

    constructor(private _tableDataTresService: TableDataTresService) {}

    @Get()
    getFindAllTableDataTres(): any {
        return this._tableDataTresService.findAllTableDataTres();
    }

    @Post()
    addTableDataTres(@Body() tableDataTresModule: TableDataTresModule): any {
        return this._tableDataTresService.saveTableDataTres(tableDataTresModule);
    }

    @Put(':id')
    updateTableDataTres(@Body() tableDataTresModule: TableDataTresModule, @Param() params): any {
        return this._tableDataTresService.updateTableDataTres(params.id, tableDataTresModule);
    }

    @Delete(':id')
    deleteTableDataTres(@Param() params): any {
        return this._tableDataTresService.deleteTableDataTres(params.id)
    }

}
