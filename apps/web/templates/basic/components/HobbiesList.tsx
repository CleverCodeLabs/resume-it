import { Wrap } from "@chakra-ui/react";
import React from "react";
import HobbyItem from "./HobbyItem";
import { Hobby } from "./resume";

type HobbiesProps = {
  hobbies: Hobby[];
};

function HobbiesList(props: HobbiesProps) {
  const { hobbies } = props;
  const listItems = hobbies.map((hobby) => (
    <HobbyItem key={hobby.name} name={hobby.name} />
  ));
  return <Wrap spacing={1}>{listItems}</Wrap>;
}

export default HobbiesList;
