import { Test, TestingModule } from '@nestjs/testing';
import { TableDataUnoController } from './table-data-uno.controller';

describe('TableDataUnoController', () => {
  let controller: TableDataUnoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TableDataUnoController],
    }).compile();

    controller = module.get<TableDataUnoController>(TableDataUnoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
