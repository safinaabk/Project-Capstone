import React from 'react';
import PropTypes from 'prop-types';

function DetailCafe({ id, title, location, description, foodprice }) {
  return (
    <div className="detail-page__container">
      <h2 className="detail-page__title">{title}</h2>
      <img src="/images/aadk.png" alt="" />
      <h4 className="detail-page__location">{location}</h4>
      <p className="detail-page__description">{description}</p>
      <p className="detail-page__foodprice">{foodprice}</p>
    </div>
  );
}

DetailCafe.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  foodprice: PropTypes.string.isRequired,
};

export default DetailCafe;
