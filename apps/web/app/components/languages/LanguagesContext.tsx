import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { Language } from "../../templates/basic/components/resume";

export type LanguageEvent = Language & {
  index?: number;
};

export type LanguageAction = {} & (
  | {
      type: "add";
      data: Language;
    }
  | {
      type: "edit";
      index: number;
      data: Language;
    }
  | {
      type: "remove";
      index: number;
    }
);

export interface LanguagesState {
  counter: number;
  languages: LanguageEvent[];
}

export const LanguagesContext = createContext<Language[]>([]);
export const LanguagesDispatchContext = createContext<Dispatch<LanguageAction>>(
  () => {},
);

export const useLanguages = () => useContext(LanguagesContext);
export const useLanguagesDispatch = () => useContext(LanguagesDispatchContext);

const languagesReducer = (state: Language[], action: LanguageAction) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          name: action.data.name,
          level: action.data.level,
        },
      ];
    case "edit":
      const { name, level } = action.data;
      const languages = [...state];
      languages.splice(action.index, 1, {
        name,
        level,
      });
      return [...languages];

    case "remove":
      return [...state.filter((n, index) => index !== action.index)];
    default:
      return state;
  }
};

type LanguagesProviderProps = PropsWithChildren<{
  value: Language[];
}>;

export const LanguagesProvider: FC<LanguagesProviderProps> = ({
  children,
  value,
}) => {
  const [languages, dispatch] = useReducer(languagesReducer, value);

  return (
    <LanguagesContext.Provider value={languages}>
      <LanguagesDispatchContext.Provider value={dispatch}>
        {children}
      </LanguagesDispatchContext.Provider>
    </LanguagesContext.Provider>
  );
};
