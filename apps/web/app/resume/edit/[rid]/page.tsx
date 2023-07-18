import React, { FC } from "react";
import EditResume from "./EditResume";

type Params = {
  rid: string;
};
const Page: FC<{ params: Params }> = ({ params: { rid } }) => (
  <EditResume {...{ rid }} />
);

export default Page;
