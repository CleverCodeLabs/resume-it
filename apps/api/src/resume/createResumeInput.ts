import { ApiProperty } from '@nestjs/swagger';

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

export class CreateResumeInput {
  @ApiProperty()
  fullName: string;

  @ApiProperty()
  headline: string;

  @ApiProperty()
  yearsOfExperience: number;

  @ApiProperty({ type: [SkillInput] })
  skills: SkillInput[];

  @ApiProperty({ type: [LanguageInput] })
  languages: LanguageInput[];

  @ApiProperty()
  hobbies: string[];

  @ApiProperty()
  aboutMe: string;

  @ApiProperty({ type: [EducationInput] })
  educations: EducationInput[];

  @ApiProperty({ type: [SoftSkillInput] })
  softSkills: SoftSkillInput[];

  @ApiProperty({ type: [WorkExperienceInput] })
  workExperiences: WorkExperienceInput[];
}
