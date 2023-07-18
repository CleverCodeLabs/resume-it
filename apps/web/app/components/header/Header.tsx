import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

const Header: FC = () => {
  return (
    <Flex
      bg="gray.100"
      h="60px"
      borderBottom="1px"
      borderColor="gray.300"
      px={4}
      alignItems="center"
    >
      <Text as="b">Resume.it</Text>
    </Flex>
  );
};

export default Header;
