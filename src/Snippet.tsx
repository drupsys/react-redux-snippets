import React, { FunctionComponent, useEffect } from "react";
import { create, Plugin } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import { ISnippetStateProps, ISnippetDispatchProps } from "./SnippetConnector";
import ISnippetProps from "./ISnippetProps";

type SnippetType = FunctionComponent<ISnippetProps & ISnippetStateProps & ISnippetDispatchProps>;
const Snippet: SnippetType = ({ repeat, selector, children, featureState, sendSnippetLoaded }) => {
  useEffect(() => {
    sendSnippetLoaded(featureState);
  }, []);

  const prefix = Array(repeat + 1).join(selector);

  const increaseRuleSpecificity: Plugin = {
    onProcessRule: (rule: any): any  => {
      const parent = rule.options.parent;

      if (rule.type !== "style" || (parent && parent.type === "keyframes")) {
        return;
      }

      rule.selectorText = prefix + rule.selectorText;
    },
  };

  return (
    <StylesProvider jss={create(jssPreset()).use(increaseRuleSpecificity)}>
      {children}
    </StylesProvider>
  );
};

export default Snippet;
