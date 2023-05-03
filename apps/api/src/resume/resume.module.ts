import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ResumeController],
  providers: [ResumeService],
})
export class ResumeModule {}
