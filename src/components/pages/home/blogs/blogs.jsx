import React from 'react';
import classNames from 'classnames/bind';

import styles from './blogs.module.scss';

import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/pagination';

import image_1 from './images/blogs-image-1.jpg';
import image_2 from './images/blogs-image-2.jpg';
import image_3 from './images/blogs-image-3.jpg';

const cx = classNames.bind(styles);

const Blogs = () => (
  <section className={cx('blogs')}>
    <div className={cx('container', 'wrapper')}>
      <h2 className={cx('title', 'title-center', 'title-black')}>Our blogs</h2>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img src={image_1} alt="" className={cx('image')} />
          <div className={cx('information')}>
            <h3 className={cx('information-title')}>
              NFT development – fully updated 2023 guide written by professionals
            </h3>
            <p className={cx('text')}>
              These days, NFT development has become a critical blockchain development service.
              According to News 18, the NFT marketplace expanded to nearly $41 billion...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_2} alt="" className={cx('image')} />
          <div className={cx('information')}>
            <h3 className={cx('information-title')}>
              NFT development – fully updated 2023 guide written by professionals
            </h3>
            <p className={cx('text')}>
              These days, NFT development has become a critical blockchain development service.
              According to News 18, the NFT marketplace expanded to nearly $41 billion...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_3} alt="" className={cx('image')} />
          <div className={cx('information')}>
            <h3 className={cx('information-title')}>
              NFT development – fully updated 2023 guide written by professionals
            </h3>
            <p className={cx('text')}>
              These days, NFT development has become a critical blockchain development service.
              According to News 18, the NFT marketplace expanded to nearly $41 billion...
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
);

export default Blogs;
