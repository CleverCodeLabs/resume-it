"use client";

import { Grid, GridItem } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import Header from "../header/Header";

export type BaseLayoutProps = PropsWithChildren;

const Layout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Grid
      templateAreas={`"header" "main"`}
      gridTemplateRows={"60px 1fr"}
      h="100vh"
      color="blackAlpha.700"
    >
      <GridItem area={"header"} as="header">
        <Header />
      </GridItem>
      <GridItem area={"main"} as="main">
        {children}
      </GridItem>
    </Grid>
  );
};

export default Layout;
