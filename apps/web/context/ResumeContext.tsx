import { createContext, FC, PropsWithChildren } from "react";
import { Resume } from "../templates/basic/components/resume";

export const ResumeContext = createContext<Resume>({});

type ResumeProviderProps = PropsWithChildren & {
  value: Resume;
};
export const ResumeProvider: FC<ResumeProviderProps> = ({
  children,
  value,
}) => <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>;
