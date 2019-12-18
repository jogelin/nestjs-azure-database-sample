import { Module } from '@nestjs/common';
import { AzureTableStorageModule } from '@nestjs/azure-database';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { Cat } from './cat.entity';

@Module({
  imports: [
    AzureTableStorageModule.forFeature(Cat, {
      table: 'Cat',
      createTableIfNotExists: true,
    }),
  ],
  providers: [CatService],
  controllers: [CatController],
})
export class CatModule {}
