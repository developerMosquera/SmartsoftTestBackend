import { Test, TestingModule } from '@nestjs/testing';
import { TableDataDosController } from './table-data-dos.controller';

describe('TableDataDosController', () => {
  let controller: TableDataDosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TableDataDosController],
    }).compile();

    controller = module.get<TableDataDosController>(TableDataDosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
