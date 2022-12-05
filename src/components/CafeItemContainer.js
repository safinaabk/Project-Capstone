import React from 'react';
import CafeItemBody from './CafeItemBody';

function CafeItemContainer({ title, location, description }) {
  return (
    <div className="cafe_item__container">
      <CafeItemBody title={title} location={location} description={description} />
    </div>
  );
}

export default CafeItemContainer;
