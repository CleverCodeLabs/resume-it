export interface LanguageState{
  counter: number;
  languages: {
    id?: number,
    name: string;
    level: string ;
  }[]
}

export const initialLanguagesState : LanguageState= {
  counter: 0,
  languages: []
}

const languagesReducer = (state: LanguageState, action: any) => {
  switch (action.type) {
    case "add":
      const newCounter = state.counter + 1;
      return {
        counter: newCounter,
        languages: [...state.languages, {
          id: newCounter,
          name: action.name,
          level: action.level,
        }],
      };
    case "edit":
      const {id, name, level} = action;
      return {
        counter: state.counter,
        languages: [...state.languages.filter((n) => n.id !== id), {
          id, name, level
        }].sort((first, second) => first.id - second.id),
      };
    case "remove":
      return {
        counter: state.counter,
        languages: state.languages.filter((n) => n.id !== action.id),
      };
    default:
      return state;
  }
};

export default languagesReducer;
