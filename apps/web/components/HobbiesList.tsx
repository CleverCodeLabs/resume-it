import React from "react";
import { Hobby } from "./resume";
import HobbyItem from "./HobbyItem";

type HobbiesProps = {
  hobbies: Hobby[];
};

function HobbiesList(props: HobbiesProps) {
  const { hobbies } = props;
  const listItems = hobbies.map((hobby) => (
    <HobbyItem key={hobby.name} name={hobby.name} />
  ));
  return <ul>{listItems}</ul>;
}

export default HobbiesList;
