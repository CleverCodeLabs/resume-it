import { Box,Wrap,WrapItem } from "@chakra-ui/react";
import React from "react";
import Identity from "../Identity";
import SkillsList from "../SkillsList";
import LanguagesList from "../LanguagesList";
import HobbiesList from "../HobbiesList";
import TimelineList from "../TimelineList";
import EducationsList from "../EducationsList";
import SoftSkillsList from "../SoftSkillsList";
import WorkExperienceList from "../WorkExperiencesList";
import { resumeJson } from "../../pages/resume-json";
import AboutMe from "../AboutMe";

export default function Preview() {
  const {
    name,
    headline,
    yearsOfExperience,
    skills,
    languages,
    hobbies,
    aboutMe,
    timeline,
    educations,
    softSkills,
    workExperiences,
  } = resumeJson;


  return (
    <Box maxW="md">
      <pre>
        <Identity
          name={name}
          headline={headline}
          yearsOfExperience={yearsOfExperience}
        />
        <SkillsList {...{ skills }} />
        <LanguagesList languages={languages} />
        <HobbiesList hobbies={hobbies} />
        <AboutMe aboutMe={aboutMe} />
        <TimelineList timeline={timeline} />
        <EducationsList educations={educations} />
        <SoftSkillsList softSkills={softSkills} />
        <WorkExperienceList workExperiences={workExperiences} />
      </pre>
    </Box>
  );
}
