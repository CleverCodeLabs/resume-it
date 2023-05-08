import { HStack, IconButton } from "@chakra-ui/react";
import { FC } from "react";
import { BiReset } from "react-icons/bi";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
import { useControls } from "react-zoom-pan-pinch";

const PreviewControls: FC = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <HStack
      pos="absolute"
      bottom={4}
      left="50%"
      transform="auto"
      translateX="-50%"
      zIndex="docked"
      bg="gray.100"
      py={1}
      px={4}
      borderRadius="full"
    >
      <IconButton
        aria-label="zoom-in"
        size="sm"
        borderRadius="full"
        icon={<FiZoomIn />}
        onClick={() => zoomIn()}
      />
      <IconButton
        aria-label="zoom-out"
        size="sm"
        borderRadius="full"
        icon={<FiZoomOut />}
        onClick={() => zoomOut()}
      />
      <IconButton
        aria-label="reset"
        size="sm"
        borderRadius="full"
        icon={<BiReset />}
        onClick={() => resetTransform()}
      />
    </HStack>
  );
};

export default PreviewControls;
