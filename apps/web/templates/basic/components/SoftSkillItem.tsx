import React, { Component } from "react";
import { ListItem, Text } from "@chakra-ui/react";

type SoftSkillProps = {
  nameProfile: string;
  value: number;
};

export default class SoftSkillItem extends Component<SoftSkillProps> {
  render() {
    const { nameProfile, value } = this.props;
    return (
      <ListItem className="softSkill">
        <Text>{nameProfile}</Text>
        <Text>{value}</Text>
      </ListItem>
    );
  }
}
