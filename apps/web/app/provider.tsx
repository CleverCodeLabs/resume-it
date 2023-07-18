"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import theme from "../theme";

const GlobalProvider: FC<PropsWithChildren> = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export default GlobalProvider;
