import { Module } from '@nestjs/common';
import { TableTypeController } from './table-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TableTypeRepository } from './table-type.repository';
import { TableTypeService } from './table-type.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            TableTypeRepository
        ])
    ],
    controllers: [
        TableTypeController
    ],
    providers: [
        TableTypeService
    ]
})
export class TableTypeModule {}
