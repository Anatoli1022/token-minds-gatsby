import React from 'react';
import classNames from 'classnames/bind';

import styles from './optimized.module.scss';
import background from './images/optimized-background.svg';
import arrow from './images/optimized-arrow.svg';

const cx = classNames.bind(styles);

const Optimized = () => (
  <section className={cx('optimized')}>
    <div className={cx('container')}>
      <img src={background} alt="" className={cx('background')} loading="lazy" aria-hidden="true" />
      <h2 className={cx('title', 'title-center', 'title-black')}>Our Optimized Packages</h2>
      <div className={cx('wrapper-packages')}>
        <div className={cx('package')}>
          <h3 className={cx('package-title')}>Community Building Package</h3>
          <h4 className={cx('price')}>$ 3,000</h4>
          <ul className={cx('list')}>
            <li className={cx('item')}>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
              <p className={cx('text')}>Community Management 24/7</p>
            </li>
            <li className={cx('item')}>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
              <p className={cx('text')}>Promotion in blockchain platforms</p>
            </li>
            <li className={cx('item')}>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
              <p className={cx('text')}>Maintain Activeness in community</p>
            </li>

            <li className={cx('item')}>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
              <p className={cx('text')}>Social Media Content Creation</p>
            </li>
            <li className={cx('item')}>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
              <p className={cx('text')}>Social Media Management</p>
            </li>
            <li className={cx('item')}>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
              <p className={cx('text')}>Twitter Followers Organic Growth</p>
            </li>
            <li className={cx('item')}>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
              <p className={cx('text')}>Weekly Community Data Report</p>
            </li>
          </ul>
        </div>
        <div className={cx('package')}>
          <h3 className={cx('package-title')}>IEO Marketing Package</h3>
          <h4 className={cx('price')}>$ 7,900</h4>
          <ul className={cx('list')}>
            <li className={cx('item')}>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
              <p className={cx('text')}>20 Page Whitepaper creation</p>
            </li>
            <li className={cx('item')}>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
              <p className={cx('text')}>Standard English PR Marketing</p>
            </li>
            <li className={cx('item')}>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
              <p className={cx('text')}>4 Crypto Investor Influencer Promotions</p>
            </li>
            <li className={cx('item')}>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
              <p className={cx('text')}>2 Crypto Audience Online Events</p>
            </li>
            <li className={cx('item')}>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
              <p className={cx('text')}>Daily Support & Weekly Reporting</p>
            </li>
          </ul>
        </div>
        <div className={cx('package')}>
          <h3 className={cx('package-title')}>NFT Generative Art Solution Package</h3>
          <h4 className={cx('price')}>$ 12,500</h4>
          <ul className={cx('list')}>
            <li className={cx('item')}>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
              <p className={cx('text')}>Smart Contract Testnet Development</p>
            </li>
            <li className={cx('item')}>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
              <p className={cx('text')}>Smart Contract Mainnet Development</p>
            </li>
            <li className={cx('item')}>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
              <p className={cx('text')}>PFP NFTs Minting Function Development</p>
            </li>
            <li className={cx('item')}>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
              <p className={cx('text')}>Basic Generative Artwork Solution</p>
            </li>
            <li className={cx('item')}>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
              <p className={cx('text')}>MetaMask Integration</p>
            </li>
            <li className={cx('item')}>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
              <p className={cx('text')}>Basic Web Development</p>
            </li>
            <li className={cx('item')}>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
              <p className={cx('text')}>Full After-Deployment Support</p>
            </li>
            <li className={cx('item')}>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
              <p className={cx('text')}>Daily Support & Weekly Reporting</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Optimized;
