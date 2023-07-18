import { Stack } from "@chakra-ui/react";
import React, { FC, PropsWithChildren } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import PreviewControls from "./PreviewControls";
import PreviewToolBar from "./PreviewToolBar";

export type PreviewProps = PropsWithChildren;
const Preview: FC<PreviewProps> = ({ children }) => {
  return (
    <Stack direction="column" bg="gray.200" h="100%" pos="relative">
      <PreviewToolBar />
      <TransformWrapper
        initialScale={0.8}
        minScale={0.3}
        centerOnInit={true}
        wheel={{ step: 0.1 }}
      >
        <PreviewControls />
        <TransformComponent
          wrapperStyle={{ width: "100%", height: "100%", position: "relative" }}
        >
          {children}
        </TransformComponent>
      </TransformWrapper>
    </Stack>
  );
};

export default Preview;
