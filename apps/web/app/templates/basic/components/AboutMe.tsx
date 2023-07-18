import { Text } from "@chakra-ui/react";
import React, { Component } from "react";

type AboutMeProps = {
  aboutMe?: String;
};

export default class AboutMe extends Component<AboutMeProps> {
  render() {
    const { aboutMe } = this.props;
    return (
      <Text
        fontSize={13}
        ml="4"
        color="black"
        whiteSpace="pre-line"
        textAlign="justify"
      >
        {aboutMe}
      </Text>
    );
  }
}
