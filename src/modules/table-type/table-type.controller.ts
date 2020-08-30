import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TableTypeService } from './table-type.service';
import { TableTypeModel } from './table-type.interface';

@Controller('table-type')
export class TableTypeController {

    constructor(private _tableTypeService: TableTypeService) {}

    @Get()
    getFindAllTableType(): any {
        return this._tableTypeService.getFindAllTableType();
    }

    @Post()
    saveTableType(@Body() tableTypeModule: TableTypeModel): any {
        return this._tableTypeService.saveTableType(tableTypeModule);
    }

    @Get(':id')
    getFindOneTableType(@Param() params): any {
        return this._tableTypeService.getFindOneTableType(params.id);
    }

}
