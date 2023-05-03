import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ResumeModule } from './resume/resume.module';

@Module({
  imports: [DatabaseModule, ResumeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
