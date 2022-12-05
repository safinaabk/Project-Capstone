import React from 'react';
import CafeItemContainer from './CafeItemContainer';

function ListCafe({ cafes }) {
  return (
    <>
      {cafes.length !== 0 ? (
        <div className="cafes-list">
          {cafes.map((cafe) => (
            <CafeItemContainer key={cafe.id} id={cafe.id} {...cafe} />
          ))}
        </div>
      ) : (
        <div className="cafe-list__empty-message">Belum ada List Cafe</div>
      )}
    </>
  );
}

export default ListCafe;
