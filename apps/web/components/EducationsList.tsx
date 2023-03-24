import React from "react";
import { Education } from "./resume";
import EducationItem from "./EducationItem";

type EducationsProps = {
  educations: Education[];
};

function EducationsList(props: EducationsProps) {
  const { educations } = props;
  const listItems = educations.map((education) => (
    <EducationItem
      key={education.name}
      name={education.name}
      nameInstitution={education.nameInstitution}
      year={education.year}
    />
  ));
  return <ul>{listItems}</ul>;
}

export default EducationsList;
