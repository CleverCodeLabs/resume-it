import React from "react";
import { WorkExperience } from "./resume";
import WorkExperiencesItem from "./WorkExperienceItem";

type WorkExperiencesProps = {
  workExperiences: WorkExperience[];
};

function WorkExperiencesList(props: WorkExperiencesProps) {
  const { workExperiences } = props;
  const listItems = workExperiences.map((workExperience) => (
    <WorkExperiencesItem
      key={workExperience.companyName}
      companyName={workExperience.companyName}
      headLine={workExperience.headLine}
      duration={workExperience.duration}
      numberOfTeamMembers={workExperience.numberOfTeamMembers}
      projectTitle={workExperience.projectTitle}
      tasks={workExperience.tasks}
      technicalEnvironment={workExperience.technicalEnvironment}
    />
  ));
  return <ul>{listItems}</ul>;
}

export default WorkExperiencesList;
