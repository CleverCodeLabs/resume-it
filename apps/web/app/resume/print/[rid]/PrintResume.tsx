"use client";

import { Box } from "@chakra-ui/react";
import { FC } from "react";
import CoverPage from "../../../templates/basic/CoverPage";

type PrintResumeProps = {
  rid: string;
};
const PrintResume: FC<PrintResumeProps> = ({ rid }) => {
  return (
    <Box
      sx={{
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
        "@page": { margin: "0" },
      }}
    >
      <CoverPage />
    </Box>
  );
};

export default PrintResume;
