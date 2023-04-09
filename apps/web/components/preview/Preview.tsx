import { Box, Container, Divider } from "@chakra-ui/react";
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
import { useInView } from "react-intersection-observer";

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

  const { ref, inView } = useInView();

  console.log("inView ? ", inView);

  return (
    <Box padding="4px" maxH="full">
      <pre>
        <Container ref={ref} h="5px" w="5px">
        </Container>
        <Container bg="red.400" h="calc(100vh)">
          <Identity
            name={name}
            headline={headline}
            yearsOfExperience={yearsOfExperience}
          />

          <Identity
            name={name}
            headline={headline}
            yearsOfExperience={yearsOfExperience}
          />
          <Identity
            name={name}
            headline={headline}
            yearsOfExperience={yearsOfExperience}
          />
          <Identity
            name={name}
            headline={headline}
            yearsOfExperience={yearsOfExperience}
          />
          <Identity
            name={name}
            headline={headline}
            yearsOfExperience={yearsOfExperience}
          />
          <Identity
            name={name}
            headline={headline}
            yearsOfExperience={yearsOfExperience}
          />
          <Identity
            name={name}
            headline={headline}
            yearsOfExperience={yearsOfExperience}
          />
          <Identity
            name={name}
            headline={headline}
            yearsOfExperience={yearsOfExperience}
          />
          <Identity
            name={name}
            headline={headline}
            yearsOfExperience={yearsOfExperience}
          />
          <Identity
            name={name}
            headline={headline}
            yearsOfExperience={yearsOfExperience}
          />
          <Identity
            name={name}
            headline={headline}
            yearsOfExperience={yearsOfExperience}
          />
          <Identity
            name={name}
            headline={headline}
            yearsOfExperience={yearsOfExperience}
          />
          <Identity
            name={name}
            headline={headline}
            yearsOfExperience={yearsOfExperience}
          />
        </Container>
        {!inView ? (
          <Container bg="yellow.400" h="calc(100vh - 60px)" marginTop="10px">
            <TimelineList timeline={timeline} />
            <EducationsList educations={educations} />
            <SoftSkillsList softSkills={softSkills} />
          </Container>
        ) : null}
      </pre>
    </Box>
  );
}
