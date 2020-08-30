import { Module } from '@nestjs/common';
import { TableDataDosController } from './table-data-dos.controller';
import { TableDataDosService } from './table-data-dos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TableDataDosRepository } from './table-data-dos.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TableDataDosRepository
    ])
  ],
  controllers: [
    TableDataDosController
  ],
  providers: [
    TableDataDosService
  ]
})
export class TableDataDosModule {}
