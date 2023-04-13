import React, { ReactElement } from "react";
import Layout from "../../components/layouts/Layout";
import ResumeEditingLayout from "../../components/layouts/ResumeEditingLayout";
import { NextPageWithLayout } from "../_app";
import ContactForm from "../../components/contact/ContactForm";
import ProfileForm from "../../components/profile/ProfileForm";
import LocationForm from "../../components/location/LocationForm";
import Languages from "../../components/languages/Languages";
import Skills from "../../components/skills/Skills";
import Networks from "../../components/networks/Networks";
import Hobbies from "../../components/hobbies/Hobbies";
import { Box } from "@chakra-ui/react";

const Contact: NextPageWithLayout = () => {
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

Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <ResumeEditingLayout>{page}</ResumeEditingLayout>
    </Layout>
  );
};

export default Contact;
