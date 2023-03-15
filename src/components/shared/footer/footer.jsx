import React from 'react';
import classNames from 'classnames/bind';
import styles from './footer.module.scss';
import logo from './images/footer-logo.png';
import facebook from './images/footer-facebook.svg';
import instagram from './images/footer-instagram.svg';
import youtube from './images/footer-youtube.svg';
import linkedin from './images/footer-linkedin.svg';
import tik_tok from './images/footer-tik_tok.svg';
import spotify from './images/footer-spotify.svg';

const cx = classNames.bind(styles);

const Footer = () => (
  <section className={cx('footer')}>
    <div className={cx('container')}>
      <nav className={cx('navigation')}>
        <img src={logo} alt="token minds" loading="lazy" className={cx('logo-mobile')} />
        <div className={cx('wrapper-social')}>
          <img src={logo} alt="token minds" loading="lazy" className={cx('logo')} />
          <h3 className={cx('social-title')}>Follow US</h3>
          <ul className={cx('social-list')}>
            <li className={cx('social-item')}>
              <a href="">
                <img src={facebook} alt="facebook" loading="lazy" />
              </a>
            </li>
            <li className={cx('social-item')}>
              <a href="">
                <img src={instagram} alt="instagram" loading="lazy" />
              </a>
            </li>
            <li className={cx('social-item')}>
              <a href="">
                <img src={youtube} alt="youtube" loading="lazy" />
              </a>
            </li>
            <li className={cx('social-item')}>
              <a href="">
                <img src={linkedin} alt="linkedin" loading="lazy" />
              </a>
            </li>
            <li className={cx('social-item')}>
              <a href="">
                <img src={tik_tok} alt="tik tok" loading="lazy" />
              </a>
            </li>
            <li className={cx('social-item')}>
              <a href="">
                <img src={spotify} alt="spotify" loading="lazy" />
              </a>
            </li>
          </ul>
        </div>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <h3 className={cx('item-title')}>Links</h3>
            <a href="" className={cx('link')}>
              Our Blog
            </a>
            <a href="" className={cx('link')}>
              Our Portfolio
            </a>
            <a href="" className={cx('link')}>
              Career
            </a>
            <a href="" className={cx('link')}>
              Free Webinar
            </a>
            <a href="" className={cx('link')}>
              Academy
            </a>
            <a href="" className={cx('link')}>
              Privacy policy
            </a>
          </li>
          <li className={cx('item')}>
            <h3 className={cx('item-title')}>Services</h3>
            <a href="" className={cx('link')}>
              Post ICO
            </a>
            <a href="" className={cx('link')}>
              Marketing
            </a>
            <a href="" className={cx('link')}>
              Bounty
            </a>
            <a href="" className={cx('link')}>
              Crypto Ads
            </a>
            <a href="" className={cx('link')}>
              PR Marketing
            </a>
            <a href="" className={cx('link')}>
              NFT Marketing
            </a>
          </li>
          <li className={cx('item')}>
            <h3 className={cx('item-title')}>Contact us</h3>
            <a href="mailto: info@tokenminds.co" className={cx('link')}>
              info@tokenminds.co
            </a>
            <p className={cx('address')}>Address: 36 Robinson RdSingapore 068877</p>
          </li>
        </ul>
      </nav>
      <div className={cx('wrapper')}>
        <p className={cx('copyright')}>2022 TokenMinds Singapore. All rights reserved.</p>
        <div className={cx('text-wrapper')}>
          <p className={cx('privacy-text')}>Privacy policy</p>
          <p className={cx('terms-text')}>Terms of us</p>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
