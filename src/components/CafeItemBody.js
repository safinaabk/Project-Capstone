import React from 'react';

function CafeItemBody({ title, location, description }) {
  return (
    <div className="cafe-item__content">
      <h3 className="cafe-item__title">{title}</h3>
      <h5 className="cafe-item__location">{location}</h5>
      <p className="cafe-item__description">{description}</p>
    </div>
  );
}

export default CafeItemBody;
