import Identity from "../components/Identity";
import SkillsList from "../components/SkillsList";
import LanguagesList from "../components/LanguagesList";
import HobbiesList from "../components/HobbiesList";
import AboutMe from "../components/AboutMe";
import TimelineList from "../components/TimelineList";
import EducationsList from "../components/EducationsList";
import SoftSkillsList from "../components/SoftSkillsList";
import WorkExperienceList from "../components/WorkExperiencesList";
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
