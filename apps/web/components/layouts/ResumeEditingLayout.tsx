import { Grid, GridItem } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

export type BaseLayoutProps = PropsWithChildren;

const ResumeEditingLayout: FC<BaseLayoutProps> = ({children}) => {
  return (
    <Grid
      templateAreas={`"nav main preview"`}
      gridTemplateColumns={"60px 1fr 2fr"}
      h="100%"
    >
      <GridItem pl="2" bg="pink.300" area={"nav"}>
        Nav
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        {children}
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"preview"}>
        Preview
      </GridItem>
    </Grid>
  );
};

export default ResumeEditingLayout;
