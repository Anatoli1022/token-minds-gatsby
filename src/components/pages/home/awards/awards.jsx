import React from 'react';
import classNames from 'classnames/bind';

import styles from './awards.module.scss';

import background from './images/awards-background.jpg';
import btc from './images/awards-btc.png';
import coin from './images/awards-coin.png';
import news from './images/awards-news.png';
import hackernoon from './images/awards-hackernoon.png';

const cx = classNames.bind(styles);

const Awards = () => (
  <section className={cx('awards')}>
    <div className={cx('container')}>
      <img src={background} alt="" className={cx('background')} />
      <h2 className={cx('title', 'title-white', 'title-center')}>Awards</h2>
      <div className={cx('container-images')}>
        <img src={btc} alt="New BTC" loading="lazy" />
        <img src={coin} alt="Coin Gape" loading="lazy" />
        <img src={news} alt="News Affinity" loading="lazy" />
        <img src={hackernoon} alt="Hackernoon" loading="lazy" />
      </div>
    </div>
  </section>
);

export default Awards;
