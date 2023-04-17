import React from 'react';
import catalog from './../../images/Catalog.svg';
import favorites from './../../images/Favorites.svg';
import cart from './../../images/Cart.svg';
import profile from './../../images/icon_dog.svg';
import s from './HeaderIcons.module.css';

export const HeaderIcons = () => {
  return (
    <div className={s.header__icons}>
      <a href='/' className={s.header__link}>
        <img src={catalog} alt='catalog' className={s.header__icon} />
      </a>

      <a href='/' className={s.header__link}>
        <img src={favorites} alt='favorites' className={s.header__icon} />
      </a>

      <a href='/' className={s.header__link}>
        <img src={cart} alt='cart' className={s.header__icon} />
      </a>

      <a href='/' className={s.header__link}>
        <img src={profile} alt='profile' className={s.header__icon} />
      </a>
    </div>
  );
};
