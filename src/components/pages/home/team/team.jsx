import React from 'react';
import classNames from 'classnames/bind';

import styles from './team.module.scss';

import team from './images/team-image.png';
import arrow from './images/team-arrow.png';

const cx = classNames.bind(styles);

const Team = () => (
  <section className={cx('team')}>
    <div className={cx('container', 'team-container')}>
      <div>
        <img src={team} alt="" loading="lazy" aria-hidden="true" />
      </div>
      <div className={cx('information')}>
        <h2 className={cx('title', 'title-black')}>the team</h2>
        <p className={cx('text')}>
          As a reputable Crypto & NFT Agency, the team at TokenMinds comprises experienced
          developers, designers, community managers, writers, consultants, and trainers. The company
          is committed to offering high-quality services that surpass customer expectations.
        </p>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Shared passion for Web3</p>
          </li>
          <li className={cx('item')}>
            <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Young and ambitious</p>
          </li>
          <li className={cx('item')}>
            <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Entrepreneurial and cutting edge</p>
          </li>
          <li className={cx('item')}>
            <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Quality and service focussed</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Team;
