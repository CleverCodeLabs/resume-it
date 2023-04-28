import React from "react";
import { Education } from "./resume";
import EducationItem from "./EducationItem";
import { UnorderedList } from "@chakra-ui/react";

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
  return (
    <UnorderedList listStyleType="none" ml="0" mt="2">
      {listItems}
    </UnorderedList>
  );
}

export default EducationsList;
