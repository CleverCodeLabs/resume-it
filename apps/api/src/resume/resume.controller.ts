import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateResumeInput } from './createResumeInput';
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
    @Body() createResumeInput: CreateResumeInput,
  ): Promise<any> {
    //TODO add Mapping from CreateResumeInput to Resume (domain object managed by ResumeService)
    return this.resumeService.createResume(createResumeInput);
  }
}
