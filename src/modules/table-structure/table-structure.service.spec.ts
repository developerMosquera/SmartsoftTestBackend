import { Test, TestingModule } from '@nestjs/testing';
import { TableStructureService } from './table-structure.service';

describe('TableStructureService', () => {
  let service: TableStructureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TableStructureService],
    }).compile();

    service = module.get<TableStructureService>(TableStructureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
