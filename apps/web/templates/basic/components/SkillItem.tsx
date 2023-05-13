import { Tag, Text, WrapItem } from "@chakra-ui/react";
import React, { FC } from "react";

type SkillItemProps = {
  name: string;
};

const SkillItem: FC<SkillItemProps> = ({ name }) => {
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
};

export default SkillItem;
