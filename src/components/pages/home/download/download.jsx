import React from 'react';
import classNames from 'classnames/bind';

import styles from './download.module.scss';

import arrow from './images/download-arrow.jpg';

const cx = classNames.bind(styles);

const Download = () => (
  <section className={cx('download')}>
    <div className={cx('container')}>
      <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
      <h2 className={cx('title', 'title-center', 'title-black')}>
        Download our <br /> full services brochure now
      </h2>
      <p className={cx('text')}>
        Download our full Engagement Marketing Services Brochure, containing client case studies,
        and service details.
      </p>
      <form action="" className={cx('form')}>
        <div className={cx('container-form')}>
          <div>
            <p className={cx('input-text')}>Name</p>
            <input type="text" name="name" className={cx('input')} />
          </div>
          <div>
            <p className={cx('input-text')}>Email</p>
            <input type="mail" name="mail" className={cx('input')} />
          </div>
        </div>
        <button className={cx('button')}>Download Brochure</button>
      </form>
    </div>
  </section>
);

export default Download;
