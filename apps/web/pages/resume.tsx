import Identity from "../templates/basic/components/Identity";
import SkillsList from "../templates/basic/components/SkillsList";
import LanguagesList from "../templates/basic/components/LanguagesList";
import HobbiesList from "../templates/basic/components/HobbiesList";
import AboutMe from "../templates/basic/components/AboutMe";
import TimelineList from "../templates/basic/components/TimelineList";
import EducationsList from "../templates/basic/components/EducationsList";
import SoftSkillsList from "../templates/basic/components/SoftSkillsList";
import WorkExperienceList from "../templates/basic/components/WorkExperiencesList";
import { resumeJson } from "./resume-json";

export default function Resume() {
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
    <>
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
    </>
  );
}
