import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SkillInput {
  @ApiProperty()
  name: string;

  @ApiProperty()
  isPrincipal: boolean;
}

export class LanguageInput {
  @ApiProperty()
  name: string;

  @ApiProperty()
  level: string;
}

export class EducationInput {
  @ApiProperty()
  name: string;

  @ApiProperty()
  nameInstitution: string;

  @ApiProperty()
  year: number;
}

export class SoftSkillInput {
  @ApiProperty()
  name: string;

  @ApiProperty()
  value: number;
}

export class WorkExperienceInput {
  @ApiProperty()
  companyName: string;

  @ApiProperty()
  headLine: string;

  @ApiProperty()
  duration: string;

  @ApiProperty()
  numberOfTeamMembers: number;

  @ApiProperty()
  projectTitle: string;

  @ApiProperty()
  tasks: string[];

  @ApiProperty()
  technicalEnvironment: TechnicalEnvironmentInput[];
}

export class TechnicalEnvironmentInput {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;
}

export class CreateResumeRequest {
  @ApiProperty()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty()
  @IsNotEmpty()
  headline: string;

  @ApiProperty()
  @IsNotEmpty()
  yearsOfExperience: number;

  @ApiProperty({ type: [SkillInput] })
  @IsNotEmpty()
  skills: SkillInput[];

  @ApiProperty({ type: [LanguageInput] })
  @IsNotEmpty()
  languages: LanguageInput[];

  @ApiProperty()
  @IsNotEmpty()
  hobbies: string[];

  @ApiProperty()
  @IsNotEmpty()
  aboutMe: string;

  @ApiProperty({ type: [EducationInput] })
  @IsNotEmpty()
  educations: EducationInput[];

  @ApiProperty({ type: [SoftSkillInput] })
  @IsNotEmpty()
  softSkills: SoftSkillInput[];

  @ApiProperty({ type: [WorkExperienceInput] })
  @IsNotEmpty()
  workExperiences: WorkExperienceInput[];
}

export class UpdateResumeRequest extends CreateResumeRequest {}

export class PatchResumeRequest extends PartialType(UpdateResumeRequest) {}
