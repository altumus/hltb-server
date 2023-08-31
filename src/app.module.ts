import { Module } from '@nestjs/common';
import { RawgModule } from './rawg/rawg.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot(), RawgModule],
})
export class AppModule {}
