import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TableDataUnoService } from './table-data-uno.service';
import { TableDataUnoModule } from './table-data-uno.module';

@Controller('table-data-uno')
export class TableDataUnoController {

    constructor(private _tableDataUnoService: TableDataUnoService) { }

    @Get()
    getFindAllTableDataUno(): any {
        return this._tableDataUnoService.findAllTableDataUno();
    }

    @Post()
    addTableDataUno(@Body() tableDataUnoModule: TableDataUnoModule): any {
        return this._tableDataUnoService.saveTableDataUno(tableDataUnoModule);
    }

    @Put(':id')
    updateTableDataUno(@Body() tableDataUnoModule: TableDataUnoModule, @Param() params): any {
        return this._tableDataUnoService.updateTableDataUno(params.id, tableDataUnoModule);
    }

    @Delete(':id')
    deleteTableDataUno(@Param() params): any {
        return this._tableDataUnoService.deleteTableDataUno(params.id);
    }

}
