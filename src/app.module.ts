import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { AzureTableStorageModule } from '@nestjs/azure-database/dist';

@Module({
  imports: [
    AzureTableStorageModule.forRoot({
      connectionString: 'myConnectionString',
    }),
    CatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
