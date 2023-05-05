import React, { ReactElement } from "react";
import Layout from "../../components/layouts/Layout";
import ResumeEditingLayout from "../../components/layouts/ResumeEditingLayout";
import { NextPageWithLayout } from "../_app";
import { Box } from "@chakra-ui/react";
import ContactForm from "../../components/contact/ContactForm";
import ProfileForm from "../../components/profile/ProfileForm";
import LocationForm from "../../components/location/LocationForm";
import Languages from "../../components/languages/Languages";
import Hobbies from "../../components/hobbies/Hobbies";
import Skills from "../../components/skills/Skills";
import Networks from "../../components/networks/Networks";

const Editing: NextPageWithLayout = () => {
  return (
    <Box>
      <ContactForm />
      <ProfileForm />
      <LocationForm />
      <Languages />
      <Hobbies />
      <Skills />
      <Networks />
    </Box>
  );
};

Editing.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <ResumeEditingLayout>{page}</ResumeEditingLayout>
    </Layout>
  );
};

export default Editing;
