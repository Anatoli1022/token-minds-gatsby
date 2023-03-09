import React from 'react';
import classNames from 'classnames/bind';

import styles from './about.module.scss';

import image from './images/about-image.jpg';
import strategy from './images/about-strategy.svg';
import creating from './images/about-creating.svg';
import conducting from './images/about-conducting.svg';
import development from './images/about-development.svg';

const cx = classNames.bind(styles);

const About = () => (
  <section className={cx('about')}>
    <div className={cx('container-large')}>
      <div className={cx('about-container')}>
        <img src={image} alt="" loading="lazy" aria-hidden="true" className={cx('image')} />

        <div className={cx('about-info')}>
          <h2 className={cx('title', 'title-black')}>About TokenMinds</h2>
          <p className={cx('text')}>
            Projects can leverage Web 3 Agency services to take their businesses to the next level.
            Web 3.0 is the third version of cyberspace, highlighting openness, decentralization, and
            users' independence. Web 3.0 is designed to overcome the critical challenges of Web 2.0,
            specifically centralization. Via centralized servers, tech behemoths control user data
            and content by determining how to use the information.
          </p>
          <p className={cx('text')}>
            Web 3.0 is designed to overcome the critical challenges of Web 2.0, specifically
            centralization. Via centralized servers, tech behemoths control user data and content by
            determining how to use the information.
          </p>
        </div>
      </div>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <div className={cx('item-container')}>
            <img src={strategy} alt="" loading="lazy" aria-hidden="true" />
            <h3 className={cx('item-title')}>Strategy Articulation</h3>
          </div>
          <p className={cx('item-text')}>
            A Web 3 agency can help you define the goals you can pursue with Web 3 technology. Once
            the agency identifies your goals, it can help you create a plan for meeting your
            objectives in the virtual lands.
          </p>
        </li>
        <li className={cx('item')}>
          <div className={cx('item-container')}>
            <img src={creating} alt="" loading="lazy" aria-hidden="true" />
            <h3 className={cx('item-title')}>Creation of Roadmap</h3>
          </div>
          <p className={cx('item-text')}>
            a roadmap is an essential component of a blockchain-related project. The roadmap helps
            your audience understand the steps/ milestones of meeting your objectives. Part of the
            Web 3 agency role is to help you create
          </p>
        </li>
        <li className={cx('item')}>
          <div className={cx('item-container')}>
            <img src={conducting} alt="" loading="lazy" aria-hidden="true" />
            <h3 className={cx('item-title')}>Conducting Web 3 studies to understand trends</h3>
          </div>
          <p className={cx('item-text')}>
            A Web 3 agency can help you define the goals you can pursue with Web 3 technology. Once
            the agency identifies your goals, it can help you create a plan for meeting.
          </p>
        </li>
        <li className={cx('item')}>
          <div className={cx('item-container')}>
            <img src={development} alt="" loading="lazy" aria-hidden="true" />
            <h3 className={cx('item-title')}>Development of a comprehensive report</h3>
          </div>
          <p className={cx('item-text')}>
            once a Web 3 agency gathers background information about your project, it will draft a
            report covering various parts. The report's main sections include background, goals, and
            target audience...
          </p>
        </li>
      </ul>
    </div>
  </section>
);

export default About;
