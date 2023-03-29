import React, { ReactElement } from "react";
import Layout from "../../components/layouts/Layout";
import ResumeEditingLayout from "../../components/layouts/ResumeEditingLayout";
import { NextPageWithLayout } from "../_app";
import ContactForm from "../../components/contact/ContactForm";
import ProfileForm from "../../components/profile/ProfileForm";
import LocationForm from "../../components/location/LocationForm";
import SkillsForm from "../../components/skills/SkillsForm";
import NetworksForm from "../../components/networks/NetworksForm";

const Contact: NextPageWithLayout = () => {
  return (
    <div>
      <ContactForm />
      <ProfileForm />
      <LocationForm />
      <SkillsForm />
      <NetworksForm />
    </div>
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
