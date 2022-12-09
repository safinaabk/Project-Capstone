import React from 'react';
import PropTypes from 'prop-types';

function DetailCafe({ id, title, location, description, foodprice }) {
  return (
    <div className="detail-page__container">
      <h2 className="detail-page__title">{title}</h2>
      <div className="detail-header">
        <img className="detail-header__gambar" src="/images/aadk.png" alt="" />
        <div className="detail-header__keterangan">
          <h4 className="detail-header__location">location: {location}</h4>
          <p className="detail-header__category">cafe and resto</p>
          <p className="detail-header__time">Senin - Jumat (09.00 - 23.00 WIB)</p>
          <p className="detail-page__foodprice">{foodprice}</p>
        </div>
      </div>
      <div className="detail-page__rating">
        <div className="card-rating">
          <div className="card-rating__name"> Rasa </div>
          <div className="card-rating__nilai">4.5</div>
        </div>
        <div className="card-rating">
          <div className="card-rating__name">Kebersihan</div>
          <div className="card-rating__nilai">4.5</div>
        </div>
        <div className="card-rating">
          <div className="card-rating__name">Kenyamanan</div>
          <div className="card-rating__nilai">4.5</div>
        </div>
        <div className="card-rating">
          <div className="card-rating__name">Pelayanan</div>
          <div className="card-rating__nilai">4.5</div>
        </div>
      </div>
      <div className="detail-body">
        <p className="detail-page__description">{description}</p>
      </div>
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
