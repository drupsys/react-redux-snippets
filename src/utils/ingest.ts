import { Store } from "redux";

const ingest = (dispatch: Store["dispatch"]) => (ev: Event) => {
  if (!(ev instanceof CustomEvent)) {
    return;
  }

  dispatch(ev.detail);
};

export default ingest;
