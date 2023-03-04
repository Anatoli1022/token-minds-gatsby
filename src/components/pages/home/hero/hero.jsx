import React from 'react';
import classNames from 'classnames/bind';

import styles from './hero.module.scss';

import background from './images/hero-background.jpg';
import hack from './images/hero-hack.png';
import btc from './images/hero-btc.png';
import coin from './images/hero-coin.png';
import news from './images/hero-news.png';

const cx = classNames.bind(styles);

const Hero = () => (
  <section className={cx('hero')}>
    <div className={cx('container')}>
      <img
        src={background}
        alt=""
        className={cx('background')}
        loading="eager"
        aria-hidden="true"
      />
      <h1 className={cx('title')}>Web3 agency making dream projects a reality!</h1>
      <div className={cx('container-images')}>
        <img src={news} alt="Hackernoon" loading="eager" />
        <img src={btc} alt="New BTC" loading="eager" />
        <img src={coin} alt="Coin Gape" loading="eager" />
        <img src={hack} alt="News Affinity" loading="eager" />
      </div>
    </div>
  </section>
);

export default Hero;
