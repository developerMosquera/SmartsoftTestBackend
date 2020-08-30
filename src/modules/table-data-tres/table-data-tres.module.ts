import { Module } from '@nestjs/common';
import { TableDataTresController } from './table-data-tres.controller';
import { TableDataTresService } from './table-data-tres.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TableDataTresRepository } from './table-data-tres.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TableDataTresRepository
    ])
  ],
  controllers: [
    TableDataTresController
  ],
  providers: [
    TableDataTresService
  ]
})
export class TableDataTresModule {}
