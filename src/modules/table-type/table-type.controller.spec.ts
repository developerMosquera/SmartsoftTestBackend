import { Test, TestingModule } from '@nestjs/testing';
import { TableTypeController } from './table-type.controller';

describe('TableTypeController', () => {
  let controller: TableTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TableTypeController],
    }).compile();

    controller = module.get<TableTypeController>(TableTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
