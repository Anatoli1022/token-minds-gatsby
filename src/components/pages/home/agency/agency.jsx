import React from 'react';
import classNames from 'classnames/bind';

import styles from './agency.module.scss';

import background from './images/agency-background.svg';
import crypto from './images/agency-crypto.svg';
import marketing from './images/agency-marketing.svg';
import development from './images/agency-development.svg';
import blockchain from './images/agency-blockchain.svg';
import web from './images/agency-web.svg';

const cx = classNames.bind(styles);

const Agency = () => (
  <section className={cx('agency')}>
    <div className={cx('container')}>
      <img src={background} alt="" loading="lazy" aria-hidden="true" className={cx('background')} />
      <h2 className={cx('title', 'title-white', 'title-center')}>Our web3 agency services</h2>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <img src={crypto} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>Crypto marketing</h3>
          <p className={cx('item-text')}>
            A vibrant community drives a successful crypto project. TokenMinds understands the right
            tactics to use in building and engaging...
          </p>
        </li>
        <li className={cx('item')}>
          <img src={marketing} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>NFT marketing</h3>
          <p className={cx('item-text')}>
            A vibrant community drives a successful crypto project. TokenMinds understands the right
            tactics to use in building and engaging...
          </p>
        </li>
        <li className={cx('item')}>
          <img src={development} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>NFT development </h3>
          <p className={cx('item-text')}>
            A vibrant community drives a successful crypto project. TokenMinds understands the right
            tactics to use in building and engaging...
          </p>
        </li>
        <li className={cx('item')}>
          <img src={blockchain} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>Blockchain development</h3>
          <p className={cx('item-text')}>
            A vibrant community drives a successful crypto project. TokenMinds understands the right
            tactics to use in building and engaging...
          </p>
        </li>
        <li className={cx('item')}>
          <img src={web} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>Other web3 services</h3>
          <p className={cx('item-text')}>
            A vibrant community drives a successful crypto project. TokenMinds understands the right
            tactics to use in building and engaging...
          </p>
        </li>
      </ul>
    </div>
  </section>
);

export default Agency;
