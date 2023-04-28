export interface Resume {
  name: string;
  headline: string;
  yearsOfExperience: number;
  skills: Skill[];
  languages: Language[];
  hobbies: Hobby[];
  aboutMe: string;
  timeline: TimeLineEvent[];
  educations: Education[];
  softSkills: SoftSkill[];
  workExperiences: WorkExperience[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface Language {
  name: string;
  level: string;
}

export interface Hobby {
  name: string;
}

export interface TimeLineEvent {
  year: number;
  headLine: string;
  companyName: string;
}

export interface Education {
  name: string;
  nameInstitution: string;
  year: number;
}

export interface SoftSkill {
  nameProfile: string;
  value: number;
}

export interface WorkExperience {
  companyName: string;
  headLine: string;
  duration: string;
  numberOfTeamMembers: number;
  projectTitle: string;
  tasks: string[];
  technicalEnvironment: TechnicalEnvironment[];
}

export interface TechnicalEnvironment {
  name: string;
  description: string[];
}
