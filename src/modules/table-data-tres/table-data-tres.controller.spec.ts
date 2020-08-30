import { Test, TestingModule } from '@nestjs/testing';
import { TableDataTresController } from './table-data-tres.controller';

describe('TableDataTresController', () => {
  let controller: TableDataTresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TableDataTresController],
    }).compile();

    controller = module.get<TableDataTresController>(TableDataTresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
