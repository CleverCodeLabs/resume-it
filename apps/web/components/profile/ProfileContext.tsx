import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { Profile } from "../../templates/basic/components/resume";

export type ProfileAction = {
  type: "edit";
  data: Profile;
};

export const ProfileContext = createContext<Profile>({});
export const ProfileDispatchContext = createContext<Dispatch<ProfileAction>>(
  () => {}
);

export const useProfile = () => useContext(ProfileContext);
export const useProfileDispatch = () => useContext(ProfileDispatchContext);

const ProfileReducer = (state: Profile, action: ProfileAction) => {
  switch (action.type) {
    case "edit":
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

type ProfileProviderProps = PropsWithChildren & {
  value: Profile;
};

export const ProfileProvider: FC<ProfileProviderProps> = ({
  children,
  value,
}) => {
  const [Profile, dispatch] = useReducer(ProfileReducer, value);

  return (
    <ProfileContext.Provider value={Profile}>
      <ProfileDispatchContext.Provider value={dispatch}>
        {children}
      </ProfileDispatchContext.Provider>
    </ProfileContext.Provider>
  );
};
