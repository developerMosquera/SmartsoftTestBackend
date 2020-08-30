import { Test, TestingModule } from '@nestjs/testing';
import { TableDataUnoService } from './table-data-uno.service';

describe('TableDataUnoService', () => {
  let service: TableDataUnoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TableDataUnoService],
    }).compile();

    service = module.get<TableDataUnoService>(TableDataUnoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
