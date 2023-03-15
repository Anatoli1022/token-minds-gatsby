import React from 'react';
import classNames from 'classnames/bind';

import styles from './questions.module.scss';
import background from './images/questions-background.jpg';

const cx = classNames.bind(styles);

const Questions = () => (
  <section className={cx('questions')}>
    <div className={cx('container')}>
      <img src={background} alt="" className={cx('background')} loading="lazy" aria-hidden="true" />
      <h2 className={cx('title', 'title-center', 'title-black')}>FAQ</h2>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <h3 className={cx('item-title')}>Vestibulum ligula nulla, convallis ?</h3>
          <p className={cx('item-text')}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui consectetur culpa
            assumenda minus fugit ad ipsum inventore sequi, molestias ea soluta odit officia?
            Reprehenderit voluptatibus adipisci voluptate commodi. Explicabo, repudiandae.
          </p>
          <p className={cx('item-text')}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos vitae officiis dolore
            sapiente adipisci rem cupiditate, aliquam dolorem quo doloremque!
          </p>
        </li>
        <li className={cx('item')}>
          <h3 className={cx('item-title')}>Donec dictum mauris vel purus volutpat euismod.?</h3>
          <p className={cx('item-text')}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis odio commodi quod iste
            inventore dolor dolorum quasi omnis quo vero eaque iusto, voluptatum blanditiis soluta
            similique explicabo, sapiente porro vel.
          </p>
          <p className={cx('item-text')}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </li>
        <li className={cx('item')}>
          <h3 className={cx('item-title')}>
            Aenean luctus ligula quis fermentum porta. Etiam sagittis massa.?
          </h3>
          <p className={cx('item-text')}>
            Mauris dolor nulla, varius at tincidunt a, finibus ut massa. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Etiam eu augue quam. In hac habitasse platea dictumst.
          </p>
          <p className={cx('item-text')}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio magni error modi
            exercitationem nam placeat, maiores inventore aliquid perferendis.
          </p>
        </li>
        <li className={cx('item')}>
          <h3 className={cx('item-title')}>Nulla hendrerit massa in felis portquis.?</h3>
          <p className={cx('item-text')}>
            Mauris dolor nulla, varius at tincidunt a, finibus ut massa. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Etiam eu augue quam. In hac habitasse platea dictumst.
          </p>
        </li>
      </ul>
    </div>
  </section>
);

export default Questions;
