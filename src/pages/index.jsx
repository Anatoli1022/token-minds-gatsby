import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

import Hero from 'components/pages/home/hero';
import Optimized from 'components/pages/home/optimized';
import Choose from 'components/pages/home/choose';
import Achievement from 'components/pages/home/achievement';
import Awards from 'components/pages/home/awards';
import About from 'components/pages/home/about';
import Agency from 'components/pages/home/agency';
import Comments from 'components/pages/home/comments';
import Clients from 'components/pages/home/clients';

const HomePage = () => (
  <Layout>
    <Hero />
    <Optimized />
    <Choose />
    <Achievement />
    <Awards />
    <About />
    <Agency />
    <Comments />
    <Clients />
  </Layout>
);

export default HomePage;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
