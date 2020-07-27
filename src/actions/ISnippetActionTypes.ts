import IAction from "./IAction";

export enum SnippetActionType {
  SNIPPET_LOADED = "@snippets/SNIPPET_LOADED",
}

export interface ISnippetLoaded extends IAction<SnippetActionType.SNIPPET_LOADED> {
  name: string | number | symbol;
  state?: object;
}

type ISnippetActionTypes = ISnippetLoaded;

export default ISnippetActionTypes;
