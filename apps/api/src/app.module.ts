import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ResumeModule } from './resume/resume.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, ResumeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
