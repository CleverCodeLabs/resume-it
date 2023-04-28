import { Box } from "@chakra-ui/react";

import React, { FC, PropsWithChildren } from "react";

export type TemplatesProps = PropsWithChildren;
const Page: FC<TemplatesProps> = ({ children }) => {
  return (
    <Box w="210mm" h="297mm" bg="white">
      {children}
    </Box>
  );
};

export default Page;
