import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import CafeItem from './CafeItem';

function ListCafe({ cafes }) {
  if (!cafes.length) {
    return <p>No notes found</p>;
  }
  return (
    <div className="cafe-list">
      {cafes.map((cafe) => (
        <CafeItem key={cafe.id} {...cafe} />
      ))}
    </div>
  );
}

ListCafe.propTypes = {
  cafes: PropTypes.array.isRequired,
};

export default ListCafe;
