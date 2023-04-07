import React, { ReactElement } from "react";
import Layout from "../../components/layouts/Layout";
import ResumeEditingLayout from "../../components/layouts/ResumeEditingLayout";
import { NextPageWithLayout } from "../_app";
import ContactForm from "../../components/contact/ContactForm";
import ProfileForm from "../../components/profile/ProfileForm";
import LocationForm from "../../components/location/LocationForm";
import Languages from "../../components/languages/Languages";
import HobbiesForm from "../../components/hobbies/HobbiesForm";
import SkillsForm from "../../components/skills/SkillsForm";
import Networks from "../../components/networks/Networks";
import { Box } from "@chakra-ui/react";

const Contact: NextPageWithLayout = () => {
  return (
    <Box>
      <ContactForm />
      <ProfileForm />
      <LocationForm />
      <Languages />
      <HobbiesForm />
      <SkillsForm />
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
