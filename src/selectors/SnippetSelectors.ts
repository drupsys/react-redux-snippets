export const getFeatureState = (state: { [key: string]: any }, featureName: string | number | symbol) => {
  if (typeof featureName !== "string") {
    return;
  }

  const featureState = state[featureName];
  if (typeof featureState !== "object") {
    return;
  }

  return featureState as object;
};
