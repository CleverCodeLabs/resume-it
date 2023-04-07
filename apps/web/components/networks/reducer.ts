export interface NetworkState {
  counter: number;
  networks: {
    id?: number;
    name: string;
    link: string;
  }[];
}

export const initialNetworksState: NetworkState = {
  counter: 0,
  networks: []
}


const reducer = (state: NetworkState, action: any) => {

  switch (action.type) {
    case "add":
      const newCounter = state.counter + 1;
      return {
        counter: newCounter,
        networks: [...state.networks, {
          id: newCounter,
          name: action.name,
          link: action.link,
        }],
      };
    case "edit":
      const {id, name, link} = action;
      return {
        counter: state.counter,
        networks: [...state.networks.filter((n) => n.id !== id), {
          id, name, link
        }].sort((first, second) => first.id - second.id),
      };
    case "remove":
      return {
        counter: state.counter,
        networks: state.networks.filter((n) => n.id !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;
