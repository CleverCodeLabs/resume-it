import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { Skill } from "../../templates/basic/components/resume";

export type SkillAction = {
  type: "add" | "remove" | "favorites";
  data: Skill;
};

export const SkillsContext = createContext<Skill[]>([]);
export const SkillsDispatchContext = createContext<Dispatch<SkillAction>>(
  () => {}
);

export const useSkills = () => useContext(SkillsContext);
export const useSkillsDispatch = () => useContext(SkillsDispatchContext);

const SkillsReducer = (state: Skill[], action: SkillAction) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          name: action.data.name,
          favorites: action.data.favorites,
        },
      ];
    case "remove":
      return state.filter((s) => s.name !== action.data.name);
    case "favorites":
      const { favorites, name } = action.data;
      const skill = state.find((s) => s.name === name);
      if (skill) {
        skill.favorites = favorites;
      }
      return [...state];
    default:
      return state;
  }
};

type SkillsProviderProps = PropsWithChildren & {
  value: Skill[];
};

export const SkillsProvider: FC<SkillsProviderProps> = ({
  children,
  value,
}) => {
  const [skills, dispatch] = useReducer(SkillsReducer, value);

  return (
    <SkillsContext.Provider value={skills}>
      <SkillsDispatchContext.Provider value={dispatch}>
        {children}
      </SkillsDispatchContext.Provider>
    </SkillsContext.Provider>
  );
};
