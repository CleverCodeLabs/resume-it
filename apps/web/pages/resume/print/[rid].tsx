import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";
import CoverPage from "../../../templates/basic/CoverPage";

const PrintResume: FC = () => {
  const router = useRouter();
  const { rid } = router.query;
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
