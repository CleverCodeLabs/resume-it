import { FC, PropsWithChildren } from "react";
import Layout from "../../components/layouts/Layout";

const EditResumeLayout: FC<PropsWithChildren> = ({ children }) => (
  <Layout>{children}</Layout>
);

export default EditResumeLayout;
