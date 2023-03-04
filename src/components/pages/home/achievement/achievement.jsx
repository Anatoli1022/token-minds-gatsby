import React from 'react';
import classNames from 'classnames/bind';

import styles from './achievement.module.scss';
import ellipse from './images/achievement-ellipse.svg';

const cx = classNames.bind(styles);

const Achievement = () => (
  <section className={cx('achievement')}>
    <div className={cx('container')}>
      <h2 className={cx('title', 'title-black', 'title-center')}>Our Achievement</h2>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <img src={ellipse} alt="" className={cx('ellipse')} loading="lazy" aria-hidden="true" />
          <p className={cx('text')}>Credential</p>
          <span className={cx('item-achievement')}>Certified Expert</span>
        </li>
        <li className={cx('item')}>
          <img src={ellipse} alt="" className={cx('ellipse')} loading="lazy" aria-hidden="true" />
          <p className={cx('text')}>Amount Raised</p>
          <span className={cx('item-achievement')}>$250MM</span>
        </li>
        <li className={cx('item')}>
          <img src={ellipse} alt="" className={cx('ellipse')} loading="lazy" aria-hidden="true" />
          <p className={cx('text')}>Project Helped</p>
          <span className={cx('item-achievement')}>100+</span>
        </li>
      </ul>
    </div>
  </section>
);

export default Achievement;
