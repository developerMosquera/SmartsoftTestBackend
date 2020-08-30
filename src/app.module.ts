import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { TableTypeModule } from './modules/table-type/table-type.module';
import { TableStructureModule } from './modules/table-structure/table-structure.module';
import { TableDataUnoModule } from './modules/table-data-uno/table-data-uno.module';
import { TableDataDosModule } from './modules/table-data-dos/table-data-dos.module';
import { TableDataTresModule } from './modules/table-data-tres/table-data-tres.module';

@Module({
    imports: [
        DatabaseModule,
        TableTypeModule,
        TableStructureModule,
        TableDataUnoModule,
        TableDataDosModule,
        TableDataTresModule,
    ],
    controllers: [
        AppController
    ],
    providers: [
        AppService
    ],
})
export class AppModule {}
