import React from 'react';
import { useParams } from 'react-router-dom';

function UserPage() {
  const { id } = useParams();
  return <h3>{id}</h3>;
}

export default UserPage;
