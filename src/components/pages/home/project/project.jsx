import React from 'react';
import classNames from 'classnames/bind';

import styles from './project.module.scss';

import arrow from './images/project-arrow.svg';

const cx = classNames.bind(styles);

const Project = () => (
  <section className={cx('project')}>
    <div className={cx('container')}>
      <img src={arrow} alt="" loading="lazy" aria-hidden="true" className={cx('arrow')} />

      <h2 className={cx('title', 'title-center', 'title-white')}>Kick-off your project now</h2>
      <p className={cx('text')}>
        With the agency voted No. 1 by Hackernoon on your side, your project will be in good hands
      </p>
      <div className={cx('form-wrapper')}>
        <h3 className={cx('title-form')}>Schedule a free session now to start your project</h3>
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
            <div>
              <p className={cx('input-text')}>Company/projects name</p>
              <input type="text" name="Company" className={cx('input')} />
            </div>
          </div>
          <p className={cx('text-info')}>TokenMinds’ minimum budget is $3,000</p>
          <button className={cx('button')}>request free consultaion</button>
        </form>
      </div>
    </div>
  </section>
);

export default Project;
