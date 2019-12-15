import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { message } from 'antd';

import { getSingleUser } from '../../api/services/user';
import {} from '../../actions/users';

function UserPage({ token }) {
  const { id } = useParams();

  useEffect(() => {
    getSingleUser(id, token)
      .then(res => console.log(res))
      .catch(err => {
        if (err.response) {
          message.error(err.response.data.error);
        } else {
          message.error(err.message);
        }
      });
  });

  return <h3>{id}</h3>;
}

export default connect(state => {
  return {
    token: state.tokenReducer
  };
})(UserPage);
