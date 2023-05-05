import { Box, Text } from "@chakra-ui/react";
import React, { Component } from "react";

type IdentityProps = {
  name?: string;
  headline?: string;
  yearsOfExperience?: number;
};

export default class Identity extends Component<IdentityProps> {
  render() {
    const { name, headline, yearsOfExperience } = this.props;
    return (
      <Box>
        <Text color="purple.600" fontWeight="extrabold" fontSize="2xl">
          {name}
        </Text>
        <Text color="black" fontWeight="extrabold" fontSize="xl">
          {headline}
        </Text>
        <Text color="black" fontWeight="extrabold" fontSize="xl">
          {yearsOfExperience} ans d'expérience
        </Text>
      </Box>
    );
  }
}
