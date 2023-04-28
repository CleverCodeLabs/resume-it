import { Tag, Text, WrapItem } from "@chakra-ui/react";
import React, { Component } from "react";

type SkillItemProps = {
  name: string;
  level: number;
};

export default class SkillItem extends Component<SkillItemProps> {
  render() {
    const { name, level } = this.props;
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
