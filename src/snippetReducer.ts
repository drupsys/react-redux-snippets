import { Reducer, AnyAction } from "redux";

interface ILastAction extends AnyAction {
  type: string;
}

export interface ISnippet {
  lastAction: ILastAction;
}

export const initialState: ISnippet = {
  lastAction: {
    type: "NONE",
  },
};

type ReducerType = Reducer<ISnippet>;
const snippetReducer: ReducerType = (_state = initialState, action) => {
  return {
    lastAction: action,
  };
};

export default snippetReducer;
