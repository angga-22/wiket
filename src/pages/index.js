import React from 'react';
import { Link } from 'gatsby';

import Layout from 'components/layout';
import Image from 'components/image';
import SEO from 'components/seo';
import User from 'components/user';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <User />
  </Layout>
);

export default IndexPage;
