import React from 'react';
import { VscLocation } from 'react-icons/vsc';
import { BiFoodMenu, BiCoffeeTogo } from 'react-icons/bi';
import { TbCalendarStats } from 'react-icons/tb';
import { RiRestaurant2Fill } from 'react-icons/ri';
import { BsCashCoin } from 'react-icons/bs';

function DetailCafe({ id, title, image, location, drinkprice, foodprice, category, reservasi, time, bayar, rasa, kebersihan, kenyamanan, pelayanan }) {
  return (
    <div className="detail-page__container">
      <div className="detail-header">
        <img className="detail-header__gambar" src={image} alt="" width="30%" />
        <div className="detail-header__keterangan">
          <h2 className="detail-page__title">{title}</h2>
          <h4 className="detail-header__location">
            <VscLocation /> {location}
          </h4>
          <p className="detail-header__category">
            {' '}
            <BiFoodMenu /> {category}
          </p>
          <p className="detail-header__time">
            <TbCalendarStats /> {time}
          </p>
          <p className="detail-header__foodprice">
            <RiRestaurant2Fill /> {foodprice}
          </p>
          <p className="detail-header__drinkprice">
            <BiCoffeeTogo /> {drinkprice}
          </p>
          <p className="detail-header__payment">
            <BsCashCoin /> {bayar}
          </p>
          <div className="detail-page__rating">
            <div className="card-rating">
              <div className="card-rating__name"> Rasa </div>
              <div className="card-rating__nilai">{rasa}</div>
            </div>
            <div className="card-rating">
              <div className="card-rating__name">Kebersihan</div>
              <div className="card-rating__nilai">{kebersihan}</div>
            </div>
            <div className="card-rating">
              <div className="card-rating__name">Kenyamanan</div>
              <div className="card-rating__nilai">{kenyamanan}</div>
            </div>
            <div className="card-rating">
              <div className="card-rating__name">Pelayanan</div>
              <div className="card-rating__nilai">{pelayanan}</div>
            </div>
          </div>
          <p className="for_reserv">For reservation</p>
          <div className="add_komentar">
            {' '}
            <a href={reservasi}> Contact Us</a>
          </div>
        </div>
      </div>
      {/* <div className="detail-page__rating">
        <div className="card-rating">
          <div className="card-rating__name"> Rasa </div>
          <div className="card-rating__nilai">{rasa}</div>
        </div>
        <div className="card-rating">
          <div className="card-rating__name">Kebersihan</div>
          <div className="card-rating__nilai">{kebersihan}</div>
        </div>
        <div className="card-rating">
          <div className="card-rating__name">Kenyamanan</div>
          <div className="card-rating__nilai">{kenyamanan}</div>
        </div>
        <div className="card-rating">
          <div className="card-rating__name">Pelayanan</div>
          <div className="card-rating__nilai">{pelayanan}</div>
        </div>
      </div> */}
      <div className="detail-body">{/* <p className="detail-page__description">{description}</p> */}</div>
      {/* <div className="add_komentar">
        {' '}
        <a href={reservasi} target="_blank">
          {' '}
          Contact Us
        </a>
      </div> */}
    </div>
  );
}

export default DetailCafe;
