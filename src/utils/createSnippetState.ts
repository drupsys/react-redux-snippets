import { ISnippet, initialState } from "../snippetReducer";

export const createLastActionState = (overwrites: Partial<ISnippet["lastAction"]>): ISnippet["lastAction"] => ({
  ...initialState.lastAction,
  ...overwrites,
});

const createSnippetState = (overwrites: Partial<ISnippet> = {}): ISnippet => ({
  ...initialState,
  ...overwrites,
});

export default createSnippetState;
