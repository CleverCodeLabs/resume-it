import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import {
  CreateResumeRequest,
  PatchResumeRequest,
  UpdateResumeRequest,
} from './resume';
import { ResumeService } from './resume.service';

@ApiTags('resumes')
@Controller({ path: 'resumes', version: 'v1' })
export class ResumeController {
  constructor(private resumeService: ResumeService) {}

  //TODO change type on resumeInput params
  @Post()
  @ApiCreatedResponse({
    description: 'The resume has been successfully created.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  @ApiOperation({ description: 'Create resume.' })
  async createResume(
    @Body() createResumeRequest: CreateResumeRequest,
  ): Promise<any> {
    //TODO add Mapping from CreateResumeInput to Resume (domain object managed by ResumeService)
    return this.resumeService.createResume(createResumeRequest);
  }

  @Put(':id')
  @ApiOkResponse({
    description: 'Resume updated successfully.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiOperation({ description: 'Update a resume by id.' })
  async updateResume(
    @Param('id') id: string,
    @Body() updateResumeRequest: UpdateResumeRequest,
  ) {
    return this.resumeService.updateResume(id, updateResumeRequest);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'Resume updated successfully.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiOperation({ description: 'Update a resume by id.' })
  async partialUpdateResume(
    @Param('id') id: string,
    @Body() patchResumeRequest: PatchResumeRequest,
  ) {
    return this.resumeService.updateResume(id, patchResumeRequest);
  }

  @Get()
  @ApiOkResponse({
    description: 'Resumes retrieved successfully.',
  })
  @ApiNoContentResponse({ description: 'No content.' })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiOperation({ description: 'Get all resumes.' })
  async resumes(@Res({ passthrough: true }) res: Response) {
    const resumes = await this.resumeService.resumes();
    if (!resumes.length) {
      res.status(HttpStatus.NO_CONTENT);
      return [];
    }

    return resumes;
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Resume retrieved successfully.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiOperation({ description: 'Get a resume by id.' })
  async resume(@Param('id') id: string) {
    return this.resumeService.resume(id);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Resume deleted successfully.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiOperation({ description: 'Delete a resume by id.' })
  async deleteResume(@Param('id') id: string) {
    return this.resumeService.deleteResume(id);
  }
}
