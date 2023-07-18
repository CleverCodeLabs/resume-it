import { IconButton, useDisclosure } from "@chakra-ui/react";
import React, { FC } from "react";
import { BiPrinter } from "react-icons/bi";
import Print from "./Print";

export type PrintButtonProps = {
  url: string;
};

const PrintButton: FC<PrintButtonProps> = ({ url }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Search database"
        icon={<BiPrinter />}
        onClick={onOpen}
      />
      <Print url={url} open={isOpen} onCLose={onClose} />
    </>
  );
};

export default PrintButton;
