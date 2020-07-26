import React, { FunctionComponent } from "react";
import Snippet from "../SnippetConnector";

const defaultOptions = {
  selector: ":not(#\\20)",
  repeat: 1,
};

const setupSnippet = <TState extends object>(
  options?: Partial<typeof defaultOptions>,
) => (
  name: keyof TState,
): FunctionComponent => ({ children }) => {
  const { selector, repeat } = {
    ...defaultOptions,
    ...options,
  };

  return (
    <Snippet featureName={name} selector={selector} repeat={repeat}>
      {children}
    </Snippet>
  );
};

export default setupSnippet;
