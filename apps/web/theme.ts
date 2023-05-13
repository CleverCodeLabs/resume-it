import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "*::-webkit-scrollbar": {
        width: "4px",
        backgroundColor: "var(--chakra-colors-gray-300)",
      },
      "*::-webkit-scrollbar-thumb": {
        borderRadius: "var(--chakra-radii-full)",
        backgroundColor: "var(--chakra-colors-blackAlpha-700)",
      },
    },
  },
});

export default theme;
