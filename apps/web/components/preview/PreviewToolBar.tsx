import { Stack } from "@chakra-ui/react";
import React, { FC } from "react";
import PrintButton from "./PrintButton";

export type PreviewToolBarProps = {};
const PreviewToolBar: FC<PreviewToolBarProps> = () => {
  return (
    <Stack
      direction="row-reverse"
      bg="white"
      borderBottom="1px"
      borderColor="gray.300"
      p={2}
    >
      <PrintButton url="http://localhost:3000/resume/print/1234" />
    </Stack>
  );
};

export default PreviewToolBar;
