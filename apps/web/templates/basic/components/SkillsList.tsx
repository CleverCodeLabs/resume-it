import { Wrap } from "@chakra-ui/react";
import React, { FC } from "react";
import { Skill } from "./resume";
import SkillItem from "./SkillItem";

type SkillsProps = {
  skills: Skill[];
  showFavoritesOnly?: boolean;
};

const SkillsList: FC<SkillsProps> = ({ skills, showFavoritesOnly = true }) => {
  const listItems = skills
    .filter((skill) => skill.favorites)
    .map((skill) => <SkillItem key={skill.name} name={skill.name} />);
  return <Wrap spacing={1}>{listItems}</Wrap>;
};

export default SkillsList;
