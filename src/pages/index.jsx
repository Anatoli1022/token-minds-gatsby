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
import Download from 'components/pages/home/download';
import Questions from 'components/pages/home/questions';
import Comments from 'components/pages/home/comments';
import Clients from 'components/pages/home/clients';
import Team from 'components/pages/home/team';
import Blogs from 'components/pages/home/blogs';
import Media from 'components/pages/home/media';
import Project from 'components/pages/home/project';

const HomePage = () => (
  <Layout>
    <Hero />
    <Optimized />
    <Choose />
    <Achievement />
    <Awards />
    <About />
    <Agency />
    <Download />
    <Questions />
    <Comments />
    <Clients />
    <Team />
    <Blogs />
    <Media />
    <Project />
  </Layout>
);

export default HomePage;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
