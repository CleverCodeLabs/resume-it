import { Wrap } from "@chakra-ui/react";
import React from "react";
import HobbyItem from "./HobbyItem";

type HobbiesProps = {
  hobbies: string[];
};

function HobbiesList(props: HobbiesProps) {
  const { hobbies } = props;
  const listItems = hobbies.map((hobby) => (
    <HobbyItem key={hobby} name={hobby} />
  ));
  return <Wrap spacing={1}>{listItems}</Wrap>;
}

export default HobbiesList;
