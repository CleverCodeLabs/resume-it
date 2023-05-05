import { Grid, GridItem } from "@chakra-ui/react";
import React, { FC, PropsWithChildren } from "react";
import Navbar from "../nav/nav";
import CoverPage from "../../templates/basic/CoverPage";
import axios from "axios";
import useSWR from "swr";
import { useRouter } from "next/router";
import { ResumeProvider } from "../../context/ResumeContext";
import { Resume } from "../../templates/basic/components/resume";

export type BaseLayoutProps = PropsWithChildren;

const ResumeEditingLayout: FC<BaseLayoutProps> = ({ children }) => {
  const router = useRouter();
  const { rid } = router.query;
  const fetcher = (url: any) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR<Resume>(
    `http://localhost:3333/resumes/${rid}`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ResumeProvider value={data}>
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
        <GridItem pl="2" bg="blue.300" area={"preview"}>
          <CoverPage />
        </GridItem>
      </Grid>
    </ResumeProvider>
  );
};

export default ResumeEditingLayout;
