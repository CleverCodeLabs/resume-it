import { GrFacebook, GrGithub, GrLinkedin } from "react-icons/gr";
import { MdWeb } from "react-icons/md";

export enum Network {
  FACEBOOK = "Facebook",
  LINKEDIN = "LinkedIn",
  GITHUB = "GitHub",
  PORTFOLIO = "Portfolio",
}

export const netWorkIcons = {
  [Network.FACEBOOK]: GrFacebook,
  [Network.LINKEDIN]: GrLinkedin,
  [Network.GITHUB]: GrGithub,
  [Network.PORTFOLIO]: MdWeb,
};
