import { createContext, FC, PropsWithChildren } from "react";
import { ProfileProvider } from "../components/profile/ProfileContext";
import { SkillsProvider } from "../components/skills/SkillsContext";
import { Resume } from "../templates/basic/components/resume";

export const ResumeContext = createContext<Resume>({});

type ResumeProviderProps = PropsWithChildren & {
  value: Resume;
};
export const ResumeProvider: FC<ResumeProviderProps> = ({
  children,
  value,
}) => {
  const { profile, skills } = value;
  return (
    <ProfileProvider value={profile || {}}>
      <SkillsProvider value={skills || []}>{children}</SkillsProvider>
    </ProfileProvider>
  );
};
