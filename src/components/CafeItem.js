import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CafeItem({ id, title, image, location, description }) {
  return (
    <div className="cafe-item">
      <div className="cafe-item__header">
        <img src={image} alt="" />
      </div>
      <div className="cafe-item__body">
        <h4 className="cafe-item__title">{title}</h4>
        <h6 className="cafe-item__location">{location}</h6>
        {/* <p className="cafe-item__description">{description}</p> */}
        <p className="read_more">
          <Link to={`/cafes/${id}`}>Read More</Link>
        </p>
      </div>
    </div>
  );
}
CafeItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CafeItem;
