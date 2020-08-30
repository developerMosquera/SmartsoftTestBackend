import { Test, TestingModule } from '@nestjs/testing';
import { TableDataDosService } from './table-data-dos.service';

describe('TableDataDosService', () => {
  let service: TableDataDosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TableDataDosService],
    }).compile();

    service = module.get<TableDataDosService>(TableDataDosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
