import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

function Contract() {
  const { id } = useParams();
  return <div>{id}</div>;
}

export default connect(state => {
  return {
    token: state.tokenReducer
  };
})(Contract);
