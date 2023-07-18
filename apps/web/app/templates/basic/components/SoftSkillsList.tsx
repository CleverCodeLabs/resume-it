import React from "react";
import { SoftSkill } from "./resume";
import SoftSkillItem from "./SoftSkillItem";

type SoftSkillsProps = {
  softSkills: SoftSkill[];
};

function SoftSkillsList(props: SoftSkillsProps) {
  const { softSkills } = props;
  const listItems = softSkills.map((softSkill) => (
    <SoftSkillItem
      key={softSkill.nameProfile}
      nameProfile={softSkill.nameProfile}
      value={softSkill.value}
    />
  ));
  return <ul>{listItems}</ul>;
}

export default SoftSkillsList;
