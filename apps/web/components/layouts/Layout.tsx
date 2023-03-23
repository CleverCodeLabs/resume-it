import { Grid, GridItem } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

export type BaseLayoutProps = PropsWithChildren;

const Layout: FC<BaseLayoutProps> = ({children}) => {
  return (
    <Grid
      templateAreas={`"header" "main"`}
      gridTemplateRows={"60px 1fr"}
      h="100vh"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem bg="orange.300" area={"header"}>
        Header
      </GridItem>
      <GridItem bg="lightgrey" area={"main"}>
        {children}
      </GridItem>
    </Grid>
  );
};

export default Layout;
