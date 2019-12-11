import React from 'react';
import { useParams } from 'react-router-dom';

export default function Admin() {
  const { id } = useParams();
  return (
    <>
      <h3>ID: {id}</h3>
    </>
  );
}
