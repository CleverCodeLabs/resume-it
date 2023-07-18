import React, { Component } from "react";
import { Flex, ListItem, Text } from "@chakra-ui/react";

type EducationItemProps = {
  name: string;
  nameInstitution: string;
  year: number;
};

export default class EducationItem extends Component<EducationItemProps> {
  render() {
    const { name, nameInstitution, year } = this.props;
    return (
      <ListItem className="education" mb="2" ml="4">
        <Flex>
          <Text fontSize={13} color="black" fontWeight="bold">
            {name} -{" "}
          </Text>
          <Text fontSize={13} color="black">
            {nameInstitution}
          </Text>
          <Text fontSize={13} color="black">
            ({year})
          </Text>
        </Flex>
      </ListItem>
    );
  }
}
