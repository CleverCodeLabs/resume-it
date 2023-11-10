import { createContext, FC, PropsWithChildren } from "react";
import { LanguagesProvider } from "../components/languages/LanguagesContext";
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
  const {profile, languages, skills} = value;
  return (
    <ProfileProvider value={profile || {}}>
      <LanguagesProvider value={languages || []}>
        <SkillsProvider value={skills || []}>{children}</SkillsProvider>
      </LanguagesProvider>
    </ProfileProvider>
  );
};
