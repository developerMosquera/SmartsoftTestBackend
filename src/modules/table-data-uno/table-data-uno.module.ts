import { Module } from '@nestjs/common';
import { TableDataUnoController } from './table-data-uno.controller';
import { TableDataUnoService } from './table-data-uno.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TableDataUnoRepository } from './table-data-uno.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TableDataUnoRepository
    ])
  ],
  controllers: [
    TableDataUnoController
  ],
  providers: [
    TableDataUnoService
  ]
})
export class TableDataUnoModule {}
