import { Test, TestingModule } from '@nestjs/testing';
import { TableDataTresService } from './table-data-tres.service';

describe('TableDataTresService', () => {
  let service: TableDataTresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TableDataTresService],
    }).compile();

    service = module.get<TableDataTresService>(TableDataTresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
