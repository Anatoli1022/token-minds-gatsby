import React from 'react';
import classNames from 'classnames/bind';

import styles from './clients.module.scss';

import ebakus from './images/clients-ebakus.jpg';
import capdax from './images/clients-capdax.jpg';
import birdchain from './images/clients-birdchain.jpg';
import essentia from './images/clients-essentia.jpg';
import remme from './images/clients-remme.jpg';
import crypto from './images/clients-crypto.jpg';

const cx = classNames.bind(styles);

const Clients = () => (
  <section className={cx('clients')}>
    <div className={cx('container')}>
      <h2 className={cx('title', 'title-center', 'title-black')}>Our Clients</h2>
      <div className={cx('images-container')}>
        <div>
          <img src={ebakus} alt="ebakus" loading="lazy" />
        </div>
        <div>
          <img src={capdax} alt="capdax" loading="lazy" />
        </div>
        <div>
          <img src={birdchain} alt="birdchain" loading="lazy" />
        </div>
        <div>
          <img src={essentia} alt="essentia.one" loading="lazy" />
        </div>
        <div>
          <img src={remme} alt="remme" loading="lazy" />
        </div>
        <div>
          <img src={crypto} alt="CryptoBlades" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
);

export default Clients;
