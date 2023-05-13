import { Heading } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

export const SectionHeader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Heading
      as="h2"
      size="lg"
      top="0"
      p="4"
      mx="-4"
      mb="4"
      pos="sticky"
      bgColor="white"
      zIndex="sticky"
      boxShadow="sm"
      display="flex"
      alignItems="center"
    >
      {children}
    </Heading>
  );
};
