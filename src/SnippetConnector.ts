import { connect, MapDispatchToPropsParam, MapStateToPropsParam } from "react-redux";
import Snippet from "./Snippet";
import ISnippetProps from "./ISnippetProps";
import { getFeatureState } from "./selectors";
import { snippetLoaded } from "./actions";

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
  sendSnippetLoaded: (featureState) => dispatch(snippetLoaded(featureName, featureState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Snippet);
