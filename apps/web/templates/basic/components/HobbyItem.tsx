import { Tag, Text, WrapItem } from "@chakra-ui/react";
import React, { Component } from "react";

type HobbyItemProps = {
  name: string;
};

export default class HobbyItem extends Component<HobbyItemProps> {
  render() {
    const { name } = this.props;
    return (
      <WrapItem>
        <Tag
          size="lg"
          borderRadius="full"
          variant="solid"
          colorScheme="purple"
          mb="2"
          mr="2"
        >
          <Text fontSize={14} color="white">
            {name}
          </Text>
        </Tag>
      </WrapItem>
    );
  }
}
