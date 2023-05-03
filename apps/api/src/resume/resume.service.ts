import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ResumeService {
  constructor(private prisma: PrismaService) {}

  //TODO change type on resumeInput params
  async createResume(resume: Prisma.ResumeCreateInput): Promise<any> {
    return this.prisma.resume.create({
      data: { ...resume },
    });
  }

  async updateResume(id: string, resume: Prisma.ResumeUpdateInput) {
    return this.prisma.resume.update({ data: { ...resume }, where: { id } });
  }

  async resumes() {
    return this.prisma.resume.findMany();
  }

  async resume(id: string) {
    return this.prisma.resume.findUniqueOrThrow({ where: { id } });
  }

  async deleteResume(id: string) {
    return this.prisma.resume.delete({ where: { id } });
  }
}
