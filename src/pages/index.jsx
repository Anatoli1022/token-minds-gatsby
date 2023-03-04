import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

import Hero from 'components/pages/home/hero';
import Optimized from 'components/pages/home/optimized';
import Choose from 'components/pages/home/choose';
import Achievement from 'components/pages/home/achievement';

const HomePage = () => (
  <Layout>
    <Hero />
    <Optimized />
    <Choose />
    <Achievement />
  </Layout>
);

export default HomePage;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
