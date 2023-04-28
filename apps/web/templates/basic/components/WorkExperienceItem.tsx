import React from "react";
import { TechnicalEnvironment } from "./resume";
import TechnicalEnvironmentList from "./TechnicalEnvironmentList";
import TaskList from "./TaskList";
// import TechnicalEnvironmentList from "./TechnicalEnvironmentList";

type WorkExperienceItemProps = {
  companyName: string;
  headLine: string;
  duration: string;
  numberOfTeamMembers: number;
  projectTitle: string;
  tasks: string[];
  technicalEnvironment: TechnicalEnvironment[];
};

function WorkExperiencesItem(props: WorkExperienceItemProps) {
  const {
    companyName,
    numberOfTeamMembers,
    headLine,
    duration,
    tasks,
    projectTitle,
    technicalEnvironment,
  } = props;
  return (
    <div className="workExperience">
      <p>{companyName}</p>
      <p>{headLine}</p>
      <p>{duration}</p>
      <p>{numberOfTeamMembers}</p>
      <p>{projectTitle}</p>
      <TaskList tasks={tasks} />
      <TechnicalEnvironmentList technicalEnvironment={technicalEnvironment} />
    </div>
  );
}

export default WorkExperiencesItem;
// type TechnicalEnvironmentListProps = {
//   technicalEnvironment: TechnicalEnvironment[];
// };
//
// function TechnicalEnvironmentList(props: TechnicalEnvironmentListProps) {
//   const { technicalEnvironment } = props;
//   const listItems = technicalEnvironment.map((technicalEnvironment) => (
//     <TechnicalEnvironmentList
//       key={technicalEnvironment.name}
//       name={technicalEnvironment.name}
//       description={technicalEnvironment.description}
//     />
//   ));
//   return <ul>{listItems}</ul>;
// }
//
// export default TechnicalEnvironmentList;
