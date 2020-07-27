import { ISnippetLoaded, SnippetActionType } from "./ISnippetActionTypes";

export const snippetLoaded = (name: string | number | symbol, state?: object): ISnippetLoaded => ({
  type: SnippetActionType.SNIPPET_LOADED,
  name,
  state,
});
