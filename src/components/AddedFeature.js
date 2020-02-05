import React from 'react';

const AddedFeature = props => {
  const removerFeatureHandler = () => {
    props.removerFeatureHandler(props.feature);
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={removerFeatureHandler} className="button">
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
