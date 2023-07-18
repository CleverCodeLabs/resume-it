import { ElementType } from "react";

export interface Network {
  id?: number;
  name: string;
  link: string;
  icon: ElementType;
}

export interface NetworkState {
  counter: number;
  networks: Network[];
}

export const initialNetworksState: NetworkState = {
  counter: 0,
  networks: [],
};

const reducer = (state: NetworkState, action: any) => {
  switch (action.type) {
    case "add":
      const newCounter = state.counter + 1;
      return {
        counter: newCounter,
        networks: [
          ...state.networks,
          {
            id: newCounter,
            name: action.network.name,
            link: action.link,
            icon: action.network.icon,
          },
        ],
      };
    case "edit":
      const { id, name, link, icon } = action;
      return {
        counter: state.counter,
        networks: [
          ...state.networks.filter((n) => n.id !== id),
          {
            id,
            name: action.network.name,
            link: action.link,
            icon: action.network.icon,
          },
        ].sort((first, second) => first.id - second.id),
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
