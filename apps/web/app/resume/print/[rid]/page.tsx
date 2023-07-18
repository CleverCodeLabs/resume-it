import React, { FC } from "react";
import PrintResume from "./PrintResume";

type Params = {
  rid: string;
};
const Page: FC<{ params: Params }> = ({ params: { rid } }) => (
  <PrintResume {...{ rid }} />
);

export default Page;
