import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ResumeService {
  constructor(private prisma: PrismaService) {}

  //TODO change type on resumeInput params
  createResume(resume: any): any {
    return this.prisma.resume.create({
      data: { ...resume },
    });
  }
}
