import { connect, MapDispatchToPropsParam, MapStateToPropsParam } from "react-redux";
import Snippet from "./Snippet";
import ISnippetProps from "./ISnippetProps";
import { getFeatureState } from "./SnippetSelectors";

export interface ISnippetStateProps {
  featureState?: object;
}

type MapToStateType = MapStateToPropsParam<ISnippetStateProps, ISnippetProps>;
const mapStateToProps: MapToStateType = (state, props) => ({
  featureState: getFeatureState(state, props.featureName),
});

export interface ISnippetDispatchProps {
  sendSnippetLoaded(featureState?: object): void;
}

type MapToDispatchType = MapDispatchToPropsParam<ISnippetDispatchProps, ISnippetProps>;
const mapDispatchToProps: MapToDispatchType = (dispatch, { featureName }) => ({
  sendSnippetLoaded: (featureState) => dispatch({
    type: "SNIPPET_LOADED",
    name: featureName,
    state: featureState,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Snippet);
