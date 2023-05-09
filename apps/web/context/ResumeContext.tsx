import { createContext, FC, PropsWithChildren } from "react";
import { ProfileProvider } from "../components/profile/ProfileContext";
import { Resume } from "../templates/basic/components/resume";

export const ResumeContext = createContext<Resume>({});

type ResumeProviderProps = PropsWithChildren & {
  value: Resume;
};
export const ResumeProvider: FC<ResumeProviderProps> = ({
  children,
  value,
}) => {
  const { profile } = value;
  return <ProfileProvider value={profile || {}}>{children}</ProfileProvider>;
};
