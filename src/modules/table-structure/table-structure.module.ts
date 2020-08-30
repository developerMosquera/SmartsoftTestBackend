import { Module } from '@nestjs/common';
import { TableStructureController } from './table-structure.controller';
import { TableStructureService } from './table-structure.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TableStructureRepository } from './table-structure.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TableStructureRepository
    ])
  ],
  controllers: [
    TableStructureController
  ],
  providers: [
    TableStructureService
  ]
})
export class TableStructureModule {}
