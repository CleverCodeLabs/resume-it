import { Wrap } from "@chakra-ui/react";
import React from "react";
import { Skill } from "./resume";
import SkillItem from "./SkillItem";

type SkillsProps = {
  skills: Skill[];
};

function SkillsList(props: SkillsProps) {
  const { skills } = props;
  const listItems = skills.map((skill) => (
    <SkillItem key={skill.name} name={skill.name} level={skill.level} />
  ));
  return <Wrap spacing={1}>{listItems}</Wrap>;
}

export default SkillsList;
