import React, { FC, useRef } from "react";

export type PrintProps = {
  url: string;
  open: boolean;
  onCLose: () => void;
};

const Print: FC<PrintProps> = ({ url, open, onCLose }) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const setPrint = () => {
    setTimeout(() => {
      if (iframeRef.current?.contentWindow) {
        const iFrameContent = iframeRef.current?.contentWindow;
        iFrameContent.onbeforeunload = onCLose;
        iFrameContent.onafterprint = onCLose;
        iFrameContent.focus(); // Required for IE
        iFrameContent.print();
      }
    }, 100);
  };

  return (
    <>
      {open && (
        <iframe
          ref={iframeRef}
          src={url}
          onLoad={setPrint}
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: 0,
            height: 0,
            border: 0,
          }}
        />
      )}
    </>
  );
};

export default Print;
