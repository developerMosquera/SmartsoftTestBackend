import { Test, TestingModule } from '@nestjs/testing';
import { TableTypeService } from './table-type.service';

describe('TableTypeService', () => {
  let service: TableTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TableTypeService],
    }).compile();

    service = module.get<TableTypeService>(TableTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
