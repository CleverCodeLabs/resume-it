import { Box, Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import useSWR from "swr";
import Hobbies from "../../../components/hobbies/Hobbies";
import Languages from "../../../components/languages/Languages";
import Layout from "../../../components/layouts/Layout";
import LocationForm from "../../../components/location/LocationForm";
import Navbar from "../../../components/nav/nav";
import Networks from "../../../components/networks/Networks";
import Preview from "../../../components/preview/Preview";
import ProfileForm from "../../../components/profile/ProfileForm";
import Skills from "../../../components/skills/Skills";
import { ResumeProvider } from "../../../context/ResumeContext";
import { Resume } from "../../../templates/basic/components/resume";
import CoverPage from "../../../templates/basic/CoverPage";
import { NextPageWithLayout } from "../../_app";

const Editing: NextPageWithLayout = () => {
  const router = useRouter();
  const { rid } = router.query;
  const fetcher = (url: any) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR<Resume>(
    rid ? `http://localhost:3333/resumes/${rid}` : null,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const {
    picture,
    fullName,
    phoneNumber,
    emailAddress,
    dateOfBirth,
    headline,
    yearsOfExperience,
    aboutMe,
  } = data.profile || {};

  return (
    <ResumeProvider value={data}>
      <Grid
        templateAreas={`"nav form preview"`}
        gridTemplateColumns={"60px 1fr 2fr"}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <GridItem area={"form"}>
          <Box
            pl="2"
            px="4"
            bg="gray.50"
            overflowY="scroll"
            h="calc(100vh - 60px)"
            scrollBehavior="smooth"
            >
            <ProfileForm
            {...{
                picture,
                fullName,
                phoneNumber,
                emailAddress,
                dateOfBirth,
                headline,
                yearsOfExperience,
                aboutMe,
              }}
            /><LocationForm />
            <Languages />
            <Hobbies />
            <Skills />
            <Networks />
          </Box>
        </GridItem>
        <GridItem area={"preview"} h="calc(100vh - 60px)">
          <Preview>
            <CoverPage />
          </Preview>
        </GridItem>
      </Grid>
    </ResumeProvider>
  );
};

Editing.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Editing;
