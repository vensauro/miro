import React from 'react';
import Box from 'components/box';
import Layout from 'components/layout';
import { graphql } from 'gatsby';

const NotFound = ({ data }) => (
  <Layout siteLink={data.site.siteMetadata.siteOfficial}>
    <Box>Not found.</Box>
  </Layout>
);

export default NotFound;

export const query = graphql`
  query NotfoundpageQuery {
    site {
      siteMetadata {
        siteOfficial
      }
    }
  }
`;
