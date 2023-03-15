import React from 'react';
import classNames from 'classnames/bind';

import styles from './media.module.scss';

import hackernoon from './images/media-hackernoon.jpg';
import coin from './images/media-coin.jpg';
import crypto from './images/media-crypto.jpg';
import yahoo from './images/media-yahoo.jpg';
import ico from './images/media-ico.jpg';
import bitcoin from './images/media-bitcoin.jpg';
import ninjas from './images/media-ninjas.jpg';
import gape from './images/media-gape.jpg';

const cx = classNames.bind(styles);

const Media = () => (
  <section className={cx('media')}>
    <div className={cx('container')}>
      <h2 className={cx('title', 'title-center', 'title-black')}>What the media says</h2>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <img src={hackernoon} alt="Hackernoon" loading="lazy" />
          <p className={cx('item-text')}>
            Link up with the best blockchain development companies in 2021
          </p>
        </li>
        <li className={cx('item')}>
          <img src={coin} alt="Coinspeaker" loading="lazy" />
          <p className={cx('item-text')}>
            TokenMinds Spearheading Growth in blockchain and crypto space
          </p>
        </li>
        <li className={cx('item')}>
          <img src={crypto} alt="ZyCrypto" loading="lazy" />
          <p className={cx('item-text')}>
            TokenMinds provides project growth through online roadshows'
          </p>
        </li>
        <li className={cx('item')}>
          <img src={yahoo} alt="YaHoo" loading="lazy" />
          <p className={cx('item-text')}>
            'TokenMinds' pandemic proof marketing_plan for blockchain mjects'
          </p>
        </li>
        <li className={cx('item')}>
          <img src={ico} alt="Ico Hot List" loading="lazy" />
          <p className={cx('item-text')}>
            top thing to do before launching an Initial exchange offering
          </p>
        </li>
        <li className={cx('item')}>
          <img src={bitcoin} alt="Bitcoin Insider" loading="lazy" />
          <p className={cx('item-text')}>crypto marketing tips for blockchain projects</p>
        </li>
        <li className={cx('item')}>
          <img src={ninjas} alt="CryptoNinjas" loading="lazy" />
          <p className={cx('item-text')}>bringing inﬂuencers to your IEO marketing strategy</p>
        </li>
        <li className={cx('item')}>
          <img src={gape} alt="CoinGape" loading="lazy" />
          <p className={cx('item-text')}>top crypto marketing agencies that make NFT + deFi work</p>
        </li>
      </ul>
    </div>
  </section>
);

export default Media;
