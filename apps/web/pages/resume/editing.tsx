import { ReactElement } from "react";
import Layout from "../../components/layouts/Layout";
import ResumeEditingLayout from "../../components/layouts/ResueEditingLayout";
import { NextPageWithLayout } from "../_app";

const Editing: NextPageWithLayout = () => {
  return <div>Le contenue de mon formulaire</div>;
};

Editing.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <ResumeEditingLayout>{page}</ResumeEditingLayout>
    </Layout>
  );
};

export default Editing;
