import { Box, Icon, Tag, Text } from "@chakra-ui/react";
import React, { Component } from "react";

type TimeLineItemProps = {
  year: number;
  headLine: string;
  companyName: string;
};

export default class TimeLineEventItem extends Component<TimeLineItemProps> {
  render() {
    const { year, headLine, companyName } = this.props;

    return (
      <Box
        w="100%"
        pos="relative"
        css=":nth-child(10n + 5)  {grid-column:4} :nth-child(10n + 6)  {grid-column:3} :nth-child(10n + 7)  {grid-column:2} "
      >
        <Tag
          size="md"
          borderRadius="lg"
          variant="solid"
          backgroundColor="gray.300"
          mb="6"
          mr="2"
        >
          <Text fontSize={16} color="black" fontWeight="extrabold">
            {year}
          </Text>
        </Tag>
        <Icon
          viewBox="0 0 200 200"
          color="purple.600"
          position="absolute"
          left="10px"
          top="10px"
          mt="20px"
          ml="10px"
        >
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
        <Text fontSize={13} color="black" fontWeight="bold">
          {headLine}
        </Text>
        <Text fontSize={13} color="black">
          {companyName}
        </Text>
      </Box>
    );
  }
}
