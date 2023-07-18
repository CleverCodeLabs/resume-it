import { FC, PropsWithChildren } from "react";
import Layout from "../../components/layouts/Layout";

const ResumeDashboardLayout: FC<PropsWithChildren> = ({ children }) => (
  <Layout>{children}</Layout>
);

export default ResumeDashboardLayout;
