import { Grid, GridItem } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import Navbar from "../nav/nav";
import Preview from "../preview/Preview";
export type BaseLayoutProps = PropsWithChildren;

const ResumeEditingLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Grid
      templateAreas={`"nav main preview"`}
      gridTemplateColumns={"60px 1fr 2fr"}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <GridItem
        pl="2"
        px="4"
        bg="gray.50"
        area={"main"}
        overflowY="scroll"
        h="calc(100vh - 60px)"
      >
        {children}
      </GridItem>
      <GridItem pl="2" bg="white" area={"preview"}>
        <Preview />
      </GridItem>
    </Grid>
  );
};

export default ResumeEditingLayout;
