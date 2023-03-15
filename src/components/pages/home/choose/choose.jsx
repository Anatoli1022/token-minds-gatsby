import React from 'react';
import classNames from 'classnames/bind';

import styles from './choose.module.scss';

import stop from './images/choose-one-stop.svg';
import leader from './images/choose-leader.svg';
import pricing from './images/choose-pricing.svg';
import arrow from './images/choose-arrow.svg';

const cx = classNames.bind(styles);

const Choose = () => (
  <section className={cx('choose')}>
    <div className={cx('container')}>
      <h2 className={cx('title', 'title-black', 'title-center')}>Why Choose us?</h2>
      <p className={cx('text')}>Trusted by clients all across the globe</p>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <img src={arrow} alt="" loading="lazy" aria-hidden="true" className={cx('arrow')} />
          <img src={stop} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>One-Stop Service Provider</h3>
          <p className={cx('item-text')}>
            No need for multiple service providers, your needs from marketing to development to
            token sale strategy are all covered.
          </p>
        </li>
        <li className={cx('item')}>
          <img src={arrow} alt="" loading="lazy" aria-hidden="true" className={cx('arrow-2')} />
          <img src={leader} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>
            Industry
            <br /> Leader
          </h3>
          <p className={cx('item-text')}>
            Leading Crypto/NFT agency with recognition from Hackernoon and Coingape, with a track
            record since 2017.
          </p>
        </li>
        <li className={cx('item')}>
          <img src={arrow} alt="" loading="lazy" aria-hidden="true" className={cx('arrow-3')} />
          <img src={pricing} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>Transparent Pricing</h3>
          <p className={cx('item-text')}>
            Helping you with battle-tested solutions with the most effective and economical results
            for your business
          </p>
        </li>
      </ul>
    </div>
  </section>
);

export default Choose;
