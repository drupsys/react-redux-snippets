import { ISnippet } from "../snippetReducer";

const inject = (eventName: string, getLastAction: () => ISnippet["lastAction"]) => () => {
  const event = new CustomEvent(eventName, {
    detail: getLastAction(),
  });

  window.dispatchEvent(event);
};

export default inject;
