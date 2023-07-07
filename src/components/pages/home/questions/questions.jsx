import React from 'react';
import classNames from 'classnames/bind';

import styles from './questions.module.scss';
import background from './images/questions-background.jpg';

import { data } from './data';
import { Accordion } from 'hooks/accordion/accordion';

const cx = classNames.bind(styles);

const Questions = () => (
  <section className={cx('questions')}>
    <div className={cx('container')}>
      <img src={background} alt="" className={cx('background')} loading="lazy" aria-hidden="true" />
      <h2 className={cx('title', 'title-center', 'title-black')}>FAQ</h2>
      <ul className={cx('list')}>
        {data.map((section, index) => {
          return <Accordion section={section} key={index} />;
        })}
      </ul>
    </div>
  </section>
);

export default Questions;
