import React from 'react';
import classNames from 'classnames/bind';

import styles from './comments.module.scss';
import onplanet from './images/comments-onplanet.jpg';
import furry from './images/comments-furry.jpg';
import neon from './images/comments-neon.jpg';

import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/pagination';

const cx = classNames.bind(styles);

const Comments = () => (
  <section className={cx('comments')}>
    <div className={cx('container', 'wrapper')}>
      <h2 className={cx('title', 'title-center', 'title-black')}>What our clients are saying</h2>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <img src={onplanet} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>Onplanet</h3>
          <p className={cx('item-text')}>
            Big thank you to our PR partners!👏 An amazing job utilizing digital & print media & top
            influencers Together, we are building a strong community.💪
          </p>
        </li>
        <li className={cx('item')}>
          <img src={furry} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>Luchy Furry</h3>
          <p className={cx('item-text')}>
            We wanted to thank for their great work ! They helped us become a very fast growing
            project with their PR strategy and influencer marketing 🚀
          </p>
        </li>
        <li className={cx('item')}>
          <img src={neon} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>NeoNomad Finance</h3>
          <p className={cx('item-text')}>
            Shout out to token minds for a great campaign! Reach out to them on TG They are
            absolute💎💎💎
          </p>
        </li>
      </ul>

      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className={cx('item')}>
            <img
              src={onplanet}
              alt=""
              loading="lazy"
              aria-hidden="true"
              className={cx('comment-image')}
            />
            <h3 className={cx('item-title')}>Onplanet</h3>
            <p className={cx('item-text')}>
              Big thank you to our PR partners!👏 An amazing job utilizing digital & print media &
              top influencers Together, we are building a strong community.💪
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx('item')}>
            <img
              src={furry}
              alt=""
              loading="lazy"
              aria-hidden="true"
              className={cx('comment-image')}
            />
            <h3 className={cx('item-title')}>Luchy Furry</h3>
            <p className={cx('item-text')}>
              We wanted to thank for their great work ! They helped us become a very fast growing
              project with their PR strategy and influencer marketing 🚀
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx('item')}>
            <img
              src={neon}
              alt=""
              loading="lazy"
              aria-hidden="true"
              className={cx('comment-image')}
            />
            <h3 className={cx('item-title')}>NeoNomad Finance</h3>
            <p className={cx('item-text')}>
              Shout out to token minds for a great campaign! Reach out to them on TG They are
              absolute💎💎💎
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
);

export default Comments;
