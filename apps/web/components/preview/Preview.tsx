import { Box } from "@chakra-ui/react";
import React, { FC, PropsWithChildren } from "react";
import PreviewToolBar from "./PreviewToolBar";

export type PreviewProps = PropsWithChildren;
const Preview: FC<PreviewProps> = ({ children }) => {
  return (
    <Box bg="gray.200">
      <PreviewToolBar />
      {children}
    </Box>
  );
};

export default Preview;
